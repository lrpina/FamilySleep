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
  	 //sconsole.log("sleep in donut");
  	 console.log(sleepDataFactory);
  	 //$scope.data = sleepDataFactory.data;
  	 //$scope.data = [300, 500, 100];
  	 /*the numbers are divided as they come there's not actual unit for the ring*/
  	 $scope.data = [500, 1000];
  	 console.log("from DoughnutCtrl")
  	 console.log(sleepDataFactory);
  	 $scope.labels = sleepDataFactory.labels; //["Download Sales", "In-Store Sales", "Mail-Order Sales"]; 
  	 /*define colors here*/
     $scope.colors = ['#0000FF', '#E0E0E0'];
     $scope.options = {
          cutoutPercentage: 70
     };
  });
