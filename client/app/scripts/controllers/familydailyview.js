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
  .controller('FamilydailyviewCtrl', function($scope){
     $scope.renderer = 'canvas';
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
});