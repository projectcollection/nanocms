from django.db.models.query import QuerySet
from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.forms import model_to_dict

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

    def setUp(self):
        user = User.objects.create_user(username, password=password)
        user.save()

    def test_can_create_form(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        response = self.c.post("/api/forms", data, "application/json", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)
        response_data = response["data"]

        author = User.objects.get(username=username)

        self.assertEqual(response_data["author"], author.id)
        self.assertEqual(response_data["title"], data["title"])
        del data['title']
        self.assertEqual(json.loads(response_data["data"]), data['fields'])

        form_from_db = Form.objects.get(id=response_data['id'])


    def test_can_get_all_forms(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        num_of_forms = 6
        for _ in range(num_of_forms):
            self.c.post("/api/forms", data, "application/json", headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        author = User.objects.get(username=username)
        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        self.assertEqual(num_of_forms, len(response['data']))

    def test_can_delete_forms(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        num_of_forms = 6
        forms_to_delete = 4
        for _ in range(num_of_forms):
            self.c.post("/api/forms", data, "application/json", headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        author = User.objects.get(username=username)
        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        for form in response['data'][:forms_to_delete]:
            response = self.c.delete("/api/forms", {
                "form_id": form['id']
            }, 
            "application/json",
            headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        self.assertEqual(num_of_forms-forms_to_delete, len(response['data']))

    def test_can_update_forms(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        num_of_forms = 6
        for _ in range(num_of_forms):
            self.c.post("/api/forms", data, "application/json", headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        author = User.objects.get(username=username)
        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        for form in response['data']:
            response = self.c.put("/api/forms", {
                "form_id": form['id'],
                "data": {
                    "title": f"updated title for {form['id']}"
                }
            }, 
            "application/json",
            headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        for form in response['data']:
            self.assertEqual(form['title'], f"updated title for {form['id']}")

    def test_can_get_form_by_id(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        num_of_forms = 6
        for _ in range(num_of_forms):
            self.c.post("/api/forms", data, "application/json", headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        author = User.objects.get(username=username)
        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)
        forms = response['data']

        form_id_to_get = forms[0]['id']

        response = self.c.get(f"/api/forms?form_id={form_id_to_get}", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        form = response['data'][0]

        self.assertEqual(form['id'], form_id_to_get)

    def test_can_create_entry_for_form(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        num_of_forms = 6
        for _ in range(num_of_forms):
            self.c.post("/api/forms", data, "application/json", headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        author = User.objects.get(username=username)
        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)
        forms = response['data']

        form_id_to_get = forms[0]['id']

        response = self.c.get(f"/api/forms?form_id={form_id_to_get}", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        form = response['data'][0]

        entry_data = {
            "form_id": form['id'],
            "data": ["random name"]
        }

        response = self.c.post("/api/forms/entry", entry_data, "application/json")
        response = json.loads(response.content)
        form_entry = response['data']

        self.assertEqual(form_entry['form_id'], form['id'])
        self.assertEqual(len(entry_data['data']), len(json.loads(form_entry['data'])))

    def test_can_get_entries_for_form(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        num_of_forms = 1
        for _ in range(num_of_forms):
            self.c.post("/api/forms", data, "application/json", headers={
                "Authorization": "Bearer " + payload["jwt"]
            })

        author = User.objects.get(username=username)
        response = self.c.get("/api/forms", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)
        forms = response['data']

        form_id_to_get = forms[0]['id']

        response = self.c.get(f"/api/forms?form_id={form_id_to_get}", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)

        form = response['data'][0]

        entry_data = {
            "form_id": form['id'],
            "data": ["random name"]
        }

        num_of_entries = 5
        for _ in range(num_of_entries):
            response = self.c.post("/api/forms/entry", entry_data, "application/json")
            response = json.loads(response.content)
            form_entry = response['data']


        response = self.c.get(f"/api/forms/entry?form_id={form['id']}", entry_data, "application/json", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        response = json.loads(response.content)
        entries = response['data']

        self.assertEqual(len(entries), num_of_entries)

        for entry in entries:
            self.assertEqual(entry['form_id'], form['id'])

    def test_creates_form_in_db(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)

        self.c.post("/api/forms", data, "application/json", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })

        new_form: QuerySet = Form.objects.all()

        self.assertEqual(len(list(new_form)), 1)

    def test_can_create_analytics_event_for_form(self):
        data = {
            "title": "test form",
            "fields": [
                {"header": "name", "details": "your full name", "input": "textarea"}
            ],
        }

        login_response = self.c.post(
            "/api/login",
            {"username": username, "password": password},
            "application/json",
        )
        payload = json.loads(login_response.content)
        jwt = payload['jwt']


        new_form_response = self.c.post("/api/forms", data, "application/json", headers={
            "Authorization": "Bearer " + payload["jwt"]
        })
        payload = json.loads(new_form_response.content)
        form = payload['data']
        form_id = form['id']

        number_of_events = 50
        for _ in range(number_of_events):
            self.c.post("/api/forms/analytics_event", {
                'form_id': form_id,
                'event_type': 'VISIT'
            }, "application/json")

        analytics_event_query = self.c.get(f"/api/forms/analytics_event?form_id={form_id}&event_types=VISIT", headers={
            "Authorization": "Bearer " + jwt
        })
        payload = json.loads(analytics_event_query.content)
        count_per_event_type = payload['data']

        self.assertEqual(len(count_per_event_type), 1)
        self.assertEqual(count_per_event_type[0], number_of_events)
