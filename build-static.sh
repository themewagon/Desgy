#!/bin/bash

echo "Building static site..."

# Create output directory
mkdir -p public

# Copy static files (they're already in public)
echo "Static files ready in public directory"

# List what we have
echo "Files available:"
ls -la public/

echo "Static site ready!"
