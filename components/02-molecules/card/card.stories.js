import React from 'react';

import cardTwig from './card.twig';

import cardData from './card.yml';

import './card';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Card' };

export const card = () => (
  <div dangerouslySetInnerHTML={{ __html: cardTwig(cardData) }} />
);
