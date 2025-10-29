#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e



# 添加 git 提交信息
git add .
git commit -m 'deploy'

# 推送到 gh-pages 分支
git push 

