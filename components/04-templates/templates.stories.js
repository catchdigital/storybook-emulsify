import React from 'react';

import defaultTwig from './_default.twig';
import defaultData from './default.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Basic' };
export const basic = () => {
  return <div dangerouslySetInnerHTML={{ __html: defaultTwig(defaultData) }} />;
};
