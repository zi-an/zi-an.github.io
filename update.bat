@echo off

if not exist public ( 
echo public not exist , Git cloning !!!
git clone --depth 1 git@github.com:zi-an/zi-an.github.io.git public
)

hugo

cd public
git add .
git commit -m "update website"
git push