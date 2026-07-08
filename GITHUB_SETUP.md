# CSS Addon — GitHub Auto-Deploy

## Overview

This addon provides automatic deployment to GitHub Pages whenever you push changes.
Two methods available:

---

## Method 1: GitHub Actions (Recommended — Fully Automated)

Once the repository is on GitHub, every push to `main` automatically deploys via
`.github/workflows/deploy.yml`.

### Initial push:

```bash
git remote add origin https://YOUR_TOKEN@github.com/zephplays134/robloxtableboardstudioscruiseshipsimulatorcruiselines.git
git push -u origin main
```

After that, just work on files and commit+push normally — the Action handles the rest.

---

## Method 2: Manual Deploy Script

### One-time setup:
```powershell
.\setup-remote.ps1 -GithubToken YOUR_TOKEN
```

### Every update:
```powershell
.\deploy.ps1
```
Or double-click `deploy.bat`.

---

## Files

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | GitHub Actions auto-deploy workflow |
| `setup-remote.ps1` | One-time GitHub remote + push setup |
| `deploy.ps1` | Commit & push script for updates |
| `deploy.bat` | Batch launcher for deploy.ps1 |
| `index.html` | Main page markup |
| `style.css` | All styles & animations |
| `script.js` | Data, logic, chatbot & interactions |

---

## URL

Your site: https://zephplays134.github.io/robloxtableboardstudioscruiseshipsimulatorcruiselines/

## Security

⚠️ **Your token was exposed in this chat. Generate a new one:**
https://github.com/settings/tokens

Required scopes: `repo` (full control) and `workflow`.
