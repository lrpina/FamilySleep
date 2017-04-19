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
  	$scope.id = sleepDataFactory.id;
    console.log("in SingleweeklyviewCtrl");
    console.log($scope.id);
  });
