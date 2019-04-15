from rest_framework import serializers
from django.utils.translation import gettext as _
from django.conf import settings
from .models import Plan


class PlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plan
        fields = ['uuid', 'name', 'description',
                 'cost',]