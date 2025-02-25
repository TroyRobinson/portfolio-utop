#!/bin/bash

# Load nvm if it exists
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    . "$HOME/.nvm/nvm.sh"
fi

# Use Node.js 16
if command -v nvm &> /dev/null; then
    echo "Using Node.js 16..."
    nvm use 16
else
    echo "Warning: nvm not found. Please install Node.js 16 manually."
    exit 1
fi

# Use local package.json for development
cp package.local.json package.json

# Run Next.js dev server
npm run dev &

# Wait a moment for the server to start
sleep 2

# Restore original package.json from Utopia backup immediately
cp package.json.utopia package.json

# Wait for the background process to finish
wait