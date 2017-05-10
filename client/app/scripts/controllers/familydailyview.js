'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamilydailyviewCtrl
 * @description
 * # FamilydailyviewCtrl
 * Controller of the FamilySleep
 */
 angular.module('FamilySleep')
  .controller('FamilydailyviewCtrl', ['$scope', '$rootScope', 'tractdbdata', 'sleepDataFactory', 'sleepFamDailyDataFactory', 'dateFactory',
    function($scope, $rootScope, dbdata, sleepDataFactory, famDailySleep, dateFactory){
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

    $rootScope.active = 'family-daily-view';
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
    };

    $scope.$on('user:updated', function() {
      updateData();
    });
    
    var updateData = function() {
      var newRawDate = dateFactory.getDate();
      var newDate = newRawDate.getFullYear() + "-" + (newRawDate.getMonth() > 9 ? "" : "0" ) + (newRawDate.getMonth()+1) + '-' + newRawDate.getDate();
 
      var promise = dbdata.get_fam_daily_sleep_data(['mom','dad','girl','boy'], newDate);
      promise.then(function(response) {
        console.log(famDailySleep);
        $scope.data = [famDailySleep.sleep_data['mom'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['mom'][newDate].duration/1000/60/60)];
        $scope.data_dad = [famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60)];
        $scope.data_girl = [famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60)];
        $scope.data_boy = [famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60)];
         // console.log("from DoughnutCtrl");
         // console.log(sleepDataFactory);
         $scope.labels = ['hours slept','hours awake']; //["Download Sales", "In-Store Sales", "Mail-Order Sales"]; 
         /*define colors here*/
         $scope.colors = ['#0000FF', '#E0E0E0'];
         $scope.options = {
              cutoutPercentage: 70
         };
      });
    }
    updateData();

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
