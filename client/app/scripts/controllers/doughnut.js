'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:DoughnutCtrl
 * @description
 * # DoughnutCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('DoughnutCtrl', function ($scope, sleepDataFactory) {
  	 $scope.data = sleepDataFactory.data;
  	 $scope.labels = sleepDataFactory.labels;
     //$scope.colors <array>
     $scope.options = {
          cutoutPercentage: 70
     };
  });
