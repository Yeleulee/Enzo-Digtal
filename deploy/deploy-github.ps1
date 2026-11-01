# Quick GitHub Pages Deployment Script
Write-Host "🚀 GitHub Pages Deployment Helper" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

Write-Host "✅ Git is installed" -ForegroundColor Green
Write-Host ""

# Check if already initialized
if (Test-Path ".git") {
    Write-Host "⚠️  Git already initialized in this folder" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne 'y' -and $continue -ne 'Y') {
        exit
    }
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Cyan
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor White
Write-Host "   https://github.com/new" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Copy the repository URL (it will look like):" -ForegroundColor White
Write-Host "   https://github.com/YOUR_USERNAME/telegram-mini-app.git" -ForegroundColor Yellow
Write-Host ""

$repoUrl = Read-Host "Paste your GitHub repository URL here"

if ($repoUrl) {
    Write-Host ""
    Write-Host "Adding files..." -ForegroundColor Cyan
    git add .
    
    Write-Host "Creating commit..." -ForegroundColor Cyan
    git commit -m "Initial commit - Telegram Mini App"
    
    Write-Host "Setting up remote..." -ForegroundColor Cyan
    git remote add origin $repoUrl
    
    Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
    git branch -M main
    git push -u origin main
    
    Write-Host ""
    Write-Host "✅ Code pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Final Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to your repository settings" -ForegroundColor White
    Write-Host "2. Click 'Pages' in the sidebar" -ForegroundColor White
    Write-Host "3. Source: 'Deploy from branch'" -ForegroundColor White
    Write-Host "4. Branch: 'main' → '/ (root)'" -ForegroundColor White
    Write-Host "5. Click 'Save'" -ForegroundColor White
    Write-Host ""
    Write-Host "⏳ Wait 2-3 minutes, then your site will be live at:" -ForegroundColor Yellow
    
    # Extract username and repo from URL
    if ($repoUrl -match "github\.com[:/]([^/]+)/([^/.]+)") {
        $username = $matches[1]
        $reponame = $matches[2]
        Write-Host "   https://$username.github.io/$reponame" -ForegroundColor Green
    }
} else {
    Write-Host "❌ No URL provided. Please run this script again." -ForegroundColor Red
}
