#!/bin/bash

# Simple build script for static site
echo "Building static site..."

# Create output directory
mkdir -p out

# Copy public files to output
cp -r public/* out/

# Copy any additional static assets
if [ -d "static" ]; then
    cp -r static/* out/
fi

echo "Static site built successfully!"
echo "Files in output directory:"
ls -la out/
