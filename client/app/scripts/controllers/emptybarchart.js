'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:EmptybarchartCtrl
 * @description
 * # EmptybarchartCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('EmptybarchartCtrl', function ($scope) {
  	$scope.color = ['#D3D3D3'];
  	$scope.data = [65];
  	$scope.labels = ['Empty'];
  	$scope.options = {
  		scales: {
    xAxes: [{
                    display:false
            }],
    yAxes: [{
                    display:false
            }]
    }
  	};
  });
