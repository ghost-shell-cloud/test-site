# 03 - Telegram Bot Test

Grammy-based Telegram bot for testing bot deployments with custom ENV.

## How to Deploy

```
Template: Deploy from GitHub
GITHUB_REPO: lexxxx89/test_repo
SUBDIRECTORY: 03-telegram-bot

+ Custom ENV Variables (REQUIRED!):
  TELEGRAM_BOT_TOKEN: 123456:ABC... (from @BotFather)
  
+ Custom ENV Variables (optional):
  DATABASE_URL: postgresql://...
  CUSTOM_VAR: any_value
```

## ⚠️ IMPORTANT!

This project **REQUIRES** `TELEGRAM_BOT_TOKEN` environment variable!
Without it, the bot won't start.

Get token from @BotFather:
1. Message @BotFather in Telegram
2. Send /newbot
3. Follow instructions
4. Copy the token
5. Add it as Custom ENV Variable when deploying

## Bot Commands:
- `/start` - Start message with deployment info
- `/status` - Show bot status and environment
- `/env` - List all environment variables

## What it tests:
- ✅ Telegram bot deployment
- ✅ **Custom ENV variables (NEW FEATURE!)**
- ✅ Required ENV validation
- ✅ Optional ENV variables
- ✅ Grammy framework
- ✅ Docker build for Node.js
- ✅ Long-running process

## Expected result:
Bot responds to commands and shows environment info
