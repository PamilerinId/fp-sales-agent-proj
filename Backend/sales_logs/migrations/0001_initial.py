# Generated by Django 2.2 on 2019-04-15 09:24

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SalesLog',
            fields=[
                ('uuid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('commission_made', models.PositiveIntegerField()),
                ('init_date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
