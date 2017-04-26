'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SdviewCtrl
 * @description
 * # SdviewCtrl
 * Controller of the FamilySleep
 */
/**angular.module('FamilySleep')
  .controller('SdviewCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
**/
 angular.module('FamilySleep')
 	.controller('SdviewCtrl', ['$rootScope', '$scope', '$routeParams', 'tractdbdata', 'sleepDataFactory', 'dateFactory', function($rootScope, $scope, $routeParams, dbdata, sleep, sleepdate){
    //doing header stuff
    //console.log("sleepDataFactory");
    //console.log(sleepDataFactory);
    console.log("in SdviewCtrl");
    console.log(sleep);
    $scope.id = sleep.id;
    console.log("in SdviewCtrl");
    console.log($scope.id);

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

  }]);
