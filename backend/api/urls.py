from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("forms", views.forms, name="forms"),
    path("login", views.login, name="login"),
    path("validate_jwt", views.validate_jwt, name="validate_jwt"),
]

