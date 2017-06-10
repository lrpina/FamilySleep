'use strict';

/**
 * @ngdoc service
 * @id FamilySleep.personaFactory
 * @description
 * # personaFactory
 * Factory in the FamilySleep. Contains each family memebr's profile pic, target hours, id, and type of family member
 */
angular.module('FamilySleep')
  .factory('personaFactory', ['$http', 'localStorageService', function ($http, localStorageService) {
    // Service logic
    // ...

    // use object hasOwnproperty

    var profiles = [];

    var temp_data; 

    var retrieveProfiles = function() {
      //get file for profiles and update them 
      console.log("at persona Factory");
        return $http({method:'GET', url: 'data/persona.json' })
        .then(function (response) {
          // this callback will be called asynchronously
          // when the response is available
          temp_data = response.data;
          console.log(temp_data);

          if(localStorageService.isSupported) {
            console.log('set');
            var result = localStorageService.set('auth', temp_data);
            if(result) {
              console.log('setting worked!-------------------------');
            }
            var value = localStorageService.get('auth');
            if(value != null) {
              console.log('get worked! -------');
              console.log(value);
            }
          }



          //populate(temp_data);
        }, function (response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error('Error' + response.statusText);
        });
    }

    var populate = function(temp_data) {
      profiles = temp_data.data;
      console.log(profiles);
    }

    retrieveProfiles();

    var getProfile = function (id) {
      for(var i = 0; i < profiles.length; i++) {
        if(profiles[i].id == id) {
          return profiles[i];
        }
      }
    }

    var getAllProfiles = function() {
      return profiles;
    }

    var getProfPic = function(id) {
      for(var i = 0; i < profiles.length; i++) {
        if(profiles[i].id == id) {
          return profiles[i].profilePic;
        }
      }
    }

    var getTargetedHours = function(id) {
      for(var i = 0; i < profiles.length; i++) {
        if(profiles[i].id == id) {
          return profiles[i].targetedHours;
        }
      }
    }

    var getTargetedHours = function(id) {
      for(var i = 0; i < profiles.length; i++) {
        if(profiles[i].id == id) {
          return profiles[i].targetedHours;
        }
      }
    }

    var getRelation = function(id) {
      for(var i = 0; i < profiles.length; i++) {
        if(profiles[i].id == id) {
          return profiles[i].relation;
        }
      }
    }

    var getName = function(id) {
      for(var i = 0; i < profiles.length; i++) {
        console.log(profiles[i].relation);
        if(profiles[i].relation == id) {
          return profiles[i].name;
        }
      }
    }

    // Public API here
    return {
      getProfPic: getProfPic,
      getTargetedHours: getTargetedHours,
      getRelation : getRelation,
      getAllProfiles : getAllProfiles,
      getProfile: getProfile,
      retrieveProfiles: retrieveProfiles,
      getName: getName

    };
  }]);
