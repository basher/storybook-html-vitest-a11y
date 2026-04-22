/** @type { import('@storybook/html-vite').Preview } */
const preview = {
    parameters: {
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'error',
            context: '#storybook-root',
            config: {},
            options: {
                runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice', 'wcag22a', 'wcag22aa'],
            },
        },
    },

    tags: ['autodocs'],
};

export default preview;
