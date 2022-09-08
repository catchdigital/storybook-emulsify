/**
 * @file Accordion JS
 *
 * JS Behaviors for toggling accordion content.
 */
Drupal.behaviors.Accordion = {
  attach(context) {
    const accordions = context.querySelectorAll('.js-accordion');
    if (!accordions.length) {
      return true;
    }

    // Loop over all the accordion objects
    return accordions.forEach((acc) => {
      const heading = acc.querySelector('.accordion__heading');
      const content = acc.querySelector('.accordion__content');

      const originalHeading = heading.querySelector('button').textContent;
      const expandedHeading =
        heading.dataset.expandedheading || originalHeading;

      if (!heading || !content || acc.getAttribute('js-applied')) {
        return;
      }

      acc.setAttribute('js-applied', true);

      // Add aria-expanded="false" to the button
      heading.querySelector('button').setAttribute('aria-expanded', 'false');
      // Add 'hidden' attribute to the content wrapper
      content.setAttribute('hidden', 'hidden');

      const handleClick = (e) => {
        const target = e.currentTarget;
        const button = target.querySelector('button');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
          content.removeAttribute('hidden');
          heading.classList.add('is-active');
          acc.classList.add('is-open');
          button.textContent = expandedHeading;
        } else {
          content.setAttribute('hidden', true);
          heading.classList.remove('is-active');
          acc.classList.remove('is-open');
          button.textContent = originalHeading;
        }
      };

      heading.addEventListener('click', handleClick);
    });
  },
};
