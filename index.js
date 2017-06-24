const postcss = require('postcss');

module.exports = postcss.plugin('fontstack', function fontstack(options) {
  return function(css) {
    options = options || {};
  }
});
