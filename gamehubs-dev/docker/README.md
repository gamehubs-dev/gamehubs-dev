# GameHubs Dev - Docker

This directory contains Docker configuration for GameHubs Dev.

## Quick Start

```bash
# Build image
docker build -t gamehubs-dev .

# Run container
docker run -p 3000:3000 \
  --env-file .env \
  gamehubs-dev

# Run with Docker Compose
docker-compose up -d
```

## Environment Variables

Make sure to set the following environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `NEXTAUTH_SECRET` - NextAuth secret key
- `NEXTAUTH_URL` - Application URL

## Database

The Docker setup includes PostgreSQL and Redis services via Docker Compose.

## Production

For production deployment, use the `Dockerfile.production` file with multi-stage builds for optimized image size.
