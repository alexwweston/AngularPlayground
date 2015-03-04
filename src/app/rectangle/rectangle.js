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
  })
  .factory('rectangles', function(rectangleFactory){
    function Rectangles(){
      this.rectangleList= [];
    }
    Rectangles.prototype.add = function add(width, height){
      var rectangle = rectangleFactory();
        rectangle.width = width;
        rectangle.height = height;
        this.rectangleList.push(rectangle);
     };
     Rectangles.prototype.list = function list(){
        return this.rectangleList;
     };
    return new Rectangles();
  })
  .directive('rectangle', function(){
    return {
      template: "<div class='rectangle' style = 'height: {{rectangle.height}}px; width: {{rectangle.width}}px; background-color: {{rectangle.color}}px'>" +
        "{{rectangle.area()}}px</div>"
    };
  }).config(function($stateProvider) {
    $stateProvider.state('addRectangle', {
      url: '/addRectangle',
      views: {
        main: {
          controller: 'addRectangleController',
          templateUrl: 'rectangle/rectangle.tpl.html'
        }
      },
      data: {
        pageTitle: 'Add Rectangle'
      }
    });
  })
  .controller('addRectangleController', function($scope, rectangles, $state){
    $scope.width = 100;
    $scope.height = 50;
    $scope.saveRectangle = function (width, height){
      rectangles.add(width, height);
      $state.go('index');
    };
  });