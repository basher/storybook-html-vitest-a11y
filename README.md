# Simplified Storybook/HTML example to demonstrate potential issues with Vitest accessibility testing
- See [official Storybook Vitest docs](https://storybook.js.org/docs/writing-tests/accessibility-testing).

## Run accessibility tests
### 1. Using `a11y` addon in Storybook UI
- `npm run storybook` to open Storybook locally.
- Click on Button story and open the "Accessibility" addons panel.

### 2. Using `vitest` addon in Storybook UI
- With Storybook still running, click on the "Run tests" tool in the sidebar, and ensure "Accessibility" tests are checked.
- This will test all stories.
> NOTE: If connection with Storybook server is lost, clear browser cache and restart Storybook.

### 3. Using `vitest` addon in CLI
- No need to open Storybook locally.
- `npm run test-storybook`.
