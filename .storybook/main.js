const config = {
    stories: [
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],

    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        "@storybook/addon-vitest"
    ],

    framework: {
        name: '@storybook/html-vite',
        options: {},
    },

    // Load CSS using environment variables.
    // Commented out for now, as it causes issues with Storybook's CSS loading when running Vitest.
    /*previewHead: (head) => `
        ${head}
        ${
            `
            <link href="${process.env.STORYBOOK_CSS_PATH}" rel="stylesheet" />
            `
        }
    `,*/
};
export default config;
