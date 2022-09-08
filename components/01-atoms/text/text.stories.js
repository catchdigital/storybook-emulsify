import React from 'react';
// import { useEffect } from '@storybook/client-api';

import heading from './headings/_heading.twig';
import blockquote from './02-blockquote.twig';
import paragraph from './03-inline-elements.twig';
import alert from './05-alerts.twig';
// import banner from './07-banner.twig';

import headingData from './headings/headings.yml';
import blockquoteData from './blockquote.yml';
import alertData from './alert.yml';
// import bannerData from './banner.yml';

// import '../../02-molecules/accordion/accordion';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

// Loop over items in headingData to show each one in the example below.
const headingsList = headingData.map((d) => heading(d)).join('');

export const headings = () => (
  <div dangerouslySetInnerHTML={{ __html: headingsList }} />
);

export const blockquotes = () => (
  <div dangerouslySetInnerHTML={{ __html: blockquote(blockquoteData) }} />
);

export const alerts = () => (
  <div dangerouslySetInnerHTML={{ __html: alert(alertData) }} />
);

// export const datesExample = () => {
//   useEffect(() => Drupal.attachBehaviors(), []);
//   return <div dangerouslySetInnerHTML={{ __html: dates() }} />;
// };

// Disable a11y checking for contentinfo as they're printed multiple times for testing.
// alertsExample.parameters = {
//   a11y: {
//     options: {
//       rules: {
//         'landmark-no-duplicate-contentinfo': { enabled: false },
//         'landmark-unique': { enabled: false },
//       },
//     },
//   },
// };
export const random = () => (
  <div dangerouslySetInnerHTML={{ __html: paragraph({}) }} />
);
// export const bannerExample = () => (
//   <div dangerouslySetInnerHTML={{ __html: banner(bannerData) }} />
// );
