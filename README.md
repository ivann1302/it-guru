# ExtJS Application

A minimal ExtJS application with login functionality and product management.

## How to Run

1. Open `index.html` in a web browser
2. Login with username `admin` and password `padmin`
3. Use the application to manage products

## Code Quality Tools

This project uses ESLint for linting and Prettier for code formatting to ensure consistent code style and quality. It also includes pre-commit hooks to automatically lint and format code before commits.

### Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Set up Husky hooks (this should happen automatically after npm install):
    ```bash
    npm run prepare
    ```

### Available Scripts

-   **Lint code**:

    ```bash
    npm run lint
    ```

-   **Lint and fix code**:

    ```bash
    npm run lint:fix
    ```

-   **Format code**:

    ```bash
    npm run format
    ```

-   **Check formatting**:
    ```bash
    npm run format:check
    ```

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically lint and format code before commits:

-   When you commit changes, the pre-commit hook will run ESLint and Prettier on the staged JavaScript files
-   If there are any linting errors or formatting issues, the commit will be blocked until you fix them
-   You can bypass the pre-commit hooks if necessary by using the `--no-verify` flag: `git commit --no-verify`

### Example Usage

You can use the included example script to lint and format a specific file:

```bash
# Make the script executable
chmod +x lint-example.sh

# Run the script
./lint-example.sh
```

### Example Files

The project includes an example of a properly formatted file according to the project's ESLint and Prettier rules:

-   `examples/formatted-example.js`: Demonstrates proper formatting for ExtJS code, including:
    -   Class definitions
    -   Method declarations
    -   Conditional statements
    -   Arrays and objects
    -   Long strings
    -   Complex conditions

You can use this file as a reference when writing new code or formatting existing code.

### ESLint Configuration

The project uses the following ESLint rules:

-   Enforces code quality with warnings for console statements and unused variables
-   Requires strict equality (===)
-   Uses single quotes for strings
-   Requires semicolons
-   Uses 4-space indentation
-   Prohibits trailing commas and spaces
-   Warns about lines longer than 120 characters

### Prettier Configuration

The project uses the following Prettier settings:

-   120 character line length
-   4-space indentation
-   Single quotes
-   No trailing commas
-   LF line endings

### Editor Integration

#### Visual Studio Code

This project includes settings for Visual Studio Code to automatically format and lint code:

1. Install the following extensions:

    - ESLint: `dbaeumer.vscode-eslint`
    - Prettier: `esbenp.prettier-vscode`

2. The included `.vscode/settings.json` file configures VS Code to:
    - Format code with Prettier on save
    - Run ESLint fixes on save
    - Use the project's ESLint and Prettier configurations

No additional setup is required - just open the project in VS Code and start coding!
