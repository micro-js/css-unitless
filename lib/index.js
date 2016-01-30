/**
 * Modules
 */

var hyphenate = require('@f/hyphenate')

/**
 * Unitless CSS properties
 */

var props = [
  'animationIterationCount',
  'boxFlex',
  'boxFlexGroup',
  'boxOrdinalGroup',
  'columns',
  'columnCount',
  'fillOpacity',
  'flex',
  'flexGrow',
  'flexPositive',
  'flexNegative',
  'flexOrder',
  'flexShrink',
  'fontWeight',
  'lineHeight',
  'lineClamp',
  'opacity',
  'order',
  'orphans',
  'stopOpacity',
  'strokeDashOffset',
  'strokeOpacity',
  'strokeWidth',
  'tabSize',
  'widows',
  'zIndex',
  'zoom'
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
