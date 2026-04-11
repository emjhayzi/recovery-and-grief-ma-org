@echo off
setlocal

cd /d "%~dp0"
set "STATE_DIR=%TEMP%\recovery-grief-preview"
set "PID_FILE=%STATE_DIR%\website-preview.pid"
set "PORT_FILE=%STATE_DIR%\website-preview.port"
set "PREVIEW_PID="
set "PREVIEW_PORT="
set "LISTENING_PID="
set "STOP_FAILED="

if exist "%PID_FILE%" (
  set /p PREVIEW_PID=<"%PID_FILE%"
)

if exist "%PORT_FILE%" (
  set /p PREVIEW_PORT=<"%PORT_FILE%"
)

if defined PREVIEW_PORT (
  for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":%PREVIEW_PORT%" ^| findstr "LISTENING"') do (
    set "LISTENING_PID=%%P"
  )
)

if defined LISTENING_PID (
  taskkill /PID %LISTENING_PID% /T /F >nul 2>nul
  if not errorlevel 1 (
    echo The website preview server on port %PREVIEW_PORT% was stopped.
    del "%PID_FILE%" >nul 2>nul
    del "%PORT_FILE%" >nul 2>nul
    exit /b 0
  )
  set "STOP_FAILED=1"
)

if defined STOP_FAILED (
  echo The website preview server on port %PREVIEW_PORT% is still running.
  echo Close the preview window or press Ctrl+C in that window to stop it.
  exit /b 1
)

if defined PREVIEW_PID (
  if defined PREVIEW_PORT (
    echo Preview state was found for port %PREVIEW_PORT%, but nothing is currently listening there.
  ) else (
    echo Preview state was found, but the managed preview process is no longer active.
  )
  del "%PID_FILE%" >nul 2>nul
  del "%PORT_FILE%" >nul 2>nul
  exit /b 0
)

del "%PID_FILE%" >nul 2>nul
del "%PORT_FILE%" >nul 2>nul
echo No managed website preview server was found.
exit /b 0
