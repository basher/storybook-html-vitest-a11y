import * as addonA11y from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/html-vite';
import * as projectAnnotations from './preview';

setProjectAnnotations([projectAnnotations, addonA11y]);
