import React from 'react';
import { useEffect } from '@storybook/client-api';

import template from './accordion-demo.twig';
import data from './accordion.yml';

import './accordion';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules' };
export const accordion = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: template(data) }} />;
};
