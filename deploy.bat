@echo off
title CSS Addon Auto-Deploy
echo ========================================
echo  CSS Addon Auto-Deploy Script
echo ========================================
echo.

:: Check if Git is installed
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed!
    echo Download from: https://git-scm.com/downloads
    pause
    exit /b 1
)

:: Run the PowerShell deploy script
powershell -ExecutionPolicy Bypass -File "%~dp0deploy.ps1"

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Deploy failed. Check the output above.
) else (
    echo.
    echo [SUCCESS] Deploy completed!
)

pause
