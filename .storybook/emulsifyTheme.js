// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Digital Styleguide for [Project Name]',
  brandUrl: 'https://storybook.js.org/',
  brandImage:
    '/logo.svg',
});
