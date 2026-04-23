#!/bin/bash
# Git hooks setup for Unix/Mac

echo "Setting up Git hooks..."

# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Create .git/hooks if it doesn't exist
mkdir -p .git/hooks

# Copy hooks
cp .husky/pre-commit .git/hooks/pre-commit
cp .husky/commit-msg .git/hooks/commit-msg

echo "Git hooks installed successfully!"
