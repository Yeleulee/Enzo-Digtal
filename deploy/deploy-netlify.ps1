# Quick Netlify Deployment Script
Write-Host "🚀 Netlify Deployment Helper" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Option 1: Manual Drag & Drop (Easiest)" -ForegroundColor Green
Write-Host "   1. Open: https://app.netlify.com/drop" -ForegroundColor White
Write-Host "   2. Drag this 'deploy' folder" -ForegroundColor White
Write-Host "   3. Done! ✨" -ForegroundColor White
Write-Host ""

Write-Host "📋 Option 2: Netlify CLI" -ForegroundColor Yellow
Write-Host "   1. Install: npm install -g netlify-cli" -ForegroundColor White
Write-Host "   2. Login: netlify login" -ForegroundColor White
Write-Host "   3. Deploy: netlify deploy --prod" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Open Netlify Drop page? (y/n)"
if ($choice -eq 'y' -or $choice -eq 'Y') {
    Write-Host "Opening Netlify..." -ForegroundColor Green
    Start-Process "https://app.netlify.com/drop"
    Write-Host ""
    Write-Host "📁 Now drag the 'deploy' folder into your browser!" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✅ After deployment, you'll get a URL like:" -ForegroundColor Green
Write-Host "   https://your-app-name.netlify.app" -ForegroundColor White
