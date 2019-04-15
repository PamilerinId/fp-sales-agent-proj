from django.db import models
from users.models import CustomUser, Agent
from plans.models import Plan
import uuid

# Create your models here.

class SalesLog(models.Model):
    uuid = models.UUIDField(
        db_index=True, default=uuid.uuid4, editable=False, primary_key=True)
    agent = models.OneToOneField(Agent)
    plan_sold = models.ForeignKey(Plan, on_delete=models.CASCADE)
    commission_made = models.PositiveIntegerField()
    init_date = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.uuid
    