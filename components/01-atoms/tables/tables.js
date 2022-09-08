/**
 * Tables JS
 *
 * Responsive tables tweaks.
 */

Drupal.behaviors.ResponsiveTables = {
  attach(context) {
    const tables = [].slice.call(
      context.querySelectorAll('table:not(.table--non-responsive)'),
    );
    if (!tables.length) {
      return true;
    }

    tables.forEach(Drupal.behaviors.ResponsiveTables.addMobileHeaders);
    return tables;
  },
  /**
   * Add a copy of the header label to each cell, that's displayed on mobile.
   * Tables appear stacked on mobile.
   */
  addMobileHeaders(table) {
    // display: block will remove default table roles so we need to add them
    // back in with ARIA.
    if (table.classList.contains('table--details')) {
      return true;
    }

    table.setAttribute('role', 'table');
    table.classList.add('responsive--processed');
    const theads = [].slice.call(table.querySelectorAll('thead'));
    const tfoots = [].slice.call(table.querySelectorAll('tfoot'));
    theads.forEach((thead) => thead.setAttribute('role', 'rowgroup'));
    tfoots.forEach((thead) => thead.setAttribute('role', 'rowgroup'));

    // Get all the headers.
    const headers = [].slice.call(table.querySelectorAll('thead th'));
    headers.forEach((thead) => thead.setAttribute('role', 'columnheader'));
    // Get all the rows.
    const rows = [].slice.call(table.querySelectorAll('tbody tr'));

    rows.forEach((row) => {
      // Re-add roles.
      row.setAttribute('role', 'row');
      // Whack the table header for that cell at the beginning of the cell.
      const cells = row.querySelectorAll('td');

      cells.forEach((cell, cellIndex) => {
        // Re-add roles.
        cell.setAttribute('role', 'cell');
        const mobileHeader = document.createElement('span');
        mobileHeader.className = 'table__mobile-header';
        mobileHeader.innerHTML = headers[cellIndex].innerHTML;
        cell.insertBefore(mobileHeader, cell.firstChild);
      });
    });
    return table;
  },
};
