# fp-sales-agent-proj
Web App that enables field-salesmen track sales

# Task
### Requirements
Design a Single Page Application (SPA) that will track the fictitious sales of agents in real time on
the field (hence, mobile friendly) by allowing them to input their agent ID, plan sold, and the
associated price.

Also create a backend application using any Python framework of choice to display the sales data
aggregated by sales per day from a MySQL server for each agent sending in data.

### Bonus Points
> Clean architecture;

> Using an ORM;

> High test coverage;

> Anything that wows us

# Setup
Simple architecture:
Project is comprised of a CLient and a Server; Client is built with angular, Server is built with Python django.

## Backend(Server)
A simple REST API server

Requirements
------------
* Python: > 3.6
* Django: 2.2
* MYSQL 
* DRF, CORS, see requirements.txt
Tested on win 10 and Ubuntu 18.0.4

from `Backend` folder
### Install Package Dependencies:
run `pipenv shell`
then `pip install -r requirements.txt`
### Create database and admin user
run `python manage.py migrate`
then `python manage.py createsuperuser` and follow the prompts
### Startup Server!!
run `python manage.py runserver` and follow the prompts
or just visit `127.0.0.1:8000`
visit admin page at `/pooh`
api docs page at `/docs`
schema page at `schema`
api root at `/api/v1`


.env file should be gitignored!

## Frontend(Client)
Readme in Frontend folder.
