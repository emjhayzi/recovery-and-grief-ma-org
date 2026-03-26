@echo off
setlocal

cd /d "%~dp0"
set "PORT=8000"
set "EXISTING_PID="

for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":%PORT%" ^| findstr "LISTENING"') do (
  set "EXISTING_PID=%%P"
)

if defined EXISTING_PID (
  echo A local website server is already running on port %PORT%.
  echo Existing PID: %EXISTING_PID%
  start "" http://localhost:%PORT%
  pause
  goto :eof
)

where python >nul 2>nul
if errorlevel 1 (
  echo Python was not found on PATH.
  echo Open a new terminal and run: python --version
  pause
  exit /b 1
)

echo Starting website preview at http://localhost:%PORT%
start "Recovery and Grief Website Preview" /D "%~dp0" python -m http.server %PORT%
timeout /t 2 >nul
start "" http://localhost:%PORT%
echo A preview terminal window should now be open.
echo Your browser should open to http://localhost:%PORT%
echo If the page does not load, check the preview terminal window for errors.
pause
