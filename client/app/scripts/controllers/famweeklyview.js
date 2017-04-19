'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamweeklyviewCtrl
 * @description
 * # FamweeklyviewCtrl
 * Controller of the FamilySleep
 */
angular.module('FamilySleep')
  .controller('FamweeklyviewCtrl', ['tractdbdata', 'sleepDataFactory', 'dateFactory', function ($scope, dbdata, sleep, sleepdate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
