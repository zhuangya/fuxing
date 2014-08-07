var Fuxing = require('./index');
var mocha = require('mocha');
var assert = require('assert');

describe('Fuxing', function () {
  describe('it should be 443 Chinese compound surnames', function () {
    assert.equal(443, Fuxing.fuxing().length)
  });
  describe('check the name is compound surname or not', function () {
    assert.equal(false, Fuxing.isFuxing('张三'));
    assert.equal(true, Fuxing.isFuxing('欧阳'));
  });
});
