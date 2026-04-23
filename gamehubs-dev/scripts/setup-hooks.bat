@echo off
rem Git hooks setup for Windows
echo Setting up Git hooks...

rem Pre-commit hook
copy .husky\pre-commit .git\hooks\pre-commit 2>nul
copy .husky\commit-msg .git\hooks\commit-msg 2>nul

echo Git hooks installed successfully!
pause
