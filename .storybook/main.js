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
};
export default config;
