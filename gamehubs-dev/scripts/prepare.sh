#!/bin/bash
# .husky setup script

echo "Setting up Git hooks..."

# Create .husky directory
mkdir -p .husky

# Copy hook files
cp scripts/pre-commit .husky/_/pre-commit
cp scripts/commit-msg .husky/_/commit-msg

# Make scripts executable
chmod +x scripts/pre-commit
chmod +x scripts/commit-msg

echo "Git hooks installed successfully!"
