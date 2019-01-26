'use strict';

const Demo = require('../index');
const assert = require('assert');
describe('Demo', function() {
  it('should return true', function() {
    const demo = new Demo();
    assert.equal(demo.hi().length > 5, true);
  });
});
