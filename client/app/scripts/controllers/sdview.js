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
//need to figure how to not make the colors transparant
/* looks like the data needs to be formatted to go as expected by stackedbarjs
this is where I configure the variable that will be available to use by the chartjs controller
*/
 angular.module('FamilySleep')
 	.controller('SdviewCtrl', function($scope, $http){
		$http({method:'GET', url: 'data/sleep_data.json' })
		.then(function (response) {
		// this callback will be called asynchronously
  		// when the response is available
  			$scope.sleep_data = response.data;
  			//console.log($scope.sleep_data);
  		}, function (response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
    		console.error('Error' + response.statusText);
  		});
  });

