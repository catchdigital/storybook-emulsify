const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
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
