@echo off

if not exist public ( 
echo public not exist , Git cloning !!!
git clone --depth 1 git@github.com:zi-an/zi-an.github.io.git public
)

if exist "mi.md" (
tar -cvf x.png mi.md
move x.png public/x
) else (
tar -xvf public/x.png
)

hugo

cd public
git add .
git commit -m "update website"
git push
