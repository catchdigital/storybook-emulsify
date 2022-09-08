import React from 'react';

import pagerTwig from './pager.twig';
import pagerData from './pager.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Pager' };

export const pager = () => (
  <div dangerouslySetInnerHTML={{ __html: pagerTwig(pagerData) }} />
);
