@echo off
setlocal

cd /d "%~dp0"
set "FOUND_SERVER="

for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":8000" ^| findstr "LISTENING"') do (
  taskkill /PID %%P /T /F >nul 2>nul
  if not errorlevel 1 (
    set "FOUND_SERVER=1"
  )
)

if defined FOUND_SERVER (
  echo The website preview server on port 8000 was stopped.
) else (
  echo No local website preview server was found on port 8000.
)
pause
