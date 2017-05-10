'use strict';

/**
 * @ngdoc service
 * @name FamilySleep.dateFactory
 * @description
 * # dateFactory
 * Factory in the FamilySleep.
 */
/*angular.module('FamilySleep')
  .factory('dateFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

*/

angular.module('FamilySleep')
  .factory('dateFactory', function ($rootScope) {
    //I think we might want get/sets here

    var date = new Date();

    var updateDate = function(newDate) {
      date = newDate;
      console.log('in dateFactory');
      console.log(date);
      $rootScope.$broadcast('user:updated');
    };

    var getDate = function() {
      return date;
    };

    return{
      updateDate : updateDate,
      getDate : getDate,
      date: date,
    };
  });

