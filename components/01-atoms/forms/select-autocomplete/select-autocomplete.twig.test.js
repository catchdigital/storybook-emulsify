import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../../util/loadYaml';
import { setupTwig } from '../../../../.storybook/setupTwig';

setupTwig(Twig);

describe('selectautocomplete', () => {
  it('can render a select autocomplete form item', async () => {
    const { } = await render(
      join(__dirname, 'select-autocomplete.twig'),
      loadYaml(join(__dirname, 'select-autocomplete.yml')),
      namespaces,
    );
  });
});
