'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SingleweeklyviewCtrl
 * @description
 * # SingleweeklyviewCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')

  .controller('SingleweeklyviewCtrl', ['$scope', 'sleepDataFactory', 'tractdbdata',  '$rootScope', function ($scope, sleep, dbdata, $rootScope) {

  	// 'SingleweeklyviewCtrl', 'tractdbdata', function ($scope, sleepDataFactory, db) {
   $scope.id = sleep.id;

  	$rootScope.menu = [
      {
          title: 'Back',
          url: '#!/familydailyview',
          tag: 'family-daily-view'
      },
      {
          title: 'Individual Daily View',
          url: '#!/sdview/' + $scope.id,
          tag: 'individual-daily-view'
      },
      {
          title: 'Individual Weekly View',
          url: '#!/singleweeklyview/' + $scope.id,
          tag: 'individual-weekly-view'
      }
    ];

    $rootScope.active = 'individual-daily-view';
    //$rootScope.active = 'Back';
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
      //alert(item);
    };
  	//$scope.id = sleepDataFactory.id;

    console.log("in SingleweeklyviewCtrl");
   // console.log($scope.id);
    dbdata.get_fam_daily_sleep_data(['mom', 'dad', 'jack'], "");
  }]);
