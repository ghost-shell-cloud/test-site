# 02 - Node.js Express API Test

Simple Express.js API for testing Node.js deployments.

## How to Deploy

```
Template: Deploy from GitHub
GITHUB_REPO: lexxxx89/test_repo
SUBDIRECTORY: 02-nodejs-express
+ Custom ENV (optional):
  CUSTOM_VAR: test_value
```

## Endpoints:
- `GET /` - Returns JSON with status and env info
- `GET /health` - Health check

## What it tests:
- Node.js runtime
- Express framework  
- Custom ENV variables
- JSON API responses
- Docker build process

## Expected result:
JSON response with status "RUNNING" and environment info
