@echo off
setlocal

cd /d "%~dp0"
node scripts\build-publish.mjs
if errorlevel 1 (
  echo.
  echo Publish refresh failed. Make sure Node.js is installed and available as:
  echo node
  pause
  exit /b 1
)

echo Cloudflare publish folder refreshed.
echo Deploy the contents of:
echo %~dp0publish
pause
