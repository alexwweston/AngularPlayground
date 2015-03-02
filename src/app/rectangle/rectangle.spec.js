describe('rectangle', function() {
  beforeEach(module('templates-app'));
  beforeEach(module('common'));
  beforeEach(module('rectangle'));

  describe("rectangleFactory", function(){
    it("should calculate area", inject(function(rectangleFactory){
      var rectangle = rectangleFactory({
        width: 4,
        height: 5
      });

      expect(rectangle.area()).to.equal(20);
    }));

    it("should have a default color", inject(function(rectangleFactory){
      var rectangle = rectangleFactory();

      expect(rectangle.color).to.have.length(7); //like #FFFFFF
    }));
  });

  describe('addRectangleController', function() {
    describe('saveRectangle', function() {
      it('should add a rectangle and go home', inject(function($controller, rectangles, $state) {
        var scope = {
          width: 10,
          height: 20
        };
        var indexController = $controller('addRectangleController', {
          $scope: scope
        });

        sinon.stub($state, 'go');

        scope.saveRectangle();

        expect(rectangles.list()).to.have.length(1);
        expect($state.go.calledWith('index')).to.equal(true);

        $state.go.restore();
      }));
    });
  });

  describe('rectangles service', function() {
    describe('add', function() {
      it("should add rectangle objects", inject(function(rectangles){
        rectangles.add(1, 2);

        var rectangle = rectangles.list()[0];
        expect(rectangle).property('width').to.equal(1);
        expect(rectangle).property('height').to.equal(2);
        expect(rectangle).to.respondTo('area');
      }));
    });

    describe('list', function() {
      it("should hold a list of rectangles", inject(function(rectangles){
        rectangles.add(1, 2);
        rectangles.add(3, 4);

        expect(rectangles.list()).to.have.length(2);
      }));
    });
  });

  describe('rectangle directive', function() {
    var $compile;
    var $scope;

    beforeEach(inject(function(_$compile_, $rootScope){
      $compile = _$compile_;
      $scope = $rootScope.$new();
    }));

    it('should contain css for dimensions and color', inject(function(rectangleFactory) {
      $scope.rectangle = rectangleFactory({
        width: 123,
        height: 234,
        color: '#123456'
      });
      var element = $compile('<div rectangle="rectangle"></div>')($scope);
      $scope.$digest();

      var html = element.html();
      expect(html).to.contain('width: 123px');
      expect(html).to.contain('height: 234px');
      expect(html).to.contain('background-color: #123456');
    }));

    it('should contain area as content', inject(function(rectangleFactory) {
      $scope.rectangle = rectangleFactory({
        width: 4,
        height: 5
      });
      var element = $compile('<div rectangle="rectangle"></div>')($scope);
      $scope.$digest();

      var rectangleEl = element.find('.rectangle');
      expect(rectangleEl[0]).to.be.ok;
      expect(rectangleEl.html()).to.contain('20px');
    }));
  });
});
