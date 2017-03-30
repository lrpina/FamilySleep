'use strict';

/**
 * @ngdoc service
 * @name FamilySleep.sleepDataFactory
 * @description
 * # sleepDataFactory
 * Factory in the FamilySleep.
 */

 /* All controllers that are visualizing data need to have access to this factory singleton
 */
 /* for controllers using this data should check if there's data in it or not.
 */
angular.module('FamilySleep')
  .factory('sleepDataFactory', function () {
    // Service logic
    //factory = {};
    var temp = {};
    //var sdata = {};
    //sdata.data = {};
    //sdata.labels = {};

    /*temp.getSdata(){
      return sdata;
    }*/


    //I can't get it to work if I don't initialize all the properties here.
    //temp.data = [300, 500, 100];
      //sleepdatafactor.labels -- Array: each element is a lebel that corresponds to the type of sleep and links to the element in .data awway
    //temp.labels =["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    // Public API here
    /*returning an empty object such that I can add stuff to it laster as I wish?*/
    /*not sure if I actually have to create a variable and then return the empty variable*/
    return temp;
    /*return {
      sleepdata
    };*/
  });
