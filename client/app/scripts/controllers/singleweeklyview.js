'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SingleweeklyviewCtrl
 * @description
 * # SingleweeklyviewCtrl
 * Controller of the FamilySleep
 */


angular.module('FamilySleep')
  .controller('SingleweeklyviewCtrl', ['tractdbdata', 'sleepDataFactory', 'dateFactory',function ($scope, dbdata, sleep, sleepdate) {
  	 $scope.id = sleepDataFactory.id;
    console.log("in SingleweeklyviewCtrl");
    console.log($scope.id);
  }]);
