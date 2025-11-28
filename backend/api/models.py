from django.db import models

class Form(models.Model): 
    published = models.BooleanField(default=False)
    data = models.JSONField()
    deadline = models.DateField(default=None, blank=True, null=True)
    created_at = models.DateField(blank=True, null=True)
    updated_at = models.DateField(blank=True, null=True)
    deleted_at = models.DateField(default=None, blank=True, null=True)


class FormEntry(models.Model):
    form_id = models.ForeignKey(Form, on_delete=models.CASCADE)
    data = models.JSONField(null=True)
    created_at = models.DateField(blank=True, null=True)
    updated_at = models.DateField(blank=True, null=True)
    deleted_at = models.DateField(default=None, blank=True, null=True)

