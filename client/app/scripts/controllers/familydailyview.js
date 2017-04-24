'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamilydailyviewCtrl
 * @description
 * # FamilydailyviewCtrl
 * Controller of the FamilySleep
 */
 angular.module('FamilySleep')
  .controller('FamilydailyviewCtrl', ['$scope', '$rootScope', 'tractdbdata', 'sleepDataFactory', function($scope, $rootScope, dbdata, sleep){
    $rootScope.menu = [
      {
        title: 'Family Daily View',
        url: '#!/familydailyview',
        tag: 'family-daily-view',
      },
      {
        title: 'Family Weekly View',
        url: '#!/famweeklyview',
        tag: 'family-weekly-view',
      }
    ];

    dbdata.get_single_daily_sleep('sleep_data');

    $rootScope.active = 'family-daily-view';
    //$rootScope.active = 'Back';
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
      //alert(item);
    };

  //getting data to visualize but this should only happen when mood has been self-report OR after a certain time of the day
  
    //dbdata.get_sleep();
    console.log("id -- in familydailyview controller");
    $scope.id = sleep.id;
    console.log($scope.id);


    //given all ids, [id1, id2, id3, id4]
    
  }]);
/*
angular.module('FamilySleep')
  .controller('FamilydailyviewCtrl', ['$scope', function($scope){
    $scope.visible = false;
    $scope.modalShown = false;
    $scope.renderer = 'canvas';

    //what are these functions?
    $scope.toggle = function(){
      $scope.visible = !$scope.visible;
    };

    //what are these functions?
    $scope.toggleModal = function(){
      $scope.modalShown = !$scope.modalShown;
    }
     //need to figure out how to make this a string with variables to replace info
      $scope.spec = {
        "width": 200,
        "height": 200,
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
}]);*/
