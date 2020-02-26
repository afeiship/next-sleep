/*!
 * name: @feizheng/next-sleep
 * description: Sleep for next.
 * url: https://github.com/afeiship/next-sleep
 * version: 1.0.0
 * date: 2020-02-26 13:54:16
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.sleep = function(inMs) {
    return new Promise(function(resolve) {
      setTimeout(resolve, inMs);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sleep;
  }
})();

//# sourceMappingURL=next-sleep.js.map
