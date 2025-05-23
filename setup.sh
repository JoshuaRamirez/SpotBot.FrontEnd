#!/bin/bash

# Load optional environment variables
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Install Angular CLI globally
npm install -g @angular/cli

# Install project dependencies
pnpm install

# Optional: check test runner availability
pnpm exec vitest --version

# Persist environment variables for Codex tasks
echo "export NODE_ENV=development" >> ~/.bashrc
echo "export CI=true" >> ~/.bashrc
