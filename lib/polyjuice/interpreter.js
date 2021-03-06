/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var Reader = require('./reader')

module.exports = function (dictionary, json_data, truth_tbl, discarded) {
  var output = {}

  discarded = discarded || []

  var fn = function (input) {
    if (typeof input === 'number') {
      return true
    }

    return input ? true : false
  }

  var reader = new Reader(dictionary, fn, truth_tbl, output)

  for (var name in json_data) {
    var tuple = reader.get(name, json_data[name])

    var target = reader.target(name)

    if (Object.keys(tuple).length === 0) {
      discarded.push(name)
    }

    var reference = output

    if (target) {
      output[target] = output[target] || {}

      reference = output[target]
    }

    for (var newRule in tuple) {
      reference[newRule] = tuple[newRule]
    }
  }

  return output
}
