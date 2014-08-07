'use strict';

var namelist = require('./fuxing');

exports.fuxing = function () {
  return namelist;
};

exports.isFuxing = function isFuxing (familyName) {
  return namelist.indexOf(familyName) !== -1;
};
