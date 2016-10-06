/**
 * Modules
 */

var hyphenate = require('@f/hyphenate')

/**
 * Vendor prefixes
 */

var prefixes = ['webkit', 'moz', 'ms']

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

    prefixes.reduce(function (acc, prefix) {
      var prefixed = prefix + prop[0].toUpperCase() + prop.slice(1)
      acc[prefixed] = true
      acc['-' + hyphenate(prefixed)] = true
      return acc
    }, acc)

    return acc
  }, {})
