'use strict';

/**
 * @ngdoc service
 * @name FamilySleep.viewLogs
 * @description
 * # viewLogs
 * Factory in the FamilySleep.
 This will keep track of logs across the app
 */
angular.module('FamilySleep')
  .factory('viewLogs', function () {
    
    /* this variable has the following format
    {pname: "name of page", date: "date when visited"}
    */
    var pLogs;

    /*
    takes argument name of page name and date to log into factory
    pushes back data to server
    */
    var logPage = function (pName, date){

    };
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
