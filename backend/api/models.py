from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import date

class Form(models.Model): 
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    published = models.BooleanField(default=False)
    title = models.CharField(max_length=100, default="")
    data = models.JSONField()
    deadline = models.DateTimeField(default=None, blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    deleted_at = models.DateTimeField(default=None, blank=True, null=True)

    def save(self, *args, **kwargs):
        timestamp = timezone.now()
        if not self.id:
            self.created_at = timestamp
            self.updated_at = timestamp
        self.updated_at = timestamp 
        return super().save(*args, **kwargs)


class FormEntry(models.Model):
    form_id = models.ForeignKey(Form, on_delete=models.CASCADE)
    data = models.JSONField(null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    deleted_at = models.DateTimeField(default=None, blank=True, null=True)

    def save(self, *args, **kwargs):
        timestamp = timezone.now()
        if not self.id:
            self.created_at = timestamp
            self.updated_at = timestamp
        self.updated_at = timestamp 
        return super().save(*args, **kwargs)

class AnalyticsEvent(models.Model):
    VISIT = "VISIT"

    EVENT_TYPE_CHOICES = {
        VISIT: 'visit'
    }

    form_id = models.ForeignKey(Form, on_delete=models.CASCADE)
    event_type = models.CharField(choices=EVENT_TYPE_CHOICES, default=VISIT,)
    created_at = models.DateTimeField(auto_now_add=True)


