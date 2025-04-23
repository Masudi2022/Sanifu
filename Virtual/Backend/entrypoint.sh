#!/bin/sh

echo "📦 Collecting static files..."
python manage.py collectstatic --noinput

echo "🧩 Making migrations..."
python manage.py makemigrations

echo "🛠️  Running migrations..."
python manage.py migrate

echo "🚀 Starting Gunicorn..."
gunicorn --bind 0.0.0.0:8000 MyJourney.wsgi:application
