@echo off
setlocal

cd /d "%~dp0"

if exist publish (
  rmdir /s /q publish
)

mkdir publish
copy /y index.html publish >nul
copy /y about.html publish >nul
copy /y connect.html publish >nul
copy /y groups.html publish >nul
copy /y whole-person.html publish >nul
copy /y resources.html publish >nul
copy /y help-others.html publish >nul
copy /y design-lab.html publish >nul
copy /y robots.txt publish >nul
xcopy assets publish\assets /e /i /y >nul

echo Cloudflare publish folder refreshed.
echo Deploy the contents of:
echo %~dp0publish
pause
