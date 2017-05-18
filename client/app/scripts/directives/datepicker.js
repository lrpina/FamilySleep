'use strict';

/**
 * @ngdoc directive
 * @name FamilySleep.directive:datePicker
 * @description
 * # datePicker
 */
angular.module('FamilySleep')
  .directive('datePicker', function () {
    return {
      templateUrl: '../../views/datePicker.html',
      //restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the datePicker directive');
      // },
      controller: ['dateFactory', '$scope', '$route', 
       function (dateFactory, $scope, $route) {
		  	$scope.myDate = dateFactory.getDate().toDate();
		  	console.log("at datepickerjs")
		  	console.log($scope.myDate);
		  	$scope.isOpen = false;
		  	$scope.pickNewDate = function () {
		  		dateFactory.updateDate($scope.myDate);
		  		console.log($route.current.controller);
		  	};
        $scope.today = function () {
          $scope.myDate = new Date();
        };
        $scope.yesterday = function () {
          $scope.myDate = moment(new Date()).subtract(1, 'days').toDate();
        };
        $scope.tomorrow = function () {
          $scope.myDate = moment(new Date()).add(1, 'days').toDate();
        };
		  }],
    };
  });
