const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

common.entry = {};
module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    '_03-colors-css-vars': path.resolve('components/00-base/01-colors/_03-colors-css-vars.scss'),
  },

  stats: {
    // Config for minimal console.log mess.
    assets: false,
    moduleAssets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    children: false,
    chunkGroups: false,
    chunkModules: false,
  },
});
