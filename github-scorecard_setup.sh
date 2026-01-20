#!/bin/bash

# Agent Readiness Scorecard - Git Setup Script
# This script helps you quickly push to GitHub

echo "🚀 Agent Readiness Scorecard - GitHub Setup"
echo "============================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   macOS: brew install git"
    echo "   Ubuntu: sudo apt-get install git"
    echo "   Windows: Download from https://git-scm.com/"
    exit 1
fi

echo "✓ Git is installed"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " username

if [ -z "$username" ]; then
    echo "❌ Username cannot be empty"
    exit 1
fi

# Set repository name
repo_name="agent-readiness-scorecard"

echo ""
echo "📝 Repository details:"
echo "   Repository name: $repo_name"
echo "   Your username: $username"
echo "   Remote URL: https://github.com/$username/$repo_name.git"
echo ""

read -p "Proceed with setup? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "Setup cancelled"
    exit 0
fi

echo ""
echo "🔧 Initializing git repository..."

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Agent Readiness Scorecard"

# Set main branch
git branch -M main

# Add remote
git remote add origin "https://github.com/$username/$repo_name.git"

echo ""
echo "✅ Local setup complete!"
echo ""
echo "📤 Next steps:"
echo ""
echo "1. Create the repository on GitHub:"
echo "   → Go to https://github.com/new"
echo "   → Repository name: $repo_name"
echo "   → Choose Public"
echo "   → DON'T initialize with README"
echo "   → Click 'Create repository'"
echo ""
echo "2. Push your code:"
echo "   → Run: git push -u origin main"
echo "   → Enter your GitHub credentials when prompted"
echo ""
echo "3. Enable GitHub Pages:"
echo "   → Go to repository Settings → Pages"
echo "   → Source: Deploy from branch"
echo "   → Branch: main, folder: / (root)"
echo "   → Click Save"
echo ""
echo "4. Your site will be live at:"
echo "   → https://$username.github.io/$repo_name/"
echo ""
echo "💡 Tip: If you have GitHub CLI installed, run:"
echo "   gh repo create $repo_name --public --source=. --remote=origin --push"
echo ""
echo "📚 For more help, see QUICKSTART.md or DEPLOYMENT.md"
echo ""