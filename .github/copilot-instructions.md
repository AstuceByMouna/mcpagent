# AI Agent Instructions for AIAGENTMCP

## Project Overview
This project is a Playwright-based test automation framework that combines Model Context Protocol (MCP) for enhanced testing capabilities. The project focuses on end-to-end testing and browser automation.

## Key Components
- **MCP Configuration**: Located in `.vscode/mcp.json`, defines the Playwright MCP server setup
- **Playwright Test Setup**: 
  - Configuration in `playwright.config.js`
  - Tests located in `tests/` directory
  - Uses JavaScript for test implementation
- **GitHub Actions**: Automated CI/CD workflow in `.github/workflows/playwright.yml`

## Development Environment
- Node.js and npm required
- Playwright browsers pre-installed
- MCP server configured via `npx @playwright/mcp@latest`
- VS Code integration for enhanced testing experience

## Testing Patterns
- Browser automation tests are supported through Playwright MCP integration
- Tests can be written and executed through the MCP protocol

## Project Structure
```
.
├── .vscode/
│   └── mcp.json           # MCP server configuration
├── .github/
│   ├── workflows/
│   │   └── playwright.yml # CI/CD workflow configuration
│   └── copilot-instructions.md
├── tests/
│   └── example.spec.js    # Example test file
├── package.json           # Project configuration and dependencies
└── playwright.config.js   # Playwright test configuration
```

## Getting Started
1. Ensure Node.js is installed
2. Project is already initialized with required dependencies
3. Run tests using any of these commands:
   - `npx playwright test` - Run all tests
   - `npx playwright test --ui` - Start interactive UI mode
   - `npx playwright test --project=chromium` - Run tests in Chrome only
   - `npx playwright test --debug` - Run tests in debug mode
   - `npx playwright codegen` - Generate tests using Codegen

## Common Tasks
- **Writing Tests**: Add new test files in `tests/` directory following `example.spec.js` patterns
- **Running Tests**: Execute via command line or VS Code Playwright extension
- **Debugging**: Use `--debug` flag or VS Code debugger integration
- **Test Generation**: Utilize Codegen for automated test creation
- **CI/CD**: Tests automatically run on GitHub via configured workflow

## Note to AI Agents
This is a preliminary set of instructions based on the current project state. As the project grows, please maintain this document by:
- Adding new architectural patterns as they emerge
- Documenting project-specific conventions
- Updating development workflows
- Including examples of common use cases

---
Please enhance these instructions as the project evolves.
