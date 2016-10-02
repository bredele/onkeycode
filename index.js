/**
 * Mapping object.
 */

var map = {
  'tab': 9,
  'enter': 13,
  'backspace': 8,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'break': 19,
  'caps': 20,
  'esc': 27,
  'space': 32,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'delete': 46,
  'command': 91
}


/**
 * Execute function on key code.
 *
 * @param {String} key
 * @param {Function} cb
 * @return {Function}
 * @api public
 */

module.exports = function(key, cb) {
  var code = typeof key == 'string'
    ? map(key)
    : key
  return function(e) {
    if(e.keyCode == code) cb()
  }
}
