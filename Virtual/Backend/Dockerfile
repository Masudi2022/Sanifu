# Use an official Python image
FROM python:3.9

# Set environment variables to avoid buffer issues
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    g++ \
    python3-dev \
    libffi-dev \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python packages
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# 👇 This is optional if you didn't add the model in requirements.txt
# RUN python -m spacy download en_core_web_sm

# Copy the rest of the backend code
COPY . .

# Move to the directory where manage.py is (adjust if needed)
WORKDIR /app/MyJourney

# Expose Django port
EXPOSE 8000

# Default command (optional, overridden by docker-compose)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
