#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 添加 git 提交信息
git init
git add .
git commit -m 'deploy'

# 推送到 gh-pages 分支
git push -f git@github.com:Wcacciatori/Blog.git master:gh-pages

cd -