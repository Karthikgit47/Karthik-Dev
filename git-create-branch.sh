#!/bin/bash

# Generate branch name with timestamp
BRANCH="feature-$(date +%Y%m%d-%H%M%S)"

# Create branch
git checkout -b $BRANCH

# Stage all changes
git add .

# Commit changes
git commit -m "save before feature work"

# Push branch to remote
git push -u origin $BRANCH

echo "✔ Branch '$BRANCH' created, committed, and pushed!"
