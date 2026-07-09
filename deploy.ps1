param(
  [string]$CommitMessage = "Auto-update: CSS addon $(Get-Date -Format 'yyyy-MM-dd HH:mm')",
  [string]$Branch = "main"
)

Write-Host "=== CSS Addon Auto-Deploy ===" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $ScriptDir

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed. Download from: https://git-scm.com/"
  pause; exit 1
}

if (-not (Test-Path -LiteralPath ".git")) {
  Write-Host "[SETUP] Initializing repository..." -ForegroundColor Yellow
  git init
  git checkout -b $Branch
  Write-Host "  Ready." -ForegroundColor Green
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  Write-Host ""
  Write-Host "[SETUP] No remote configured." -ForegroundColor Yellow
  Write-Host "  Run setup-remote.ps1 first to configure GitHub authentication." -ForegroundColor Gray
  Write-Host "  Or set remote manually:" -ForegroundColor Gray
  Write-Host "    git remote add origin https://YOUR_TOKEN@github.com/zephplays134/robloxtableboardstudioscruiseshipsimulatorcruiselines.git" -ForegroundColor Gray
  pause; exit 1
}

$urlIsHttps = $remote -like "https://*"

Write-Host "[1/3] Staging files..." -ForegroundColor Yellow
git add -A

$status = git status --porcelain
if (-not $status) {
  Write-Host "  No changes to commit." -ForegroundColor Gray
  Write-Host ""
  Write-Host "Nothing to deploy. Make changes first." -ForegroundColor Cyan
  pause; exit 0
}

$changedCount = ($status -split "`n" | Measure-Object).Count
Write-Host "  $changedCount file(s) changed." -ForegroundColor Green

Write-Host "[2/3] Committing..." -ForegroundColor Yellow
git commit -m $CommitMessage
Write-Host "  $CommitMessage" -ForegroundColor Green

Write-Host "[3/3] Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin $Branch 2>&1

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "=== DEPLOY COMPLETE ===" -ForegroundColor Green
  Write-Host "Pushed $changedCount file(s) to GitHub." -ForegroundColor White
  Write-Host ""
  Write-Host "Site will update at:" -ForegroundColor Cyan
  Write-Host "  https://zephplays134.github.io/robloxtableboardstudioscruiseshipsimulatorcruiselines/" -ForegroundColor Blue
  Write-Host ""
  Write-Host "Note: GitHub Pages takes 1-2 minutes to rebuild." -ForegroundColor Gray
} else {
  Write-Host ""
  Write-Error "Push failed."
  Write-Host "Possible causes:" -ForegroundColor Yellow
  Write-Host "  - Token expired or revoked (generate new one: https://github.com/settings/tokens)" -ForegroundColor Gray
  Write-Host "  - No internet connection" -ForegroundColor Gray
  Write-Host "  - Repository does not exist" -ForegroundColor Gray
}

pause
