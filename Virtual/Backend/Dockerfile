# Stage 1: Builder
FROM python:3.9-slim AS builder

WORKDIR /app

# Set environment variables to avoid Python bytecode files and buffering
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install dependencies only (don't copy the whole app yet)
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Stage 2: Production
FROM python:3.9-slim

# Create a non-root user for security purposes
RUN useradd -m -r appuser && \
    mkdir /app && \
    chown -R appuser /app

WORKDIR /app

# Copy installed Python packages from the builder stage
COPY --from=builder /usr/local/lib/python3.9/site-packages/ /usr/local/lib/python3.9/site-packages/
COPY --from=builder /usr/local/bin/ /usr/local/bin/

# Copy application code and change ownership to appuser
COPY --chown=appuser:appuser . .

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

USER appuser

# Expose port 8000 for the backend application
EXPOSE 8000

# Command to run the application using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "MyJourney.wsgi:application"]
