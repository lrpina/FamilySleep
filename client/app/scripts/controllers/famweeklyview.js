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
  	'$scope', '$rootScope', 'tractdbdata', 'sleepFamWeeklyDataFactory', function(
  		$scope, $rootScope, dbdata, famWeeklySleep) {
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

    var promise = dbdata.get_fam_weekly_sleep_data(['mom','dad','girl','boy'],['2016-07-23', '2016-07-24', '2016-07-25','2016-07-26', '2016-07-27', '2016-07-28', '2016-07-29']);
    promise.then(function(response) {
    	console.log('in family weekly view');
      	console.log(famWeeklySleep.sleep_data);
  	});

}])
