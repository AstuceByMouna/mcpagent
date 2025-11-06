# AIAGENTMCP — Playwright test project

Short README to run and customize tests created by the AI assistant.

## Quick start
- Ensure you have Node.js and `npm` installed.
- Playwright and browsers are already installed in this workspace.

Run all tests:
```powershell
cd C:\Users\user\AIAGENTMCP
npx playwright test
```

Run a single test file (example: Facebook test) with one worker for clarity:
```powershell
cd C:\Users\user\AIAGENTMCP
npx playwright test tests/facebook-login.spec.js --workers=1
```

Open the last HTML report:
```powershell
cd C:\Users\user\AIAGENTMCP
npx playwright show-report
```

Run via npm script (convenience):
```powershell
cd C:\Users\user\AIAGENTMCP
npm test
```

