import React from 'react';
import { useEffect } from '@storybook/client-api';

import checkbox from './checkbox/checkbox.twig';
import radio from './radio/radio-demo.twig';
import select from './select/select-demo.twig';
import fileUpload from './files/file.twig';
import textfields from './textfields/textfields.twig';
import selectAutocompleteTwig from './select-autocomplete/select-autocomplete.twig';

import checkboxData from './checkbox/checkbox.yml';
import radioData from './radio/radio.yml';
import selectOptionsData from './select/select.yml';
import selectAutocompleteData from './select-autocomplete/select-autocomplete.yml';

import './select-autocomplete/select-autocomplete';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const checkboxes = () => (
  <div dangerouslySetInnerHTML={{ __html: checkbox(checkboxData) }} />
);
export const radioButtons = () => (
  <div dangerouslySetInnerHTML={{ __html: radio(radioData) }} />
);
export const selectDropdowns = () => (
  <div dangerouslySetInnerHTML={{ __html: select(selectOptionsData) }} />
);
export const textfieldsExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: textfields({}) }} />
);
export const fileUploadExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: fileUpload({}) }} />
);
export const selectAutocomplete = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: selectAutocompleteTwig(selectAutocompleteData),
      }}
    />
  );
};
