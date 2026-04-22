# Storybook/HTML example to demonstrate issues with Vitest accessibility testing
- See [official Storybook Vitest docs](https://storybook.js.org/docs/writing-tests/accessibility-testing).
- See [Github issue](https://github.com/storybookjs/storybook/issues/34613).

## Run accessibility tests
### 1. Using `a11y` addon in Storybook UI
- `npm run storybook` to open Storybook locally.
- Click on Button story and open the "Accessibility" addons panel.
- **Zero violations**.

### 2. Using `vitest` addon in Storybook UI
- With Storybook still running, click on the "Run tests" tool in the sidebar, and ensure "Accessibility" tests are checked.
- This will test all stories.
- **1 violation**.
> NOTE: If connection with Storybook server is lost, clear browser cache and restart Storybook.

<img width="2090" height="607" alt="vitest-ui" src="https://github.com/user-attachments/assets/c64ede7c-ed1f-4fbd-b8c5-57a0f24a4a76" />

### 3. Using `vitest` addon in CLI
- No need to open Storybook locally.
- `npm run test-storybook`. I've added `verbose` logging to print out errors to console.
- **1 violation**.

<img width="1304" height="1252" alt="vitest-cli" src="https://github.com/user-attachments/assets/fddeb306-f6eb-4428-9be6-8cd4c6fc7b6e" />
