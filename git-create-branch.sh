#!/bin/bash

# Generate branch name with timestamp
BRANCH="feature-$(date +%Y%m%d-%H%M%S)"

# Create branch
git checkout -b $BRANCH

# Stage all changes
git add .

# Commit changes
if git diff --cached --quiet; then
  echo "⚠ No changes to commit"
else
  git commit -m "save before feature work"
fi


# Push branch to remote
git push -u origin $BRANCH

echo "✔ Branch '$BRANCH' created, committed, and pushed!"


