angular.module('common', [

])
  .factory('Math', function($window) {
    return $window.Math;
  })
  .filter('px', function() {
    return function(value) {
      if(!value) {
        value = '0';
      }
      return value + 'px';
    };
  });