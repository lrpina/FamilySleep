'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamweeklyviewCtrl
 * @description
 * # FamweeklyviewCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('FamweeklyviewCtrl', [
  	'$scope', '$rootScope', 'tractdbdata', 'sleepFamWeeklyDataFactory', 'dateFactory', function(
  		$scope, $rootScope, dbdata, famWeeklySleep, dateFactory) {
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
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
    };

    $scope.$on('date:updated', function() {
      updateData();
    });

    var updateData = function () {
      console.log(dateFactory.getWeekDateString());
      if(dateFactory.getWeekDateString() != []) {
        var promise = dbdata.get_fam_weekly_sleep_data(['mom','dad','girl','boy'], dateFactory.getWeekDateString());
        promise.then(function(response) {
        	console.log('in family weekly view');
          console.log(famWeeklySleep);
      	});
      } else {
        alert('date factory get week didnt populate');
      }
    }

    updateData();
}]);
