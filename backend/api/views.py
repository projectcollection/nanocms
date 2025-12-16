from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpRequest, JsonResponse
from django.core import serializers
from django.forms import model_to_dict
from django.contrib.auth.models import User


from typing import Tuple
from dataclasses import dataclass
from enum import Enum
import inspect
import json
import os
import jwt
from datetime import datetime, timedelta

from api.models import Form, FormEntry

#Types
class InputType(Enum):
    text = 'text'
    textarea= 'textarea'

def index(request):
    return HttpResponse('Welcome to the nanocms api.')

@csrf_exempt
def forms(request: HttpRequest):
    res: dict = {}

    def input_to_enum(input_type: str):
        match input_type:
            case 'text':
                return InputType.text
            case 'textarea':
                return InputType.textarea
            case 'file':
                return InputType.file
            case _:
                raise Exception("unsupported input type")

    match request.method:
        case 'GET':

            res = {
                'message': 'get response'
            }
        case 'POST':
            default_form = {
                "title": "new form",
                "fields": [],
            }

            body = json.loads(request.body)
            default_form.update(body)
            body = default_form

            authorization_header = request.META.get("HTTP_AUTHORIZATION")

            if authorization_header is None:
                res = {
                    'message': 'missing Authorization token'
                }
            else:
                jwt_token = authorization_header.split(" ")[1]

                is_valid, decoded_token = validate_token(jwt_token)

                if not is_valid:
                    res = {
                        'message': 'invalid jwt token'
                    }
                else:
                    title = body['title']
                    fields = body['fields']

                    author = User.objects.get(username=decoded_token['username'])
                    new_form = Form(author=author, title=title, data=json.dumps({"fields": fields}))
                    new_form.save()

                    form_as_dict = model_to_dict(new_form)

                    res['data'] = form_as_dict
        case _:
            res = {
                'message': 'unhandled method'
            }

    return JsonResponse(res)

@csrf_exempt
def login(request: HttpRequest):
    res: dict = {}
    status: int = 200

    match request.method:
        case 'GET':
            res['message'] = 'get response'

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

