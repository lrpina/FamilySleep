'use strict';

/**
* @ngdoc function
* @name FamilySleep.controller:StackedbarCtrl
* @description
* # StackedbarCtrl
* Controller of the FamilySleep
*/
/****TODOS:
1. Figure out how to get rid of space between bars
2. change y label so that it shows text instead of a number
3. when hover show only one value
**/
angular.module('FamilySleep')
.controller('StackedbarCtrl', ['$scope', 'sleepDataFactory', 'tractdbdata', function ($scope, sleep, dbdata) { 
  // function getLabels() {
  //   var result = [];
  //   for (var i = 0; i < 400; i++) {
  //     result.push(newDate(i));
  //   }
  //   //console.log(result);
  //   return result; //bars do not show up a line because the moments has seconds so that bar will allign to the minute based on the seconds
  // }

  // function newDate(min) {
  //   return moment("2016-07-22T18:11:00.000").add(min, 'm');
  // }
  var test = dbdata.get_single_daily_sleep('sleep_data');
  //have to wait for dbdate to populate 
  test.then(function(response) {
    console.log('at stackedbar');
    
    $scope.options2 = {
      scales: {
        xAxes: [{
          stacked: true,
          categoryPercentage: 1,
          barPercentage: 1,
          type: 'time',
          gridLines: {
            display: false, // Set to false here => xAxis labels displayed out of canvas
            offsetGridLines: true,
          },
          ticks: {
            display: true,
            fontSize: 10,
            fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded',
            autoSkip: true,
            maxTicksLimit: 20
          },
          time: {
            displayFormats: {
              minute: 'HH:mm a'
            },
            tooltipFormat: 'HH:mm a',
            unit: "minute",
            unitStepSize: 1,
          },
          showXLabel: 60
        }],
        yAxes: [{
          stacked: true, //scaleLabel: "<%=value%>",
          ticks: {
            fontSize: 12,
            fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded'
          },
          gridLines: {
            display: false, // Set to false here => xAxis labels displayed out of canvas
          },
        }]
      },
      legend: {
        display: true
      }
    };

    $scope.data2 = [
      sleep.sleep_data['mom'].minuteData.three,
      sleep.sleep_data['mom'].minuteData.two,
      sleep.sleep_data['mom'].minuteData.one, 
    ];


//------------------------------------------------------------------------------------
    $scope.options = {
      scales: {
        xAxes: [{
          stacked: true,
          categoryPercentage: 1,
          barPercentage: 1,
          type: 'time',
          gridLines: {
            display: false, // Set to false here => xAxis labels displayed out of canvas
            offsetGridLines: true,
          },
          ticks: {
            display: true,
            fontSize: 10,
            fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded',
            autoSkip: true,
            maxTicksLimit: 20
          },
          time: {
            displayFormats: {
              minute: 'HH:mm a'
            },
            tooltipFormat: 'HH:mm a',
            unit: "minute",
            unitStepSize: 1,
          },
          showXLabel: 60
        }],
        yAxes: [{
          stacked: true, //scaleLabel: "<%=value%>",
          ticks: {
            fontSize: 12,
            fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded'
          },
          gridLines: {
            display: false, // Set to false here => xAxis labels displayed out of canvas
          },
        }]
      },
      legend: {
        display: true
      }
    };

    //console.log($scope.id);
    $scope.data = [
        sleep.sleep_data['mom'].minuteData.one, 
        sleep.sleep_data['mom'].minuteData.two,
        sleep.sleep_data['mom'].minuteData.three,
    ];

    $scope.labels = sleep.sleep_data['mom'].labels;

    $scope.colors = [{
        backgroundColor: "#8CA2AA",
        borderColor: "#8CA2AA",
        pointBackgroundColor: "#8CA2AA",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#8CA2AA",
      }, {
        backgroundColor: "#551A8B",
        borderColor: "#551A8B",
        pointBackgroundColor: "#6B8FBD",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#6B8FBD",
      },
      {
        backgroundColor: "#03E2E7",
        borderColor: "#03E2E7",
        pointBackgroundColor: "#6B8FBD",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#6B8FBD",
      },
      // {
      //   backgroundColor: "#FF69B4",
      //   borderColor: "#FF69B4",
      //   pointBackgroundColor: "#6B8FBD",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "#6B8FBD",
      // }
      ];

    $scope.series = ["Sleep", "Movement", "restless", "Awake"];

  });
  
}]);
