import React from 'react';

import tables from './tables.twig';
import './tables';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms' };

export const table = () => (
  <div dangerouslySetInnerHTML={{ __html: tables({}) }} />
);
