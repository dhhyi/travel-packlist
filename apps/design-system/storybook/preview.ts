import { withThemeByClassName } from '@storybook/addon-themes';
import { type Preview, componentWrapperDecorator } from '@storybook/angular';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

// https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: 'mobile2',
    },
  },
  globalTypes: {
    accessible: {
      description: 'Accessibility',
      toolbar: {
        title: 'Accessible',
        icon: 'accessibility',
        items: [
          { value: 'true', right: true, title: '✔️' },
          { value: 'false', title: '❌' },
        ],
        dynamicTitle: true,
      },
    },
    animations: {
      description: 'Animations',
      toolbar: {
        title: 'Animations',
        icon: 'fastforward',
        items: [
          { value: 'true', right: true, title: '✔️' },
          { value: 'false', title: '❌' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    accessible: 'true',
    animations: 'true',
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div [class.accessible]="accessible" [class.animations]="animations" class="container mx-auto" style="padding-bottom: 4rem;">
          ${story}
        </div>`,
      ({ globals }) => ({
        accessible: globals['accessible'] === 'true',
        animations: globals['animations'] === 'true',
      }),
    ),
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
