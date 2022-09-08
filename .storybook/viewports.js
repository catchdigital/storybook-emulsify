/**
 * Site-wide viewports
 *
 * These are manual, but should marry up with those defined in the SASS and the .breakpoints.yml files.
 *
 * This is just for the Storybook display – it adds a 'viewport' button so you can test the layouts inside Storybook.
 */
export const siteViewports = {
  phone: {
    name: 'phone',
    styles: {
      width: '400px',
      height: '100%',
    },
  },
  phonewide: {
    name: 'phone-wide',
    styles: {
      width: '480px',
      height: '100%',
    },
  },
  phablet: {
    name: 'phablet',
    styles: {
      width: '560px',
      height: '100%',
    },
  },
  tabletsmall: {
    name: 'tablet-small',
    styles: {
      width: '640px',
      height: '100%',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '767px',
      height: '100%',
    },
  },
  tabletwide: {
    name: 'tablet-wide',
    styles: {
      width: '980px',
      height: '100%',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1216px',
      height: '100%',
    },
  },
  desktopwide: {
    name: 'desktop-wide',
    styles: {
      width: '1408px',
      height: '100%',
    },
  },
};
