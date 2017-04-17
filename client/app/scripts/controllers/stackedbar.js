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
.controller('StackedbarCtrl', ['$scope', 'sleepDataFactory', function ($scope, sleep) { 
//no data here
  function getLabels() {
    var result = [];
    for (var i = 0; i < 40; i++) {
      result.push(newDate(i));
    }
    //console.log(result);
    return result; //bars do not show up a line because the moments has seconds so that bar will allign to the minute based on the seconds
  }

  function newDate(min) {
    return moment().add(min, 'm');
  }

  $scope.options = {
    scales: {
      xAxes: [{
        stacked: true,
        categoryPercentage: 1,
        barPercentage: 1,
        type: 'time',
        gridLines: {
          display: false // Set to false here => xAxis labels displayed out of canvas
        },
        ticks: {
          display: true,
          fontSize: 10,
          fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded',
          autoSkip: false
        },
        time: {
          displayFormats: {
            minute: 'HH:mm'
          },
          tooltipFormat: 'HH:mm',
          unit: "minute",
          unitStepSize: 1
        }
      }],
      yAxes: [{
        stacked: true, //scaleLabel: "<%=value%>",
        ticks: {
          fontSize: 12,
          fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded'
        }
      }]
    },
    legend: {
      display: true
    }
  };

  $scope.data = [
      [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0], 
      [0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

  $scope.labels = getLabels();

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
    {
      backgroundColor: "#FF69B4",
      borderColor: "#FF69B4",
      pointBackgroundColor: "#6B8FBD",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#6B8FBD",
    }
    ];

  $scope.series = ["Sleep", "Movement", "restless", "Awake"];

  
}]);
