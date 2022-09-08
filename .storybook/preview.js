import { addDecorator } from '@storybook/react';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import { siteViewports } from './viewports';

// GLOBAL CSS
import '../components/styles.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

export const parameters = {
  viewport: {
    viewports: siteViewports,
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);
