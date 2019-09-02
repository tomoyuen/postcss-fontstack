"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var postcss = require('postcss');

var fontstacks = require('./fontstacks-config.js');

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports = postcss.plugin('fontstack', function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  fontstacks = _extends(fontstacks, options.fontstacks);
  return function (root) {
    root.walkRules(function (rule) {
      rule.walkDecls(function (decl) {
        var value = decl.value;

        if (value.indexOf('fontstack(') !== -1) {
          var fontstackRequested = value.match(/\(([^)]+)\)/)[1].replace(/["']/g, '');
          fontstackRequested = toTitleCase(fontstackRequested) || 'default';
          var fontstack = fontstacks[fontstackRequested];
          var firstFont = value.substr(0, value.indexOf('fontstack('));
          var newValue = firstFont + fontstack;
          decl.value = newValue;
        }
      });
    });
  };
});