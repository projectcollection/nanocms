from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpRequest, JsonResponse


from dataclasses import dataclass
from enum import Enum
import inspect
import json
import os
import jwt
from datetime import datetime, timedelta

from . import models


#Types

class InputType(Enum):
    text = 'text'
    textarea= 'textarea'
    file = 'file'

@dataclass
class FormField:
    header: str
    details: str
    input: InputType

    def asdict(self):
        res = {}
        res['header'] = self.header
        res['details'] = self.details
        res['input'] = self.input.value

        return res

@dataclass
class Form:
    title: str
    fields: list[FormField]

    def asdict(self):
        res = {}
        fields_dict = list(map(lambda f: f.asdict(), self.fields))
        res['fields'] = fields_dict
        res['title'] = self.title

        return res


def index(request):
    return HttpResponse('Welcome to the nanocms api.')

@csrf_exempt
def forms(request: HttpRequest):
    res: dict = {}
    print('the query string:', request.META['QUERY_STRING'])

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

    def json_data_to_form(data: dict):
        title = body['title']
        fields = body['fields']
        fields = list(map(lambda f: FormField(f['header'], f['details'], input_to_enum(f['input'])), fields))

        return Form(title, fields)

    match request.method:
        case 'GET':

            res = {
                'message': 'get response'
            }
        case 'POST':
            body = json.loads(request.body)

            # NOTE: validate jwt token
            # jwt_token = body['jwt']
            #
            # is_valid_token = validate_token(jwt_token)
            #
            # res = {
            #     'forms list': 'forms list should be here',
            #     'message': 'post response'
            # }

            new_form = json_data_to_form(body)
            form_as_json = json.dumps(new_form.asdict())

            form = models.Form(data=form_as_json)
            form.save() 

            res['data'] = form_as_json
        case _:
            print('unhandled method')
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

                del body['password']

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

                print(body)
                token = body['jwt']
                decoded_token = validate_token(token)

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

def validate_token(token: str):
    try:
        secret = os.environ['secret_key']
        payload = jwt.decode(token, secret, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return "Token has expired"
    except jwt.InvalidTokenError:
        return "Invalid token"

