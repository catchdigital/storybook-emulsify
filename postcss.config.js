// postcssCustomProperties only needed for IE11 - remove if unnecessary for your project.
const postcssCustomProperties = require('postcss-custom-properties');
const autoPrefixer = require('autoprefixer');
module.exports = (env, args) => {
  const isColorFile = env.file.includes('_03-colors-css-vars.scss')
  return {
    plugins: [
      postcssCustomProperties({
        importFrom: isColorFile ? [] : ['dist/_03-colors-css-vars.css'],
      }),
      autoPrefixer(),
    ],
  }
}
;
