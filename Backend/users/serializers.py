from rest_framework import serializers
from django.utils.translation import gettext as _
from django.conf import settings
from .models import CustomUser, Agent

class CustomUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email',
                 'last_name', 'first_name')


class AgentSerializer(serializers.ModelSerializer):

    user = CustomUserSerializer()
    class Meta:
        model = Agent
        fields = ('user')
        depth = 1