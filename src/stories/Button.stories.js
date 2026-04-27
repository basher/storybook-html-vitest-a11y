import { ButtonHtml } from './Button';

export default {
    title: 'Button',
    argTypes: {
        label: {
            control: 'text',
            description: 'Button label text.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Non-empty string' }
            },
        },
        buttonStyle: {
            control: 'select',
            options: ['primary', 'secondary'],
            description: 'Button style override.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        buttonSize: {
            control: 'select',
            options: ['small'],
            description: 'Button size.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
    },
};

export const Button = {
    args: {
        label: 'Button',
    },
    render: (args) => ButtonHtml(args),
};
