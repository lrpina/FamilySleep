'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:PiechartcontrollerCtrl
 * @description
 * # PiechartcontrollerCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('PiechartcontrollerCtrl', function ($scope) {
  	$scope.data =[200];
  	$scope.color = ['#E55EA2'];
  	$scope.options = {
  		elements: {
  			arc: {
  				borderWidth: 0
  			}
  		},
  		animation: false,
  		hover: {mode: null},
  		tooltips: {enabled: false}
  	}
  });
