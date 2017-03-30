'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:StackedbarCtrl
 * @description
 * # StackedbarCtrl
 * Controller of the FamilySleep
 */
 //need to figure how to hover on specific piece and give the numberfors
 //need to figure how to not make the colors transparant
angular.module('FamilySleep')
  .controller('StackedbarCtrl', function ($scope) {
    $scope.labels = ['Monday']; // this will also come from the sleepfactory singleton
    $scope.type = 'StackedBar'; //not sure when I need this
    $scope.series = ['2015', '2016']; //will come from the sleepdatafactory singleton will have a loop here to identify number of series
    $scope.options = { //options will be defined heres
      scales: {
        xAxes: [{
          stacked: true,
           gridLines: {
           	display:false
         }
        }],
        yAxes: [{
          stacked: true,
          gridLines: {
           	display:false
         }
        }]
      },
      legend: {
      	display: true //need to figure how to put legend at bottom
      }
    };

    $scope.data = [ //this will also come from sleep data
      [65],
      [28]
    ];
    $scope.colors = ['#72C02C', '#3498DB']; //the orders will be assigned in this order and I think if I change the color they won't be transparant anymore? need to double check this part
  });
