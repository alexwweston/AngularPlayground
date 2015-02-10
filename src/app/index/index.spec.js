describe('index', function() {
  beforeEach(module('index'));

  describe('controller', function() {
    it('should have shapes', inject(function($controller) {
      var scope = {};
      var indexController = $controller('IndexController', {
        $scope: scope
      });

      expect(scope).to.have.property('rectangle');
      expect(scope.rectangle).to.respondTo('area');
      expect(scope).to.have.property('square');
      expect(scope.square).to.respondTo('area');
    }));
  });

  describe("rectangle", function(){
    it("should calculate area", inject(function(rectangleFactory){
      var rectangle = rectangleFactory();
      rectangle.width = 4;
      rectangle.height = 5;

      expect(rectangle.area()).to.equal(20);
    }));
  });

  describe("square", function(){
    it("should calculate area", inject(function(squareFactory){
      var square = squareFactory();
      square.size = 5;

      expect(square.area()).to.equal(25);
    }));
  });
});
