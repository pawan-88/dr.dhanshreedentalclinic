@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

title Dr. Dhanshree's Dental Clinic - Local Runner

echo.
echo  ============================================================
echo    Dr. Dhanshree's Dental Clinic - local runner
echo  ============================================================
echo.

REM ---- Check Node is installed -------------------------------------------
where node >nul 2>nul
if errorlevel 1 (
  echo  [X] Node.js was not found on this machine.
  echo      Install Node 22 or newer from https://nodejs.org and try again.
  echo.
  pause
  exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODEVER=%%v
echo  Node version: !NODEVER!

REM ---- Install dependencies if missing -----------------------------------
if not exist "node_modules" (
  echo.
  echo  node_modules not found - installing dependencies. This takes a few minutes.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo  [X] npm install failed. Read the error above.
    pause
    exit /b 1
  )
)

:menu
echo.
echo  ------------------------------------------------------------
echo   What do you want to do?
echo  ------------------------------------------------------------
echo.
echo   1  Dev server          - live reload while you edit  ^(http://localhost:3000^)
echo   2  Build + preview     - the REAL exported site      ^(http://localhost:3000^)
echo   3  Build only          - just create the out\ folder
echo   4  Type check
echo   5  Exit
echo.
set "choice="
set /p choice="  Enter 1-5: "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto preview
if "%choice%"=="3" goto buildonly
if "%choice%"=="4" goto typecheck
if "%choice%"=="5" exit /b 0

echo  Please enter a number from 1 to 5.
goto menu

REM ---- 1. Dev server ------------------------------------------------------
:dev
echo.
echo  Starting the dev server...
echo  Open http://localhost:3000 in your browser. Press Ctrl+C here to stop.
echo.
call npm run dev
goto end

REM ---- 2. Build and preview the static export ----------------------------
:preview
echo.
echo  Building the production export...
echo.
call npm run build
if errorlevel 1 (
  echo.
  echo  [X] Build failed. Nothing to preview.
  pause
  goto menu
)

echo.
echo  ------------------------------------------------------------
echo   Build OK. Checking the exported HTML actually has content...
echo  ------------------------------------------------------------
findstr /C:"Lohegaon" "out\index.html" >nul 2>nul
if errorlevel 1 (
  echo   [X] WARNING: "Lohegaon" not found in out\index.html.
  echo       The page may be exporting empty again - do not deploy.
) else (
  echo   [OK] Page content is present in the exported HTML.
)
echo.

echo  Serving the out\ folder. This is exactly what gets deployed.
echo  Open http://localhost:3000 - press Ctrl+C here to stop.
echo.
call npx --yes serve out -l 3000
goto end

REM ---- 3. Build only ------------------------------------------------------
:buildonly
echo.
call npm run build
echo.
if errorlevel 1 (
  echo  [X] Build failed.
) else (
  echo  [OK] Build complete. Output is in the out\ folder.
)
pause
goto menu

REM ---- 4. Type check ------------------------------------------------------
:typecheck
echo.
call npm run typecheck
echo.
pause
goto menu

:end
echo.
pause
endlocal
