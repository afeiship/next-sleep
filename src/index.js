import nx from '@jswork/next';

// https://www.lfhacks.com/tech/puppeteer-sleep
nx.sleep = function (inMs) {
  return new Promise(function (resolve) {
    setTimeout(resolve, inMs);
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.sleep;
}

export default nx.sleep;
