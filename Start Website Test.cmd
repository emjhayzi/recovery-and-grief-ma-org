@echo off
setlocal

cd /d "%~dp0"
set "STATE_DIR=%TEMP%\recovery-grief-preview"
set "PID_FILE=%STATE_DIR%\website-preview.pid"
set "PORT_FILE=%STATE_DIR%\website-preview.port"
set "START_PAGE=index.html"
set "PORT="
set "TARGET_URL="
set "PREVIEW_PID="
set "PYTHON_CMD="

if exist "%PID_FILE%" (
  set /p PREVIEW_PID=<"%PID_FILE%"
)

if defined PREVIEW_PID (
  tasklist /FI "PID eq %PREVIEW_PID%" | find "%PREVIEW_PID%" >nul 2>nul
  if not errorlevel 1 (
    if exist "%PORT_FILE%" (
      set /p PORT=<"%PORT_FILE%"
      set "TARGET_URL=http://127.0.0.1:%PORT%/%START_PAGE%"
      echo Reusing the existing Recovery and Grief preview at %TARGET_URL%
      start "" "%TARGET_URL%"
      exit /b 0
    )
  )
)

if not exist "%STATE_DIR%" mkdir "%STATE_DIR%" >nul 2>nul
call :find_free_port
call :resolve_python

if not defined PORT (
  echo Could not find an open local preview port.
  exit /b 1
)

if not defined PYTHON_CMD (
  echo Python was not found for the website preview.
  echo Install Python or use the local smoke-test command directly.
  exit /b 1
)

set "TARGET_URL=http://127.0.0.1:%PORT%/%START_PAGE%"
echo Starting website preview at %TARGET_URL%
echo Browser will open automatically in a moment...
echo.
title Recovery and Grief Website Preview

%PYTHON_CMD% "%~dp0preview-server.py" --root "%CD%" --port %PORT% --start-page "%START_PAGE%" --pid-file "%PID_FILE%" --port-file "%PORT_FILE%" --open-browser
exit /b %errorlevel%

:find_free_port
for /f %%P in ('powershell -NoProfile -Command "$ports = 8000..8010; foreach ($p in $ports) { try { $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse('127.0.0.1'), $p); $listener.Start(); $listener.Stop(); Write-Output $p; break } catch {} }"') do (
  set "PORT=%%P"
)
goto :eof

:resolve_python
if exist "C:\Users\markj\AppData\Local\Programs\Python\Python313\python.exe" (
  set "PYTHON_CMD="C:\Users\markj\AppData\Local\Programs\Python\Python313\python.exe""
  goto :eof
)

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
