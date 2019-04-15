from django.db import models
from django.urls import reverse
import uuid

# Create your models here.


class Plan(models.Model):
    uuid = models.UUIDField(
        db_index=True, default=uuid.uuid4, editable=False, primary_key=True)
    name = models.CharField("name", max_length=32, blank=True)
    description = models.TextField("plan description")
    cost = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"id": self.uuid})