#!/bin/bash

# Create logos directory if it doesn't exist
mkdir -p ../static/logos

# Base URL for logos
BASE_URL="https://raw.githubusercontent.com/devicons/devicon/master/icons"

# Function to download a logo
download_logo() {
    local name=$1
    local extension=$2
    local url="$BASE_URL/$name/$name-$extension"
    echo "Downloading $name.$extension..."
    curl -L "$url" -o "../static/logos/$name.$extension"
}

# Download logos
download_logo "javascript" "js.png"
download_logo "typescript" "ts.png"
download_logo "python" "python.png"
download_logo "c" "c.svg"
download_logo "cplusplus" "cpp.svg"
download_logo "react" "react.svg"
download_logo "svelte" "svelte.png"
download_logo "flutter" "flutter.svg"
download_logo "dart" "dart.png"
download_logo "csharp" "csharp.svg"
download_logo "nodejs" "node.png"
download_logo "express" "express.png"
download_logo "html5" "html.svg"
download_logo "css3" "css.svg"
download_logo "sass" "sass.png"
download_logo "bootstrap" "bootstrap.svg"
download_logo "docker" "docker.svg"
download_logo "kubernetes" "kubernetes.svg"
download_logo "firebase" "firebase.png"
download_logo "mongodb" "mongodb.svg"
download_logo "redis" "redis.svg"
download_logo "tailwindcss" "tailwind.svg"
download_logo "vitejs" "vite.png"
download_logo "jest" "jest.png"
download_logo "postcss" "postcss.svg"

echo "Logo download complete!" 