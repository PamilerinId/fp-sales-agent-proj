from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from datetime import datetime


# Create your models here.


class CustomUser(AbstractUser):
    pass


class Agent(models.Model):
    user = models.OneToOneField('agent', settings.AUTH_USER_MODEL,
     unique=True)
    display_img = models.ImageField('profile picture', upload_to='user_images', null=True, blank=True)
    phone_no = models.CharField('phone number', max_length=15, blank=True)

    def __str__(self):
        return str(self.user.username)

@receiver(pre_save, sender=settings.AUTH_USER_MODEL)
def set_username(sender, instance, **kwargs):
    if not instance.username:
        username = instance.first_name[0].upper() + instance.last_name[0].upper()+
        datetime.today().strftime('%y%m%d')
        counter = 1
        while settings.AUTH_USER_MODEL.objects.filter(username=username):
            username = instance.first_name[0].upper() + instance.last_name[0].upper() +
            datetime.today().strftime('%y%m%d') + str(counter)
            counter += 1
        instance.username = username