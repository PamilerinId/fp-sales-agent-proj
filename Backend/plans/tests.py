from django.test import TestCase, SimpleTestCase
from django.http import HttpRequest
from django.urls import reverse

from . import views, models

# Create your tests here.

class PlanTests(TestCase):

    def setUp(self):
        models.Plan.objects.create(name='GLO TEST', description="10gb for N500.. lol", cost=100)

    def test_text_content(self):
        plan = models.Plan.objects.first()
        expected_object_name = f'{plan.name}'
        self.assertEquals(expected_object_name, 'GLO TEST')

    def test_plan_list_view(self):
        response = self.client.get(reverse('plans-list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'GLO TEST')

