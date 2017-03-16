'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the FamilySleep
 */
/**angular.module('FamilySleep')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });**/	

angular.module('FamilySleep')
.controller('AboutCtrl', function ($scope) {
		$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
       	$scope.data = [300, 500, 100];
});
