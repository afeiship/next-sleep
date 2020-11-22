/*!
 * name: @jswork/next-sleep
 * description: Sleep for next.
 * homepage: https://github.com/afeiship/next-sleep
 * version: 1.0.0
 * date: 2020-11-22 16:19:45
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global };

  // https://www.lfhacks.com/tech/puppeteer-sleep
  nx.sleep = function (inMs) {
    return new Promise(function (resolve) {
      setTimeout(resolve, inMs);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sleep;
  }
})();
