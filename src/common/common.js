angular.module('common', [

])
  .filter('px', function() {
    return function(value) {
      if(!value) {
        value = '0';
      }
      return value + 'px';
    };
  });