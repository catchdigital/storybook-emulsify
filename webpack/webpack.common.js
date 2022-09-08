const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const mapFilenamesToEntries = (pattern) =>
  glob.sync(pattern).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.scss$/);
    return { ...entries, [name]: filename };
  }, {});

function getEntries(pattern) {
  const entries = {
    style: path.resolve(webpackDir, 'css.js'), // Storybook styles.
    base: path.resolve('components/base.scss'), // Drupal base.
    ...mapFilenamesToEntries(
      path.resolve('components/00-base/01-colors/_03-colors-css-vars.scss'),
    ), // Drupal components.
    ...mapFilenamesToEntries(path.resolve('components/02-molecules/**/*.scss')), // Drupal components.
    ...mapFilenamesToEntries(path.resolve('components/03-organisms/**/*.scss')), // Drupal components.
    ...mapFilenamesToEntries(path.resolve('components/04-templates/**/*.scss')), // Drupal components.
    ...mapFilenamesToEntries(path.resolve('components/05-pages/**/*.scss')), // Drupal components.
  };

  glob.sync(pattern).forEach((file) => {
    const filePath = file.split('components/')[1];
    const newfilePath = `js/${filePath.replace('.js', '')}`;
    entries[newfilePath] = file;
  });

  entries.svgSprite = path.resolve(webpackDir, 'svgSprite.js');
  entries.css = path.resolve(webpackDir, 'css.js');

  return entries;
}

module.exports = {
  stats: {
    errorDetails: true,
  },
  entry: getEntries(
    path.resolve(
      rootDir,
      'components/**/!(*.stories|*.component|*.min|*.test).js',
    ),
  ),
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.SVGSpriteLoader,
      loaders.ImageLoader,
      loaders.JSLoader,
    ],
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.ImageminPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: '[name].js',
  },
};
