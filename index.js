var postcss = require('postcss');

module.exports = postcss.plugin('fontstack', function fontstack(options) {
  options = options || {};

  return function(root, result) {
    options = options || {};
  }
});
