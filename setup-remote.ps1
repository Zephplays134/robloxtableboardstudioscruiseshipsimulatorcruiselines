param(
  [string]$GithubToken = "",
  [string]$RepoOwner = "zephplays134",
  [string]$RepoName = "robloxtableboardstudioscruiseshipsimulatorcruiselines",
  [string]$Branch = "main"
)

Write-Host "=== CSS Addon — GitHub Remote Setup ===" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $ScriptDir

if (-not $GithubToken) {
  Write-Host "Token not provided via parameter." -ForegroundColor Yellow
  Write-Host "You can either:" -ForegroundColor White
  Write-Host "  1. Pass it as a parameter: .\setup-remote.ps1 -GithubToken YOUR_TOKEN" -ForegroundColor Gray
  Write-Host "  2. Enter it now:" -ForegroundColor Gray
  $GithubToken = Read-Host -Prompt "GitHub Personal Access Token"
}

if (-not $GithubToken) {
  Write-Error "No token provided. Setup aborted."
  exit 1
}

$RepoUrl = "https://${GithubToken}@github.com/${RepoOwner}/${RepoName}.git"

git remote remove origin 2>$null
git remote add origin $RepoUrl

Write-Host "Remote configured:" -ForegroundColor Green
Write-Host "  origin → https://github.com/${RepoOwner}/${RepoName}.git (token auth)" -ForegroundColor Green
Write-Host ""

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin $Branch --force

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "=== SUCCESS ===" -ForegroundColor Green
  Write-Host "Repository pushed to GitHub Pages." -ForegroundColor White
  Write-Host ""
  Write-Host "Your site will be live at:" -ForegroundColor Cyan
  Write-Host "  https://${RepoOwner}.github.io/${RepoName}/" -ForegroundColor Blue
  Write-Host ""
  Write-Host "Future updates: Double-click deploy.bat or run .\deploy.ps1" -ForegroundColor Gray
  Write-Host ""
  Write-Host "IMPORTANT: Your token is now stored in the git remote URL." -ForegroundColor Red
  Write-Host "To remove it later: git remote set-url origin https://github.com/${RepoOwner}/${RepoName}.git" -ForegroundColor Red
} else {
  Write-Host ""
  Write-Error "Push failed. The token may have been revoked. Generate a new one at:"
  Write-Host "  https://github.com/settings/tokens" -ForegroundColor Yellow
}

pause
