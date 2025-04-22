# Stage 1: Builder
FROM python:3.9-slim AS builder

WORKDIR /app

# Set environment variables to avoid Python bytecode files and buffering
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install dependencies only
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Stage 2: Production
FROM python:3.9-slim

# Create a non-root user for security
RUN useradd -m -r appuser && \
    mkdir /app && \
    chown -R appuser /app

WORKDIR /app

# Copy installed packages from builder
COPY --from=builder /usr/local/lib/python3.9/site-packages/ /usr/local/lib/python3.9/site-packages/
COPY --from=builder /usr/local/bin/ /usr/local/bin/

# ✅ Copy code from the current Docker context (set by render.yaml)
COPY --chown=appuser:appuser . .

# Set Python environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

USER appuser

# Expose port for Gunicorn
EXPOSE 8000

# Start the Django app using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "MyJourney.wsgi:application"]
