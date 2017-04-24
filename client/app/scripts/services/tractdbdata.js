'use strict';

/**
 * @ngdoc service
 * @name FamilySleep.tractdbdata
 * @description
 * # tractdbdata
 * Factory in the FamilySleep.
 */
 /* This is a factory that is doing GET to call data right now from a file under data/
 */
 /* Since it's a factory, it sounds like Factories need to make other factories as dependencies. 
 See sleepDataFactory.
 */
 /*this file will expand as it will have to query data based on data etc. I also think there should be something maintened locally 
 so preserve state? and not have to query all the time*/
 
 /*Another approach to modeling factories
 https://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service
 */


/* TODO: need to figure format data such that sleepDataFactory contains data for all family members 
*/
/* Need to formatdata such that we can call ng-repeat on sleepDataFactory on the on the viewers 
    sleepDataFactory is an Array, each element is a family member.
*/
angular.module('FamilySleep')
  .factory('tractdbdata', 
    ['$http', 'sleepDataFactory', '$q', 'sleepFamDailyDataFactory', function ($http, singleDailySleep, $q, famDailySleep) { //I want to know if I can use a different name when it's injecteds  
    //['$http', 'sleepDataFactory', '$q', function ($http, singleDailySleep, $q) { 
    // Service logic

    var temp_data;
    var sleep_data;
    //right now this is just queuering from the file we have locally. But this is where we'll need to query the DB for particular dates
    function get_sleep() {
      
      $http({method:'GET', url: 'data/user_data_mom.json' })
      .then(function (response) {
    // this callback will be called asynchronously
      // when the response is available
        temp_data = response.data;
        console.log(temp_data);
        formatdata(temp_data);
      }, function (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        console.error('Error' + response.statusText);
      });
      //formatdata();
    };

    function get_single_weekly_sleep_data(id, dates) {
      //use existing function, such as getting data for all fam memeber for one particular day,
      //then repeat that 7 times to update factory
    }

    function get_fam_weekly_sleep_data(ids, dates) {
      //call loagsingledaily 7 times for different dates and update factory
    }

    function get_fam_daily_sleep_data(factory, ids, date) {
      factory.sleep_data = {};
      var promises = [];
      angular.forEach(ids, function(id) {
        var promise = get_single_daily_sleep_data(factory, id, date);
        promises.push(promise);
      });
      return $q.all(promises);
    }

    function get_single_daily_sleep_data(factory, id, date) {
      factory.sleep_data = {};
      
      //right now, it's just for one person. But ideadly, we can to do all ids at the same time and update the sleep_data

      return $http({method:'GET', url: 'data/sleep_data_'+ id +'.json'})  //data/'+ id +'.json'
      .then(function (response) {
        // this callback will be called asynchronously
        // when the response is available
        temp_data = response.data;
        console.log(temp_data);
        return format_data(factory, id, temp_data);     
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error('Retrieval Error' + response.statusText);
      })
      .then(function (response) {
        console.log("formate sucess");
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error('Format Error' + response.statusText);
      });
    }
    /*
    dbfactory.get_sleep = function(){
      $http({method:'GET', url: 'data/sleep_data.json' })
      .then(function (response) {
    // this callback will be called asynchronously
      // when the response is available
        temp_data = response.data;
        //console.log($scope.sleep_data);
      }, function (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        console.error('Error' + response.statusText);
      });
      formatdata(temp_data);
    };*/
    /* I could do the formatting of the data here that then is used by all the the sleepdata factory to share across the views
    */
    /* IMPORTANT need to check if mainSleep == 1 in data coming from DB because fitbit tries to capture naps  
    */
    //helper function to format the data to be used in the visualization
    /* Data Structure to use for Chartjs which will be put into sleepDataFactory
    can have multiple data sets, just need to know to call which in the viewer

    Each element has:

    data Array<Number> // will need to add one value that represents that empty unslept hours
    label == String
    options
    */
    /* Example of how to acccess json object
        <p> hours slept (need to convert to hours): {{sleep_data.sleep[0].minutesAsleep}}</p>
    <p> wakeup time: {{sleep_data.sleep[0].minuteData[sleep_data.sleep[0].minuteData.length-1].dateTime}}
    <p> Awake count: {{sleep_data.sleep[0].awakeCount}}</p>
    */

    //helper function
    function newDate(time, min) {
      return moment(time).add(min, 'm');
    }

    var format_data = function (factory, id, rawData) { //I think I have access to temp_data here don't need to put it as an argument
      return $q(function(resolve, reject) {
        if (temp_data.sleep[0] != null) {
          var a = [300, 500, 100];
          factory.data = a;
          console.log("inside formatdata -- sleep data -- ");
          console.log(factory.data);
          //sleepdatafactor.labels -- Array: each element is a lebel that corresponds to the type of sleep and links to the element in .data awway
          factory.labels =["Hours Slept", "Hours not Slept"];
          console.log("inside formatdata -- labels -- ");
          console.log(factory.labels);
          var sleepData = {
            "awakeCount": temp_data.sleep[0].awakeCount,
            "awakeDuration": temp_data.sleep[0].awakeDuration,
            "awakeningsCount": temp_data.sleep[0].awakeningsCount,
            "dateOfSleep": temp_data.sleep[0].dateOfSleep,
            "duration": temp_data.sleep[0].duration,
            "efficiency": temp_data.sleep[0].efficiency,
            "isMainSleep": temp_data.sleep[0].isMainSleep,
            "id": temp_data.sleep[0].logId,
            "mood": "",
            "name": temp_data.sleep[0].logId,
            "minuteData": {
              "one" : [],
              "two" : [],
              "three" : [],
            },
            "startTime": moment(temp_data.sleep[0].startTime),
            "endTime": newDate(temp_data.sleep[0].startTime, temp_data.sleep[0].timeInBed),
            "labels": [moment(temp_data.sleep[0].startTime).subtract(1,'m')],
          };

          for(var i = 0; i < temp_data.sleep[0].minuteData.length; i++) {
            var time = temp_data.sleep[0].minuteData[i];
            if(time.value == 1) {
              sleepData.minuteData.one.push(3);
              sleepData.minuteData.two.push(0);
              sleepData.minuteData.three.push(0);
            } else if(time.value == 2) {
              sleepData.minuteData.one.push(0);
              sleepData.minuteData.two.push(2);
              sleepData.minuteData.three.push(0);
            } else {
              sleepData.minuteData.one.push(0);
              sleepData.minuteData.two.push(0);
              sleepData.minuteData.three.push(4);
            }
            sleepData.labels.push(newDate(temp_data.sleep[0].startTime, i));
          }
          console.log("done with formatting data before");
          // add id as label hereb
          
          factory.sleep_data[id] = sleepData;
          console.log(factory.sleep_data);
          //sleep_data[id] = sleepData;
          //sleep.sleep_data_fact = sleep_data
          console.log("done with formatting data");
          resolve("sucess");
        } else {
          reject("fail");
        }
      });
    }

    // Public API here
    //return dbfactory;
    return {
      get_single_daily_sleep: function(id, date) {
        return get_single_daily_sleep_data(singleDailySleep, id, date)
      },
      get_fam_daily_sleep_data: function(ids, date) {
        return get_fam_daily_sleep_data(famDailySleep, ids, date)
      }
    };
  }]);
