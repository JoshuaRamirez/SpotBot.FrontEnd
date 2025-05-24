#!/bin/bash

set -e

# Load optional environment variables
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Install all Node dependencies
npm ci --no-progress

# Install Angular CLI globally
npm install -g @angular/cli

# Install project dependencies
pnpm install

# Optional: check test runner availability
pnpm exec vitest --version

# Install Chromium Browser for Testing
apt-get update
apt-get install -y wget gnupg
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list'
apt-get update
apt-get install -y google-chrome-stable

# Persist environment variables for Codex tasks
echo "export NODE_ENV=development" >> ~/.bashrc
echo "export CI=true" >> ~/.bashrc
