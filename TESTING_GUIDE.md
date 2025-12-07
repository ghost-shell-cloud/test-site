# 🧪 GHOST SHELL - Test Templates Repository

This repository contains test projects for all GHOST SHELL templates.
Each subdirectory represents a different project type for testing deployments.

## 📁 Repository Structure

```
test_repo/
├── 01-static-website/          # Static HTML/CSS/JS site
├── 02-nodejs-express/          # Node.js + Express API
├── 03-telegram-bot/            # Telegram Bot (Grammy)
├── 04-nextjs-app/              # Next.js application
├── 05-python-fastapi/          # Python FastAPI
├── 06-django-app/              # Django application
├── 07-react-spa/               # React SPA (Vite)
├── 08-vue-app/                 # Vue.js application
├── 09-wordpress/               # WordPress (docker-compose)
├── 10-database-postgres/       # PostgreSQL database
└── README.md
```

## 🚀 How to Test

### Test via GitHub Deploy Template

For each project, use the **"Deploy from GitHub"** template:

1. **Repository:** `lexxxx89/test_repo`
2. **Subdirectory:** `01-static-website` (or any other)
3. **Branch:** `main`
4. **Custom ENV:** Add as needed (e.g., `TELEGRAM_BOT_TOKEN`)

### Example Tests

#### Test 1: Static Website
```
Template: Deploy from GitHub
GITHUB_REPO: lexxxx89/test_repo
SUBDIRECTORY: 01-static-website
```

#### Test 2: Telegram Bot with Custom ENV
```
Template: Deploy from GitHub
GITHUB_REPO: lexxxx89/test_repo
SUBDIRECTORY: 03-telegram-bot
+ Custom ENV:
  TELEGRAM_BOT_TOKEN: your-token-here
  DATABASE_URL: optional
```

#### Test 3: Next.js App
```
Template: Deploy from GitHub
GITHUB_REPO: lexxxx89/test_repo
SUBDIRECTORY: 04-nextjs-app
AUTO_DEPLOY: true
```

## ✅ What Gets Tested

- ✅ GitHub Deploy with SUBDIRECTORY
- ✅ Custom ENV variables
- ✅ AUTO_DEPLOY webhooks
- ✅ Different tech stacks
- ✅ Docker auto-detection
- ✅ Build processes

## 📝 Test Checklist

- [ ] Static website deploys
- [ ] Node.js Express API works
- [ ] Telegram bot receives ENV
- [ ] Next.js builds correctly
- [ ] Python FastAPI runs
- [ ] Django application starts
- [ ] React SPA builds
- [ ] Vue.js application works
- [ ] WordPress with docker-compose
- [ ] PostgreSQL database accessible

## 🔧 Troubleshooting

Each project folder contains:
- `README.md` - Project-specific info
- `docker-compose.yml` OR `Dockerfile` - For deployment
- `.env.example` - Example environment variables
- Source code for testing

