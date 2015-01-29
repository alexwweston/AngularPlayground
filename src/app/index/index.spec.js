describe('IndexController', function() {
  var indexController;
  var $scope;

  beforeEach(module('index'));

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    indexController = $controller('IndexController', {
      $scope: $scope
    });
  }));

  it('should say hello', inject(function () {
    expect($scope.hello).to.exist;
  }));
});
