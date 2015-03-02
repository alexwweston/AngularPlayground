describe('index', function() {
  beforeEach(module('index'));

  describe('controller', function() {
    it('should have an array of rectangles', inject(function($controller) {
      var scope = {};
      var indexController = $controller('IndexController', {
        $scope: scope
      });

      expect(scope).property('rectangles').to.be.an.array;
    }));
  });
});
