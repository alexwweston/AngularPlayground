angular.module('rectangle', [
  'ui.router'
])
  .factory('rectangleFactory', function(Math) {
    var rectangle = {
      area: function() {
        return this.height * this.width;
      }
    };

    return function(properties) {
      var colorValue = Math.floor(Math.random() * 16777215).toString(16);

      return _.create(rectangle, _.assign({
        color: '#' + _.padLeft(colorValue, 6, '0')
      }, properties));
    };
  });