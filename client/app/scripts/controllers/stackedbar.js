'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:StackedbarCtrl
 * @description
 * # StackedbarCtrl
 * Controller of the FamilySleep
 */
 //need to figure how to hover on specific piece and give the numberfors
angular.module('FamilySleep')
  .controller('StackedbarCtrl', function ($scope) {
    $scope.labels = ['Monday'];
    $scope.type = 'StackedBar';
    $scope.series = ['2015', '2016'];
    $scope.options = {
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
      	display: false
      }
    };

    $scope.data = [
      [65],
      [28]
    ];
    $scope.colors = ['#72C02C', '#3498DB']; //the orders will be assigned in this order
  });
