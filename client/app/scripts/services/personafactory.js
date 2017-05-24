'use strict';

/**
 * @ngdoc service
 * @name FamilySleep.personaFactory
 * @description
 * # personaFactory
 * Factory in the FamilySleep. Contains each family memebr's profile pic, target hours, name, and type of family member
 */
angular.module('FamilySleep')
  .factory('personaFactory', ['$http', function ($http) {
    // Service logic
    // ...

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
          populate(temp_data);
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

    var getProfile = function (name) {
      for(var i = 0; i < profiles.length(); i++) {
        if(profiles[i].name == name) {
          return profiles[i];
        }
      }
    }

    var getAllProfiles = function() {
      return profiles;
    }

    var getProfPic = function(name) {
      for(var i = 0; i < profiles.length(); i++) {
        if(profiles[i].name == name) {
          return profiles[i].profilePic;
        }
      }
    }

    var getTargetedHours = function(name) {
      for(var i = 0; i < profiles.length(); i++) {
        if(profiles[i].name == name) {
          return profiles[i].targetedHours;
        }
      }
    }

    var getRelation = function(name) {
      for(var i = 0; i < profiles.length(); i++) {
        if(profiles[i].name == name) {
          return profiles[i].relation;
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
      retrieveProfiles: retrieveProfiles

    };
  }]);
