#!/bin/bash

# Install dependencies (uncomment if needed)
# npm install

# Example of linting a specific file
echo "Linting app.js..."
npx eslint app.js

# Example of formatting a specific file
echo "Formatting app.js..."
npx prettier --write app.js

# Example of linting and fixing a specific file
echo "Linting and fixing app.js..."
npx eslint --fix app.js

echo "Done!"