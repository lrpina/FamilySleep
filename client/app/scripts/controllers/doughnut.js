'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:DoughnutCtrl
 * @description
 * # DoughnutCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('DoughnutCtrl', function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
   	$scope.data = [300, 500, 100];
    $scope.options = {
	    cutoutPercentage: 70
    };
  });
