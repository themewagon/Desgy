#!/bin/bash

echo "🚀 The Prism Lab Website Deployment Script"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Create deployment package
echo "📁 Creating deployment package..."
rm -rf deployment-package
mkdir -p deployment-package

# Copy necessary files
cp -r .next deployment-package/
cp -r public deployment-package/
cp package.json deployment-package/
cp next.config.js deployment-package/
cp tailwind.config.js deployment-package/

echo "✅ Deployment package created in 'deployment-package/' folder"

# Show deployment options
echo ""
echo "🌐 Deployment Options:"
echo "====================="
echo ""
echo "1. Cloudflare Pages (Recommended):"
echo "   - Go to https://dash.cloudflare.com"
echo "   - Navigate to Pages → Create a project"
echo "   - Connect your GitHub repository"
echo "   - Framework preset: Next.js"
echo "   - Build command: npm run build"
echo "   - Build output directory: .next"
echo ""
echo "2. Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Vercel will auto-detect Next.js settings"
echo ""
echo "3. Netlify:"
echo "   - Go to https://netlify.com"
echo "   - Drag and drop the 'deployment-package/' folder"
echo ""
echo "📋 Your website is ready for deployment!"
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
