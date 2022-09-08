import React from 'react';

import imageTwig from './image/responsive-image.twig';
import figureTwig from './figure/figure.twig';

import imageData from './image/image.yml';
import figureData from './figure/figure.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const image = () => (
  <div dangerouslySetInnerHTML={{ __html: imageTwig(imageData) }} />
);

export const figure = () => (
  <div dangerouslySetInnerHTML={{ __html: figureTwig(figureData) }} />
);
