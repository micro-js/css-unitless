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
  t.equal(unitless.order, true)

  t.equal(unitless.webkitOrder, true)
  t.equal(unitless['-webkit-order'], true)

  t.equal(unitless.mozOrder, true)
  t.equal(unitless['-moz-order'], true)

  t.equal(unitless.msOrder, true)
  t.equal(unitless['-ms-order'], true)

  t.end()
})
