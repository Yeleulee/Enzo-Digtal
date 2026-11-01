# Telegram Mini App - Deployment Package

## 🚀 Quick Deploy

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop this entire `deploy` folder
3. Your site will be live in seconds!
4. Get URL: `https://your-app.netlify.app`

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import this folder
4. Deploy!
5. Get URL: `https://your-app.vercel.app`

### Option 3: GitHub Pages
1. Create a new repository on GitHub
2. Upload all files from this folder
3. Go to Settings → Pages
4. Select branch and save
5. Get URL: `https://username.github.io/repo-name`

### Option 4: Telegram Bot Integration
1. Create a bot with [@BotFather](https://t.me/botfather)
2. Get your bot token
3. Deploy your files to any hosting (Options 1-3)
4. Set the Web App URL in BotFather:
   ```
   /newapp
   @YourBotName
   Enter your deployed URL
   ```
5. Users access via: `https://t.me/YourBotName/app`

## 📁 Package Contents
- `index.html` - Main application file
- `src/assets/` - All service images (16 services)
- `netlify.toml` - Netlify configuration
- `vercel.json` - Vercel configuration

## ✨ Features
- ✅ 16 Premium Services
- ✅ Ethiopian Birr Pricing
- ✅ Liquid Glass UI Design
- ✅ Order Form with Image Upload
- ✅ Responsive Design
- ✅ Apple HIG Compliant
- ✅ Professional Typography

## 🔗 Connect to Telegram
After deploying, set up your Telegram Bot:

```bash
# 1. Create bot with @BotFather
# 2. Use these commands:
/newapp
# Follow prompts and enter your deployed URL

# 3. Create a button in your bot
/setinline
# Add button that opens your mini app
```

## 📱 Test Locally
```bash
# Option 1: Node.js server
npx http-server

# Option 2: Python
python -m http.server 8000

# Then open: http://localhost:8000
```

## 🌐 Custom Domain
Both Netlify and Vercel support custom domains for free with SSL!

## 📞 Support
For issues or questions about deployment, refer to:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
