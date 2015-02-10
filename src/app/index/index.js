angular.module('index', [
  'ui.router',
  'common'
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
  .controller('IndexController', function($scope) {

  })
  .value('rectangleFactory', function() {

  })
  .value('squareFactory', function() {

  });
