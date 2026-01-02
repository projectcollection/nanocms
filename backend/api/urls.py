from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("forms", views.forms, name="forms"),
    path("forms/entry", views.form_entry, name="form_entry"),
    path("forms/analytics_event", views.analytics_event, name="analytics_event"),
    path("login", views.login, name="login"),
    path("validate_jwt", views.validate_jwt, name="validate_jwt"),
]

