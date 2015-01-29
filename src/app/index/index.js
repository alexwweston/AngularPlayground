angular.module('index', [
  'ui.router'
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
  $scope.hello = 'Hello world';
});
