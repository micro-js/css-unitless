/**
 * Imports
 */

var unitless = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(unitless.zIndex, true)
  t.equal(unitless['z-index'], true)
  t.end()
})
