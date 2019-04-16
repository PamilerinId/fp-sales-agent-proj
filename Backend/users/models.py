from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from datetime import datetime


# Create your models here.


class CustomUser(AbstractUser):
    
    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username

    

class Agent(models.Model):
    """
    Sales agent profile for addon stuff
    """
    user = models.OneToOneField(CustomUser, unique=True, on_delete=models.CASCADE)
    # display_img = models.ImageField('profile picture', upload_to='user_images', null=True, blank=True)
    # phone_no = models.CharField('phone number', max_length=15, blank=True)

    def __str__(self):
        return str(self.user.username)

@receiver(pre_save, sender=settings.AUTH_USER_MODEL)
def set_username(sender, instance, **kwargs):
    if not instance.username:
        username = instance.first_name[0].upper() + instance.last_name[0].upper() + datetime.today().strftime('%y%m%d')
        counter = 1
        while CustomUser.objects.filter(username=username):
            username = instance.first_name[0].upper() + instance.last_name[0].upper() + datetime.today().strftime('%y%m%d') + str(counter)
            counter += 1
        instance.username = username

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Agent.objects.get_or_create(user=instance)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, instance, **kwargs):
    Agent.objects.get_or_create(user=instance)