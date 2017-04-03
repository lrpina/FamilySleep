'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:DoughnutCtrl
 * @description
 * # DoughnutCtrl
 * Controller of the FamilySleep
 */
 /* In controlllers, factories, like sleepDataFactory are called in the argument of the function
 NOT as injecting a dependency
 */
angular.module('FamilySleep')
  .controller('DoughnutCtrl', function ($scope, sleepDataFactory) {
  	 console.log("sleep in donut");
  	 console.log(sleepDataFactory);
  	 $scope.data = sleepDataFactory.data;
  	 //$scope.data = [300, 500, 100];
  	 console.log("from DoughnutCtrl")
  	 console.log(sleepDataFactory);
  	 $scope.labels = sleepDataFactory.labels; //["Download Sales", "In-Store Sales", "Mail-Order Sales"]; 
     //$scope.colors <array>
     $scope.options = {
          cutoutPercentage: 70
     };
  });
