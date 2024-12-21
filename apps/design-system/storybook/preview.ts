import { withThemeByClassName } from '@storybook/addon-themes';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { type Preview, componentWrapperDecorator } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: 'mobile2',
    },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="container mx-auto" style="padding-bottom: 4rem;">
          ${story}
        </div>`,
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
