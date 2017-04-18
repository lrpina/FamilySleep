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
 	.controller('SdviewCtrl', function($rootScope, $scope, sleepDataFactory, $routeParams){
    //doing header stuff
    //console.log("sleepDataFactory");
    //console.log(sleepDataFactory);
    $scope.id = sleepDataFactory.id;
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
    /*
    var controller = this;
    //getting data for particular family member
    $http({method: 'GET', url: '/data/user_data_' + $routeParams.id + '.json'})
    .sucess(function(data))
    */
  });
