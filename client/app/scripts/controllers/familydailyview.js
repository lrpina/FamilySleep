'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamilydailyviewCtrl
 * @description
 * # FamilydailyviewCtrl
 * Controller of the FamilySleep
 */
 /*
angular.module('FamilySleep')
  .controller('FamilydailyviewCtrl', ['ngVega', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
  */
angular.module('FamilySleep')
  .controller('FamilydailyviewCtrl', ['$scope', function($scope){
    $scope.visible = false;
    $scope.modalShown = false;
    $scope.renderer = 'canvas';

    //functions
    $scope.toggle = function(){
      $scope.visible = !$scope.visible;
    };

    $scope.toggleModal = function(){
      $scope.modalShown = !$scope.modalShown;
    }
     //need to figure out how to make this a string with variables to replace info
      $scope.spec = {
        "width": 400,
        "height": 400,
    "data": [
      {
        "name": "table",
        "values": [12],
        "transform": [{"type": "pie", "field": "data"}]
      }
    ],
    "scales": [
      {
        "name": "r",
        "type": "sqrt",
        "domain": {"data": "table", "field": "data"},
        "range": [20, 100]
      }
    ],
    "marks": [
      {
        "type": "arc",
        "from": {"data": "table"},
      "properties": {
        "enter": {
          "x": {"field": {"group": "width"}, "mult": 0.5},
          "y": {"field": {"group": "height"}, "mult": 0.5},
          "startAngle": {"value": 0},
          "endAngle": {"value": 5.5},
          "innerRadius": {"value": 75},
          "outerRadius": {"scale": "r", "field": "data"},
          "stroke": {"value": "#fff"}
        },
        "update": {
          "fill": {"value": "green"}
        }
      }
    },
    {
      "type": "text",
      "from": {"data": "table"},
      "properties": {
        "enter": {
          "x": {"field": {"group": "width"}, "mult": 0.5},
          "y": {"field": {"group": "height"}, "mult": 0.5},
          "radius": {"scale": "r", "field": "data", "offset": 8},
          "theta": {"field": "layout_top"},
          "fill": {"value": "#000"},
          "align": {"value": "center"},
          "baseline": {"value": "middle"},
          "text": {"value": "testing"}
        }
      }
    }
  ]
}
}]);
/*angular.module('FamilySleep').directive('modalDialog', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      show: '='
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>",
    replace: true, // Replace with the template below
    transclude: true, // Replace with the template below
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function(scope, attrs, element) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
          if (attrs.height)
            scope.dialogStyle.height = attrs.height;
          scope.hideModal = function() {
            scope.show = false;
          };
    }
  };
});*/