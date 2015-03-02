angular.module('index', [
  'ui.router',
  'common',
  'rectangle'
])
  .config(function($stateProvider) {
    $stateProvider.state('index', {
      url: '/',
      views: {
        main: {
          controller: 'IndexController',
          templateUrl: 'index/index.tpl.html'
        }
      },
      data: {
        pageTitle: 'Home'
      }
    });
  })
  .controller('IndexController', function($scope, rectangles) {
    $scope.rectangles = rectangles.list();
  });
