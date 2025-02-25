#!/bin/bash

# Load nvm if it exists
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    . "$HOME/.nvm/nvm.sh"
fi

# Install and use Node.js 16 (more stable with OpenSSL)
if command -v nvm &> /dev/null; then
    echo "Installing Node.js 16..."
    nvm install 16
    nvm use 16
else
    echo "Warning: nvm not found. Please install Node.js 16 manually."
    exit 1
fi

# Create package.json.utopia backup if it doesn't exist
if [ ! -f package.json.utopia ]; then
    echo "Creating Utopia package.json backup..."
    cp package.json package.json.utopia
fi

# Function to restore package.json on script exit
cleanup() {
    echo "Restoring original package.json from Utopia backup..."
    cp package.json.utopia package.json
}

# Set up trap to call cleanup on script exit (including Ctrl+C)
trap cleanup EXIT

# Use local package.json for development
cp package.local.json package.json

# Clean up existing node_modules and package-lock.json
echo "Cleaning up existing installation..."
rm -rf node_modules package-lock.json

# Create pages directory if it doesn't exist
mkdir -p src/pages

# Install dependencies
echo "Installing dependencies..."
npm install --legacy-peer-deps