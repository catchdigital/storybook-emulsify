# Storybook Starter Theme 🚀

This repository is to be used as a starting point for any Drupal projects which will be using storybook and emulsify for themeing. It should also be used for referencing best practices and approaches to themeing, twig templating, SCSS, BEM and JS.

## Prerequisites 🖊️

Make sure that which ever server you are using this theme to develop and compile code with has the following installed:

- `Node >= 12`
- `NPM >= 6`

You can install [NVM](https://github.com/nvm-sh/nvm) using the curl command:

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash```

and then install versions of node and NPM with that for example:

```nvm install v12.18.3```

To use this in Drupal you will need the `components` and `emulsify_twig` modules:

```
composer require drupal/emulsify_twig
composer require drupal/components


drush en -y components emulsify_twig
```


Below is a sample post update hook that can be added to a module, to enable these modules automatically and enable the theme (update the module name and theme name accordingly):

```
function my_module_post_update_enable_new_theme(&$sandbox) {
  \Drupal::service('theme_installer')->install(['mytheme']);
  \Drupal::service('theme_handler')->setDefault('mytheme');

  $modules = [
    'components',
    'emulsify_twig'
  ];

  \Drupal::service('module_installer')->install($modules);
  return t('Installed MYTHEME custom theme and dependencies.');
}


```

To install theme dependencies: run `npm install`

Remember to remove the folders `dist` and `styleguide` from the gitignore if your project does not compile files through Jenkins

For reference, see how the base Emulsify theme is installed: Installation of [Emulsify and the components](https://docs.emulsify.info/installation/design-system#drupal-installation):

Once you have completed the above, you should be able to run `npm run develop` to get started, It should give you a URL to the storybook instance on your local node server: typically `http://localhost:6006/`

## Documentation 📓

Please refer to these confluence pages for more information on theming with storybook.

- [Frontend confluence page](docs to come)
- [Storybook confluence page](docs to come)
- [Emulsify documentation for installation](https://docs.emulsify.info/installation/design-system#drupal-installation)

## Usage ⚙️

To start development, simply run `npm start`.
To compile files and build storybook statically, run `npm run compile`

For a complete list of commands available, simply run `npm run` from the project root and an up-to-date list of commands is shown.


## Have fun 🎉

Here are some useful links to refer to when theming:

- [BEM](https://css-tricks.com/bem-101/)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Twig](https://twig.symfony.com/)

and more to come, stay tuned...
