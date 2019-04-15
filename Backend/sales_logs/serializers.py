from rest_framework import serializers
from django.utils.translation import gettext as _
from django.conf import settings
from .models import SalesLog
from users.serializers import AgentSerializer
from plans.serializers import PlanSerializer


class SalesLogSerializer(serializers.ModelSerializer):

    agent = AgentSerializer()
    plan_sold = PlanSerializer()

    class Meta:
        model = SalesLog
        fields = ['uuid', 'agent', 'plan_sold', 'commission_made',]