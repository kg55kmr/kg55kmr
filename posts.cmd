@echo off

call pnpm -r posts || exit /b

setlocal

cd ../posts
git add *
git commit -m update
git push

endlocal