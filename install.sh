#!/bin/bash

# Minim Theme Installation Script
# Run with: bash install.sh

set -e

echo "🚀 Installing Minim theme..."

# Check if we're in the correct directory
if [ ! -f "minim.info.yml" ]; then
    echo "❌ Error: Run this script from the minim theme directory"
    exit 1
fi

# Clone Minim CSS framework if needed
if [ ! -d "./source/00-core/_minim.css" ]; then
    echo "📦 Cloning Minim CSS framework..."
    git clone https://github.com/michaelpadiernos/minim.css.git ./source/00-core/_minim.css
else
    echo "⚠️  Minim CSS framework already exists, skipping"
fi

# Set up Node.js
echo "⚙️  Setting up Node.js..."

# Try to use NVM if available
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "📍 Using NVM"
    export NVM_DIR="$HOME/.nvm"
    . "$HOME/.nvm/nvm.sh"
    nvm install 23
    nvm use 23
else
    echo "📍 NVM not found, checking system Node.js..."
    if ! command -v node >/dev/null 2>&1; then
        echo "❌ Node.js is required. Please install Node.js 23+ manually."
        echo "   Visit: https://nodejs.org/"
        exit 1
    fi
fi

# Verify Node.js and npm
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
    echo "❌ Node.js or npm not found in PATH"
    exit 1
fi

echo "✅ Node.js $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build assets
echo "🔨 Building assets..."
if ! npm run run; then
    echo "⚠️  Build failed. Try: npm install -g gulp-cli"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "Next steps:"
echo "  drush theme:enable minim"
echo "  drush config:set system.theme default minim"
echo ""
echo "Development:"
echo "  gulp watch"
echo ""
