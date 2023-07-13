(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.sleep should have a sleep function', async function () {
      var start = Date.now();
      await nx.sleep(1000);
      var end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(1000);
    });
  });
})();
