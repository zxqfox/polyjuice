'use strict'

var chai = require('chai')

global.expect = chai.expect

global.caller = function (lib) {
  var result = function (name, scope) {
    var fn = typeof lib[name] === 'function'
             ? lib[name]
             : (lib[name].truthy || lib[name].test || lib[name].eval)

    if (scope) {
      return fn.bind({ value: scope })
    }

    return fn
  }

  return result
}
