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
    ['$http', '$q', 'sleepDataFactory', 'sleepFamDailyDataFactory', 'sleepWeeklyDataFactory', 'sleepFamWeeklyDataFactory',
    function ($http, $q, singleDailySleep, famDailySleep, singleWeeklySleep, famWeeklySleep) { //I want to know if I can use a different name when it's injecteds  


    var temp_data;
    var sleep_data;

    function get_single_weekly_sleep_data(factory, id, dates) {
      //use existing function, such as getting data for all fam memeber for one particular day,
      //then repeat that 7 times to update factory
      factory.sleep_data = {};
      factory.ids = [id];
      var promises = [];
      angular.forEach(dates, function(date) {
        factory.sleep_data[id] = {};
        var promise = get_data(factory, id, date);
        promises.push(promise);
      });
      return $q.all(promises);
    }

    function get_fam_weekly_sleep_data(factory, ids, dates) {
      //call loagsingledaily 7 times for different dates and update factory
      factory.sleep_data = {};
      factory.ids = [];
      var promises = [];
      angular.forEach(ids, function(id) {
        factory.ids.push(id);
        angular.forEach(dates, function(date) {
          factory.sleep_data[id] = {};
          var promise = get_data(factory, id, date);
          promises.push(promise);
        });
      });
      return $q.all(promises);
    }

    function get_fam_daily_sleep_data(factory, ids, date) {
      factory.sleep_data = {};
      factory.ids = [];
      var promises = [];
      angular.forEach(ids, function(id) {
        factory.ids.push(id);
        factory.sleep_data[id] = {};
        var promise = get_data(factory, id, date);
        promises.push(promise);
      });
      return $q.all(promises);
    }

<<<<<<< HEAD
    function get_single_daily_sleep_data(factory, id, date) {
      factory.sleep_data = {};
      factory.sleep_data[id] = {};
      factory.ids = [id];
      return get_data(factory, id, date);
    }

    function get_data(factory, id, date) {   
      //right now, it's just for one person. But ideadly, we can to do all ids at the same time and update the sleep_data
      return $http({method:'GET', url: 'data/'+ id + '_' + date + '.json'})  //data/'+ id +'.json'
=======
    function load_fam_daily_sleep_data(ids, date) {
      
      //right now, it's just for one person. But ideadly, we can to do all ids at the same time and update the sleep_data
      //'data/user_data_mom.json' })
      return $http({method:'GET', url: 'data/user_data_mom.json' }) 
>>>>>>> 147698400ad7105c15cb16a6cdbbb8f5aed0daed
      .then(function (response) {
        // this callback will be called asynchronously
        // when the response is available
        temp_data = response.data;
<<<<<<< HEAD
        console.log(temp_data);
        return format_data(factory, id, date, temp_data);     
=======
        //console.log("in load_fam_daily_sleep_data");
        //console.log(temp_data);
        return format_data(temp_data);     
>>>>>>> 147698400ad7105c15cb16a6cdbbb8f5aed0daed
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error('Retrieval Error' + response.statusText);
      })
      .then(function (response) {
        console.log("format sucess");
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error('Format Error' + response.statusText);
      });
    }

    //helper function
    function newDate(time, min) {
      return moment(time).add(min, 'm');
    }
<<<<<<< HEAD

    var format_data = function (factory, id, date, rawData) { //I think I have access to temp_data here don't need to put it as an argument
      return $q(function(resolve, reject) {
        if (temp_data.sleep[0] != null) {
          // var a = [300, 500, 100];
          // factory.data = a;
          // console.log("inside formatdata -- sleep data -- ");
          // console.log(factory.data);
          // //sleepdatafactor.labels -- Array: each element is a lebel that corresponds to the type of sleep and links to the element in .data awway
          // factory.labels =["Hours Slept", "Hours not Slept"];
          console.log("inside formatdata -- labels -- ");
          console.log(factory.sleep_data);
          // console.log(factory.labels);
=======
    //using rawData as arugment but then never referencing, instead just using
    //temp_data
    var format_data = function (rawData) { //I think I have access to temp_data here don't need to put it as an argument
      return $q(function(resolve, reject) {
        if (temp_data.sleep[0] != null) {
          var a = [300, 500, 100];
          sleep.data = a;
          //console.log("inside formatdata -- sleep data -- ");
          //console.log(sleep.data);
          //sleepdatafactor.labels -- Array: each element is a lebel that corresponds to the type of sleep and links to the element in .data awway
          //sleep.labels =["Hours Slept", "Hours not Slept"];
          //console.log("inside formatdata -- labels -- ");
          //console.log(sleep.labels);
          console.log("id in tractdbdata from temp_data");
          sleep.id = temp_data.id;
          console.log(sleep.id);
>>>>>>> 147698400ad7105c15cb16a6cdbbb8f5aed0daed
          var sleepData = {
            "dateOfSleep": temp_data.sleep[0].dateOfSleep,
            "duration": temp_data.sleep[0].duration,
            "mood": "",
            "moodAddedBy" : "",
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
          // console.log("done with formatting data before");
          // console.log(factory.sleep_data);
          //console.log(factory.sleep_data[id]);
          // add id as label hereb
          factory.sleep_data[id][date] = sleepData;
         // console.log(factory.sleep_data);
          //sleep_data[id] = sleepData;
          //sleep.sleep_data_fact = sleep_data
         // console.log("done with formatting data");
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
      },
      get_single_weekly_sleep_data: function(id, dates) {
        return get_single_weekly_sleep_data(singleWeeklySleep, id, dates)
      }, 
      get_fam_weekly_sleep_data: function(ids, dates) {
        return get_fam_weekly_sleep_data(famWeeklySleep, ids, dates)
      }
    };
  }]);
