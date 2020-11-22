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
