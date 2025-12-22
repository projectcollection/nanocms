from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpRequest, JsonResponse
from django.core import serializers
from django.forms import model_to_dict
from django.contrib.auth.models import User

from typing import Tuple
import json
import os
import jwt
from datetime import datetime, timedelta

from api.models import Form, FormEntry

def flatten_model_dict(form: dict):
    fields = form['fields']
    fields['id'] = form['pk']

    return fields

def index(request):
    return render(request, '../static/dist/index.html')

@csrf_exempt
def forms(request: HttpRequest):
    res: dict = {}
    status: int = 200

    authorization_header = request.META.get("HTTP_AUTHORIZATION")
    is_valid: boolean
    decoded_token: dict

    if authorization_header is None:
        match request.method:
            case 'GET':
                form_id = request.GET.get('form_id')
                forms_to_return = [Form()]

                if form_id is not None:
                    forms_to_return = Form.objects.filter(id=int(form_id))
                else:
                    forms_to_return = Form.objects.filter(author__username=author.username)

                forms = serializers.serialize('json', forms_to_return)
                forms = json.loads(forms)

                res['data'] = list(map(flatten_model_dict,forms))

            case _:
                res['message'] = 'unhandled method'
                status = 400

        return JsonResponse(res, status=status)
    else:
        jwt_token = authorization_header.split(" ")[1]
        is_valid, decoded_token = validate_token(jwt_token)


    if not is_valid:
        res['message'] = 'invalid jwt token'
        status = 400
    else:
        author = User.objects.get(username=decoded_token['username'])

        match request.method:
            case 'GET':
                form_id = request.GET.get('form_id')
                forms_to_return = [Form()]

                if form_id is not None:
                    forms_to_return = Form.objects.filter(id=int(form_id))
                else:
                    forms_to_return = Form.objects.filter(author__username=author.username)

                forms = serializers.serialize('json', forms_to_return)
                forms = json.loads(forms)

                def flatten_form(form: dict):
                    fields = form['fields']
                    fields['id'] = form['pk']

                    return fields

                res['data'] = list(map(flatten_form,forms))
            case 'POST':
                default_form = {
                    "title": "new form",
                    "fields": [],
                }

                body = json.loads(request.body)
                default_form.update(body)
                body = default_form

                title = body['title']
                fields = body['fields']

                new_form = Form(author=author, title=title, data=json.dumps(fields))
                new_form.save()

                form_as_dict = model_to_dict(new_form)

                res['data'] = form_as_dict

            case 'PUT':
                body = json.loads(request.body)

                id = body['form_id']
                update_data = body['data']

                form_to_update = Form.objects.get(id=id)
                if 'title' in update_data:
                    form_to_update.title = update_data['title']
                if 'data' in update_data:
                    form_to_update.data = json.dumps(update_data['data'])

                form_to_update.save()
                form_as_dict = model_to_dict(form_to_update)

                res['data'] = form_as_dict

            case 'DELETE':
                body = json.loads(request.body)
                id = body['form_id']

                try:
                    Form.objects.filter(id=id).delete()
                    res['message'] = 'deleted'
                except:
                    res['message'] = 'not found'
                    status = 404

            case _:
                res['message'] = 'unhandled method'
                status = 400

    return JsonResponse(res, status=status)

@csrf_exempt
def form_entry(request: HttpRequest):
    res: dict = {}
    status: int = 200

    authorization_header = request.META.get("HTTP_AUTHORIZATION")
    is_valid: boolean = False
    decoded_token: dict

    if authorization_header is None:
        match request.method:
            case 'POST':
                body = json.loads(request.body)

                form_id = body['form_id']
                fields = body['data']

                form = Form.objects.get(id=form_id)
                new_entry = FormEntry(form_id=form, data=json.dumps(fields))
                new_entry.save()

                entry_as_dict = model_to_dict(new_entry)
                res['data'] = entry_as_dict

            case _:
                res['message'] = 'unhandled method' 
                status = 400

        return JsonResponse(res, status=status)
    else:
        jwt_token = authorization_header.split(" ")[1]
        is_valid, decoded_token = validate_token(jwt_token)


    if not is_valid:
        res['message'] = 'invalid jwt token' 
        status = 400
    else:
        author = User.objects.get(username=decoded_token['username'])

        match request.method:
            case 'GET':
                form_id = request.GET.get('form_id')
                entry_id = request.GET.get('entry_id')
                entries_to_return = []

                if form_id is not None:
                    form = Form.objects.filter(id=form_id)[0]
                    entries_to_return = FormEntry.objects.filter(form_id=form)
                elif entry_id is not None:
                    entries_to_return = Form.objects.filter(id=entry_id)
                else:
                    res['message'] = "missing 'form_id' or 'form_entry' query params"
                    status = 400

                entries = serializers.serialize('json', entries_to_return)
                entries = json.loads(entries)

                res = {
                    "data": list(map(flatten_model_dict,entries))
                }
            case 'PUT':
                res['message'] = 'unhandled method'
                status = 400 

            case 'DELETE':
                res['message'] = 'unhandled method'
                status = 400 

            case _:
                res['message'] = 'unhandled method'
                status = 400

    return JsonResponse(res, status=status)

@csrf_exempt
def login(request: HttpRequest):
    res: dict = {}
    status: int = 200

    match request.method:
        case 'POST':
            try:
                body = json.loads(request.body)
                username = body['username']
                password = body['password']

                user = authenticate(username=username, password=password)
                user = User.objects.get(username=username)

                del body['password']

                payload = model_to_dict(user)
                del payload['password']

                if user is not None:
                    res['jwt'] = create_token(body)
                else:
                    res['message'] = 'user not found'
                    status = 404

            except json.JSONDecodeError:
                res['message'] = 'invalid body'
                status = 400

        case _:
            res['message'] = 'unhandled method'
            status = 400

    return JsonResponse(res, status=status)

@csrf_exempt
def validate_jwt(request: HttpRequest):
    res: dict = {}
    status: int = 200

    match request.method:
        case 'GET':
            res['message'] = 'validate get request'
            status = 200
        case 'POST':
            try:
                body = json.loads(request.body)

                token = body['jwt']
                is_valid, decoded_token = validate_token(token)

                del decoded_token['exp']

                res['jwt'] = create_token(body)

            except json.JSONDecodeError:
                res['message'] = 'invalid body'
                status = 400

        case _:
            res['message'] = 'unhandled method'
            status = 400

    return JsonResponse(res, status=status)

def create_token(payload: dict[str, str]) -> str:
    try:
        secret = os.environ['secret_key']

        token_payload = {
            **payload,
            'exp': datetime.utcnow() + timedelta(hours=1)
        }

        return jwt.encode(token_payload, secret, algorithm='HS256')
    except:
        raise Exception('missing secret key')

def validate_token(token: str) -> Tuple[bool, dict | str]:
    try:
        secret = os.environ['secret_key']
        payload = jwt.decode(token, secret, algorithms=['HS256'])
        return True, payload
    except jwt.ExpiredSignatureError:
        return False, "Token has expired"
    except jwt.InvalidTokenError:
        return False, "Invalid token"

