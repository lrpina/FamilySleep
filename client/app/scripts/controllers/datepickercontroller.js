'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:DatepickercontrollerCtrl
 * @description
 * # DatepickercontrollerCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('DatepickercontrollerCtrl', function (dateFactory) {
  	this.myDate = new Date();
  	this.isOpen = false;
  });
