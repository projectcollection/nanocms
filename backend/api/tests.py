from django.db.models.query import QuerySet
from django.test import TestCase, Client
from django.contrib.auth.models import User

from api.models import Form, FormEntry

import json


# testing overview
# https://docs.djangoproject.com/en/5.2/topics/testing/overview/

# test endpoints
# https://docs.djangoproject.com/en/5.2/topics/testing/tools/


username = "test_username"
password = "test"


class Authentication(TestCase):
    c = Client()

    def setUp(self):
        user = User.objects.create_user(username, password=password)
        user.save()

    def test_has_user(self):
        user = User.objects.get(username=username)
        self.assertIsNotNone(user)

    def test_can_login(self):
        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)
        validation_response = self.c.post(
            "/api/validate_jwt", payload, "application/json"
        )

        self.assertEqual(validation_response.status_code, 200)


class FormTestCase(TestCase):
    c = Client()

    def test_can_get_the_same_object_as_input_and_output(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        response = self.c.post("/api/forms", data, "application/json")
        response = json.loads(response.content)
        response_data = json.loads(response["data"])

        self.assertEqual(response_data, data)

    def test_creates_form_in_db(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        self.c.post("/api/forms", data, "application/json")

        new_form: QuerySet = Form.objects.all()
        print(len(new_form))

        # self.assertEqual(new_form, data)
