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
  	$scope.color = ['#c2abff'];
  	$scope.data = [0, 10];
  	$scope.labels = ['Test'];
  	$scope.options = {
  		scales: {
    xAxes: [{
                    display:true
            }],
    yAxes: [{
                    display:true
            }]
    }
  	};
  });
