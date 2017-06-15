'use strict';

/**
 * @ngdoc service
 * @id FamilySleep.personaFactory
 * @description
 * # personaFactory
 * Factory in the FamilySleep. Contains each family member's profile pic, target hours, id, and type of family member
 */
 /* format of profiles object
{
  "data": [
  m1: {
    "name": "Rob",
    "targetedHours": 9,
    "profilePic": "images/avatars/momcircle.png",
    "relation": "parent1",
    "id": "mom"
  }, 
  m2: {
    "name": "Pat",
    "targetedHours": 8,
    "profilePic": "images/avatars/dadcircle.png",
    "relation": "parent2",
    "id": "dad"
  }, 
  m3: {
    "name": "JR",
    "targetedHours": 10,
    "profilePic": "images/avatars/girlcircle.png",
    "relation": "child1",
    "id": "boy"

  }, 
  m4: {
    "name": "AJ",
    "targetedHours": 10,
    "profilePic": "images/avatars/boycircle.png",
    "relation": "child2",
    "id": "girl"
  }]
}

 */
angular.module('FamilySleep')
  .factory('personaFactory', ['$http', 'localStorageService', function ($http, localStorageService) {
    // Service logic
    // ...
    //array holding all the profiles, structure is set above
    var old_profiles = []; //make this an object?
    var profiles = {};

    var temp_data; 

    var retrieveProfiles = function() {
      //get file for profiles and update them 
      //console.log("at persona Factory");
        return $http({method:'GET', url: 'data/persona.json' })
        .then(function (response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("in retrieveProfiles");
          temp_data = response.data;
          //console.log(temp_data);
          populate(temp_data);
          //console.log(temp_data);

          //This goes to signup -- moving it there
          /*if(localStorageService.isSupported) {
            console.log('set');
            var result = localStorageService.set('auth', temp_data);
            if(result) {
              console.log('setting worked!-------------------------');
            }
            var value = localStorageService.get('auth');
            if(value != null) {
              console.log('get worked! -------');
              console.log("printing temp_data");
              console.log(value);
            }
          }*/



          //populate(temp_data);
        }, function (response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error('Error' + response.statusText);
        });
    }
    var writeProfilesFromLocalStorage = function() {
      //get file for profiles and update them 
      //console.log("at persona Factory");
        return $http({method:'GET', url: 'data/persona.json' })
        .then(function (response) {
          // this callback will be called asynchronously
          // when the response is available
          temp_data = response.data;
          //console.log(temp_data);
          populate(temp_data);
          //console.log(temp_data);

          //This goes to signup -- moving it there
          /*if(localStorageService.isSupported) {
            console.log('set');
            var result = localStorageService.set('auth', temp_data);
            if(result) {
              console.log('setting worked!-------------------------');
            }
            var value = localStorageService.get('auth');
            if(value != null) {
              console.log('get worked! -------');
              console.log("printing temp_data");
              console.log(value);
            }
          }*/



          //populate(temp_data);
        }, function (response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error('Error' + response.statusText);
        });
    }

    ////TODO
    /*var setProfiles = function (data){

      //angular.forEach()
      profiles = data;
      console.log("in set profiles");
      console.log(profiles);
    }*/

    var setProfile = function (data){
      var id = data.pid;
      profiles[id] = data;
      console.log("in set single profile");
      console.log(profiles);
    }

    var populate = function(temp_data) {

      /*angular.forEach(temp_data.data, function(item) {
        // set a break point here:
        profiles.push(item);
      });*/
      profiles = temp_data;
      console.log("in populate part of the personaFactory");
      console.log(profiles);
    }


    /*var getProfile = function (id) {
      for(var i = 0; i < old_profiles.length; i++) { 
        if(old_profiles[i].id == id) {
          return old_profiles[i];
        }
      }
    }*/

    var getProfile = function(id){
      if(profiles.hasOwnProperty(id)){
        return profiles[id];
      }
    }

    /*var getAllProfiles = function() {
      return old_profiles;
    }*/

    var getAllProfiles = function(){
      return profiles;
    }

    //returns an Array of key values
    var getAllIDs = function(){
      return Object.keys(profiles);
    }
    /*
    var getAllIDs = function(){
      var IDArray = new Array(old_profiles.length);
      for(var i = 0; i < old_profiles.length; i++) {
          IDArray[i] = old_profiles[i].id;
      }
      return IDArray;
    }*/

    var getProfPic = function(id) {
      for(var i = 0; i < old_profiles.length; i++) {
        if(old_profiles[i].id == id) {
          return old_profiles[i].profilePic;
        }
      }
    }

    var getTargetedHours = function(id) {
      for(var i = 0; i < old_profiles.length; i++) {
        if(old_profiles[i].id == id) {
          return old_profiles[i].targetedHours;
        }
      }
    }

    var getTargetedHours = function(id) {
      for(var i = 0; i < old_profiles.length; i++) {
        if(old_profiles[i].id == id) {
          return old_profiles[i].targetedHours;
        }
      }
    }

    var getRelation = function(id) {
      for(var i = 0; i < old_profiles.length; i++) {
        if(old_profiles[i].id == id) {
          return old_profiles[i].relation;
        }
      }
    }

    /*var getName = function(id) {
      for(var i = 0; i < old_profiles.length; i++) {
        console.log(old_profiles[i].relation);
        if(old_profiles[i].relation == id) {
          return old_profiles[i].name;
        }
      }
    }*/


    //returns name as a string
    var getName = function (id){
      if(profiles.hasOwnProperty(id)){
        return profiles.id.name;
      } else {
        console.log("in getName");
        console.log("error property = " + id + "does not exist");
      }
    }
    /*
    var getAllNames = function(){
      var nameArray = new Array(old_profiles.length);
      for(var i = 0; i < old_profiles.length; i++) {
          //console.log(old_profiles[i].name);
          nameArray[i] = old_profiles[i].name;
      }
      //console.log("getAllNames Function");
      //console.log(nameArray);
      return nameArray;
    }*/

    //return object with all the names
    var getAllNames = function(){
      var names = [];
      for (var prop in profiles){
        console.log(prop);
        var name = profiles[prop].name;
        console.log(name);
        //console.log(obj.name);
        names.push(name);
      }
      //console.log("in getAllNames");
      //console.log(name);
      return names;
    }

    var clearAll = function(){
        for (var prop in profiles) {
         if (profiles.hasOwnProperty(prop)) {
          delete profiles[prop];
      }
    }
  }
    //calling retrieveProfiles(); from here needs to go somewhere else

    retrieveProfiles();
    //console.log(old_profiles);
    // Public API here
    return {
      getAllProfiles : getAllProfiles,
      getProfile: getProfile,
      retrieveProfiles: retrieveProfiles,
      getName: getName,
      getAllNames: getAllNames,
      getAllIDs: getAllIDs,
      setProfile: setProfile,
      clearAll: clearAll
    };
  }]);
