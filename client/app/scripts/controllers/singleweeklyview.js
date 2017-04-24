'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SingleweeklyviewCtrl
 * @description
 * # SingleweeklyviewCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('SingleweeklyviewCtrl', ['$scope', 'sleepDataFactory', 'tractdbdata', function ($scope, sleep, dbdata) {

  	// 'SingleweeklyviewCtrl', 'tractdbdata', function ($scope, sleepDataFactory, db) {
  	// $scope.id = sleep.id;
    console.log("in SingleweeklyviewCtrl");
   // console.log($scope.id);
    dbdata.get_fam_daily_sleep_data(['mom', 'dad', 'jack'], "");
  }]);
