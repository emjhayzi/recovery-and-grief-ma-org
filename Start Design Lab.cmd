@echo off
setlocal

cd /d "%~dp0"
set "PORT=8000"
set "EXISTING_PID="
set "PYTHON_CMD="

for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":%PORT%" ^| findstr "LISTENING"') do (
  set "EXISTING_PID=%%P"
)

if defined EXISTING_PID (
  echo A local website server is already running on port %PORT%.
  echo Existing PID: %EXISTING_PID%
  start "" http://localhost:%PORT%/design-lab.html
  exit /b 0
)

call :resolve_python
if not defined PYTHON_CMD (
  echo Python was not found for Command Prompt.
  echo Try opening a new terminal and run either: python --version
  echo or: py --version
  pause
  exit /b 1
)

echo Starting Design Lab at http://localhost:%PORT%/design-lab.html
start "Recovery and Grief Design Lab" /D "%~dp0" %PYTHON_CMD% -m http.server %PORT%
timeout /t 2 >nul
start "" http://localhost:%PORT%/design-lab.html
echo A preview terminal window should now be open.
echo Your browser should open to http://localhost:%PORT%/design-lab.html
echo If the page does not load, check the preview terminal window for errors.
exit /b 0

:resolve_python
python --version >nul 2>nul
if not errorlevel 1 (
  set "PYTHON_CMD=python"
  goto :eof
)

py --version >nul 2>nul
if not errorlevel 1 (
  set "PYTHON_CMD=py"
)
goto :eof
