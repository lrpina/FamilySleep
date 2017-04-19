'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamweeklyviewCtrl
 * @description
 * # FamweeklyviewCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('FamweeklyviewCtrl', ['$scope', '$rootScope', 'tractdbdata', function($scope, $rootScope, dbdata) {
	$rootScope.menu = [
		{
		    title: 'Family Daily View',
		    url: '#!/familydailyview',
		    tag: 'family-daily-view',
		},
		{
		    title: 'Family Weekly View',
		    url: '#!/famweeklyview',
		    tag: 'family-weekly-view',

		}
    ];
    
    $rootScope.active = 'family-weekly-view';
    //$rootScope.active = 'Back';
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
      //alert(item);
    };
  }]);
