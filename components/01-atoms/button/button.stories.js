import React from 'react';

import button from './button-demo.twig';

import buttonData from './button.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms' };

export const buttons = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
);
