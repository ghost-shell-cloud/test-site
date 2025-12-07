# 🧪 GHOST SHELL - Test Templates Repository

Test projects for validating all GHOST SHELL deployment templates and features.

## �� Purpose

This repository contains test projects organized by type. Each subdirectory can be deployed independently using the **GitHub Deploy** template with `SUBDIRECTORY` parameter.

## 📁 Available Test Projects

### ✅ Ready for Testing

| # | Project | Type | Difficulty | Features Tested |
|---|---------|------|------------|-----------------|
| 01 | [Static Website](./01-static-website/) | HTML/CSS/JS | ⭐ Easy | Basic deployment, Nginx |
| 02 | [Node.js Express](./02-nodejs-express/) | API | ⭐⭐ Medium | Custom ENV, JSON API |
| 03 | [Telegram Bot](./03-telegram-bot/) | Bot | ⭐⭐ Medium | **Custom ENV (NEW!)**, Bot token |
| 04 | [Next.js App](./04-nextjs-app/) | SSR | ⭐⭐⭐ Hard | Build process, SSR |

## 🚀 How to Test

### Method 1: Via GHOST SHELL Mini App

1. Open GHOST SHELL bot → "Open Shell"
2. Choose "**Deploy from GitHub**" template
3. Fill in:
   - **GITHUB_REPO:** `lexxxx89/test_repo`
   - **SUBDIRECTORY:** (choose from list above, e.g., `03-telegram-bot`)
   - **GITHUB_TOKEN:** (optional, for private repos)
4. **Add Custom ENV** if needed (click "+ Add Variable")
5. Deploy!

### Method 2: Testing Custom ENV (Important!)

For Telegram Bot test (03-telegram-bot):

```
Step 1: Choose "Deploy from GitHub"
Step 2: Enter repository
  GITHUB_REPO: lexxxx89/test_repo
  SUBDIRECTORY: 03-telegram-bot
  
Step 3: Click "+ Add Variable" (NEW FEATURE!)
  Key: TELEGRAM_BOT_TOKEN
  Value: (your token from @BotFather)
  
  (Optional) Add more:
  Key: DATABASE_URL
  Value: postgresql://...
  
Step 4: Deploy
```

## ✅ Test Scenarios

### Scenario 1: Basic Static Site
**Tests:** Static file serving, Nginx
```
SUBDIRECTORY: 01-static-website
Expected: Green terminal page saying "RUNNING"
```

### Scenario 2: API with Custom ENV
**Tests:** Node.js, Express, Custom ENV
```
SUBDIRECTORY: 02-nodejs-express
+ Custom ENV:
  CUSTOM_VAR: my_test_value
Expected: JSON API response with env info
```

### Scenario 3: Telegram Bot (MAIN TEST!)
**Tests:** Bot deployment, Required ENV, Optional ENV
```
SUBDIRECTORY: 03-telegram-bot
+ Custom ENV (REQUIRED!):
  TELEGRAM_BOT_TOKEN: your_token_here
+ Custom ENV (optional):
  DATABASE_URL: postgresql://...
  CUSTOM_VAR: test
Expected: Bot responds to /start command
```

### Scenario 4: Next.js Build
**Tests:** Complex build, Multi-stage Docker
```
SUBDIRECTORY: 04-nextjs-app
+ Custom ENV (optional):
  NEXT_PUBLIC_API_URL: https://api.test.com
Expected: Next.js SSR page
Build time: ~3-5 min
```

## 🆕 New Features Being Tested

### 1. Dynamic Custom ENV Variables ✨
- Add unlimited ENV variables during deployment
- Keys and values can be anything
- Perfect for bot tokens, API keys, secrets

### 2. SUBDIRECTORY Support
- Deploy specific folder from monorepo
- Test multiple projects from one repository
- No need to create separate repos

### 3. AUTO_DEPLOY
- Enabled by default
- Push to GitHub → auto-redeploys
- Tests webhook integration

## 📋 Test Checklist

Copy this for your testing session:

```
Deployment Tests:
[ ] 01-static-website deploys successfully
[ ] 02-nodejs-express shows JSON response
[ ] 03-telegram-bot receives TELEGRAM_BOT_TOKEN
[ ] 03-telegram-bot responds to /start
[ ] 04-nextjs-app builds and runs

Feature Tests:
[ ] Can add custom ENV variables
[ ] Can add multiple ENV variables
[ ] Bot fails without TELEGRAM_BOT_TOKEN (validation works)
[ ] ENV values are hidden in UI (security)
[ ] Can edit ENV after deployment
[ ] REDEPLOY button works with new ENV
[ ] AUTO_DEPLOY status shows correctly
[ ] GitHub repository link appears on project page

Edge Cases:
[ ] Deploy without GitHub token (should work)
[ ] Deploy with optional ENV only
[ ] Deploy with many (10+) custom ENV variables
[ ] Update ENV and redeploy
```

## 🔧 Troubleshooting

### Bot doesn't start?
- Check that `TELEGRAM_BOT_TOKEN` is set
- Token format: `123456:ABCdefGHIjklMNOpqrsTUVwxyz`
- Get from @BotFather: /newbot

### Build fails?
- Check deployment logs
- Verify SUBDIRECTORY path is correct
- Ensure docker-compose.yml or Dockerfile exists

### Can't add ENV?
- Make sure you're using GitHub Deploy template
- Look for "+ Add Variable" button
- Click multiple times for multiple variables

## 📝 Contributing

To add new test projects:
1. Create new folder: `05-your-project/`
2. Add README.md, docker-compose.yml (or Dockerfile)
3. Add .env.example with required variables
4. Update this README

## 🎓 Learning Resources

- [GitHub Deploy Guide](./TESTING_GUIDE.md)
- [ENV Variables Best Practices](https://12factor.net/config)
- [Docker Compose Reference](https://docs.docker.com/compose/)

---

**Repository:** https://github.com/lexxxx89/test_repo  
**Platform:** https://t.me/Ghost_Shell_deploy_bot  
**Made for testing GHOST SHELL deployment features** 🚀
