const postcss = require('postcss');
let fontstacks = require('./fontstacks-config.js');

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

module.exports = postcss.plugin('fontstack', (options) => {
  fontstacks = Object.assign(fontstacks, options.fontstacks);

  return (root) => {
    root.walkRules((rule) => {
      rule.walkDecls((decl) => {
        const value = decl.value;
        if (value.indexOf( 'fontstack(' ) !== -1) {
          let fontstackRequested = value.match(/\(([^)]+)\)/)[1].replace(/["']/g, '');
          fontstackRequested = toTitleCase(fontstackRequested);
          const fontstack = fontstacks[fontstackRequested];
          const firstFont = value.substr(0, value.indexOf('fontstack('));
          const newValue = firstFont + fontstack;
          decl.value = newValue;
        }
      });
    });
  };
});
