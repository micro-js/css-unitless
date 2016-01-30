/**
 * Modules
 */

var hyphenate = require('@f/hyphenate')

/**
 * Unitless CSS properties
 */

var props = [
  'columns',
  'columnCount',
  'opacity',
  'fillOpacity',
  'stopOpacity',
  'fontWeight',
  'lineHeight',
  'orphans',
  'widows',
  'zIndex',
  'zoom',
  'order',
  'flex',
  'flexGrow',
  'flexOrder',
  'flexShrink',
  'tabSize',
  'animationIterationCount',
  'boxOrdinalGroup'
]

/**
 * Expose cssUnitlessProps
 */

module.exports = props
  .reduce(function (acc, prop) {
    acc[prop] = true
    acc[hyphenate(prop)] = true
    return acc
  }, {})
