#!/bin/bash
set -e

# Install all Node dependencies
npm ci --no-progress

# Install global utilities used by the project
npm install -g @angular/cli
