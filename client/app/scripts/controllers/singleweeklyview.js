'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SingleweeklyviewCtrl
 * @description
 * # SingleweeklyviewCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('SingleweeklyviewCtrl', function ($scope, sleepDataFactory) {
  	 $scope.id = sleepDataFactory.id;
    console.log("in SingleweeklyviewCtrl");
    console.log($scope.id);
  });
