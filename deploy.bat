@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

title Dr. Dhanshree's Dental Clinic - Deploy

echo.
echo  ============================================================
echo    Deploy to GitHub  ^(Vercel builds automatically on push^)
echo  ============================================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo  [X] git was not found. Install Git for Windows first.
  pause
  exit /b 1
)

REM ---- Git identity: required before any commit can be signed -----------
set "GITNAME="
set "GITMAIL="
for /f "tokens=*" %%a in ('git config user.name 2^>nul') do set "GITNAME=%%a"
for /f "tokens=*" %%a in ('git config user.email 2^>nul') do set "GITMAIL=%%a"

if not defined GITNAME goto askidentity
if not defined GITMAIL goto askidentity
echo  Committing as: !GITNAME! ^<!GITMAIL!^>
goto identityok

:askidentity
echo.
echo  ------------------------------------------------------------
echo   Git does not know who you are yet. This is a one-time setup.
echo   The name and email are stamped on every commit you make.
echo  ------------------------------------------------------------
echo.
set "GITNAME="
set /p GITNAME="  Your name (e.g. Pawan Sanap): "
set "GITNAME=%GITNAME:"=%"
if not defined GITNAME (
  echo  [X] A name is required.
  pause
  exit /b 1
)

set "GITMAIL="
set /p GITMAIL="  Your email (use your GitHub email): "
set "GITMAIL=%GITMAIL:"=%"
if not defined GITMAIL (
  echo  [X] An email is required.
  pause
  exit /b 1
)

git config --global user.name "%GITNAME%"
git config --global user.email "%GITMAIL%"
echo.
echo  [OK] Saved. You will not be asked again on this machine.
echo.

:identityok

REM ---- Safety gate: never push a broken build --------------------------
echo  Running a production build first. A push with a broken build
echo  would take the live site down until it is fixed.
echo.
call npm run build
if errorlevel 1 (
  echo.
  echo  [X] BUILD FAILED - nothing was pushed. Fix the errors above.
  echo.
  pause
  exit /b 1
)

findstr /C:"Lohegaon" "out\index.html" >nul 2>nul
if errorlevel 1 (
  echo.
  echo  [X] out\index.html has no page content. NOT deploying.
  echo.
  pause
  exit /b 1
)

echo.
echo  [OK] Build is good and the exported HTML has real content.
echo.
echo  ------------------------------------------------------------
echo   Files that will be committed:
echo  ------------------------------------------------------------
git status --short
echo  ------------------------------------------------------------
echo.

git diff --quiet && git diff --cached --quiet
if not errorlevel 1 (
  echo  Nothing has changed since the last commit. Nothing to deploy.
  echo.
  pause
  exit /b 0
)

set "msg="
echo   Commit message - do NOT wrap it in quotes.
set /p msg="  Message (Enter for default): "
if not defined msg set "msg=SEO: server-render page content, expand schema, fix metadata"

REM Strip any quotes the user typed. Without this, git receives -m ""text""
REM which it reads as an empty message followed by stray file paths.
set "msg=%msg:"=%"
REM & and | would break out of the command line, so neutralise them too.
set "msg=%msg:&=and%"
set "msg=%msg:|=-%"
if not defined msg set "msg=SEO and content updates"

echo.
set "ok="
set /p ok="  Push to origin/main? (y/n): "
if /i not "!ok!"=="y" (
  echo  Cancelled. Nothing was pushed.
  pause
  exit /b 0
)

echo.
git add -A
git commit -m "%msg%"
if errorlevel 1 (
  echo.
  echo  [X] Commit failed. Read the error above.
  pause
  exit /b 1
)

git push origin main
if errorlevel 1 (
  echo.
  echo  [X] Push failed. If this is an auth error, sign in to GitHub
  echo      in Git Credential Manager and run this again.
  pause
  exit /b 1
)

echo.
echo  ============================================================
echo   [OK] Pushed. Vercel is building now - it takes 1-2 minutes.
echo.
echo   Watch it:  https://vercel.com/dashboard
echo   Live site: https://drdhanshreedentalclinic.vercel.app
echo  ============================================================
echo.
pause
endlocal
