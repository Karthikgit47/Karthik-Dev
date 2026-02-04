#!/bin/bash

BRANCH="feature-$(date +%Y%m%d-%H%M%S)"

git checkout -b $BRANCH
git add .

if git diff --cached --quiet; then
  echo "⚠ No changes to commit"
else
  git commit -m "save before feature work"
fi

git push -u origin $BRANCH

echo "✔ Branch '$BRANCH' created and pushed!"
