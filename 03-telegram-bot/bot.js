const { Bot } = require('grammy');

// IMPORTANT: This requires TELEGRAM_BOT_TOKEN environment variable
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error('❌ ERROR: TELEGRAM_BOT_TOKEN environment variable is required!');
  console.error('Add it via Custom ENV Variables when deploying');
  process.exit(1);
}

console.log('🤖 Starting GHOST SHELL Test Bot...');
console.log('Environment check:');
console.log('- BOT_TOKEN:', BOT_TOKEN.substring(0, 10) + '...');
console.log('- DATABASE_URL:', process.env.DATABASE_URL || 'not set');
console.log('- CUSTOM_VAR:', process.env.CUSTOM_VAR || 'not set');

const bot = new Bot(BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply(`✅ GHOST SHELL Test Bot is RUNNING!

🔧 Deployed via: GitHub Deploy Template  
📦 Project: 03-telegram-bot
⚙️ Custom ENV: ${process.env.CUSTOM_VAR || 'not set'}

This bot tests:
• Telegram Bot deployment
• Custom ENV variables (TELEGRAM_BOT_TOKEN)
• Optional ENV (DATABASE_URL)
• Auto-deploy on git push

Try /status command!`);
});

bot.command('status', (ctx) => {
  ctx.reply(`📊 Bot Status:

✅ Status: RUNNING
🕐 Uptime: ${process.uptime().toFixed(0)}s
📝 Environment Variables:
  - TELEGRAM_BOT_TOKEN: ✅ Set
  - DATABASE_URL: ${process.env.DATABASE_URL ? '✅ Set' : '❌ Not set'}
  - CUSTOM_VAR: ${process.env.CUSTOM_VAR || '❌ Not set'}

🚀 Deploy date: ${new Date().toISOString()}`);
});

bot.command('env', (ctx) => {
  const envVars = {
    'BOT_TOKEN': '✅ Set (hidden)',
    'DATABASE_URL': process.env.DATABASE_URL || '❌ Not set',
    'CUSTOM_VAR': process.env.CUSTOM_VAR || '❌ Not set',
    'NODE_ENV': process.env.NODE_ENV || 'production',
  };
  
  const envList = Object.entries(envVars)
    .map(([key, value]) => `  ${key}: ${value}`)
    .join('\n');
  
  ctx.reply(`⚙️ Environment Variables:\n\n${envList}`);
});

bot.on('message', (ctx) => {
  ctx.reply('👋 Bot is working! Use /start or /status commands.');
});

bot.start({
  onStart: () => {
    console.log('✅ Bot started successfully!');
    console.log('📝 Test commands: /start, /status, /env');
  }
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop());
process.once('SIGTERM', () => bot.stop());
