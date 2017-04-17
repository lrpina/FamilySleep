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
  .factory('tractdbdata', ['$http', 'sleepDataFactory', function ($http, sleep) { //I want to know if I can use a different name when it's injecteds  
    // Service logic
    // ...
    /**model for now.   
    */
    var temp_data;
    //right now this is just queuering from the file we have locally. But this is where we'll need to query the DB for particular dates
    function get_sleep(){
      
      $http({method:'GET', url: 'data/user_data_mom.json' })
      .then(function (response) {
    // this callback will be called asynchronously
      // when the response is available
        temp_data = response.data;
        //console.log(temp_data);
      }, function (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        console.error('Error' + response.statusText);
      });
      formatdata();
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
    function formatdata(data){ //I think I have access to temp_data here don't need to put it as an argument
      //sleepDataFactory.minutesAsleep = temp_data.sleep[0].minutesAsleep;
      //sleepDataFactory.wakeupTime = temp_data.sleep[0].minuteData[temp_data.sleep[0].minuteData.length-1].dateTime;
      //sleepDataFactory.awakeCount = temp_data.sleep[0].awakeCount;
      //sleepDataFactory.sleeprecord = temp_data[0].summary.totalSleepRecords;
      //console.log("sleep record" + sleepDataFactory.sleeprecord);
      //sleepDataFactory.sleeptime -- time that went to sleep
      //sleepDataFactory.data  -- Array: each element is the number of hours slept
      /********** can't access here *****/ 
      var a = [300, 500, 100];
      sleep.data = a;
      console.log("inside formatdata -- sleep data -- ");
      console.log(sleep.data);
      //sleepdatafactor.labels -- Array: each element is a lebel that corresponds to the type of sleep and links to the element in .data awway
      sleep.labels =["Hours Slept", "Hours not Slept"];
      console.log("inside formatdata -- labels -- ");
      console.log(sleep.labels);
      sleep.id = "mom";
      console.log("sleepDataFactory as sleep");
      //console.log(sleep);
      //console.log("id");
      //console.log(sleep.id);
    }

    // Public API here
    //return dbfactory;
    return {
      get_sleep: get_sleep
    };
  }]);
