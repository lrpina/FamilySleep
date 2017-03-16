'use strict';

/**
 * @ngdoc directive
 * @name FamilySleep.directive:recorder
 * @description
 * # recorder
 */
angular.module('FamilySleep')
  .directive('recorder', function () {
    return {
      // restrict: 'EA', //E = element, A = attribute, C = class, M = comment
      // scope: {
      //     //@ reads the attribute value, = provides two-way binding, & works with functions
      //     title: '@'         },

      templateUrl: '../../views/recorder.html',
      controller: function($scope, $window, $http) {
        $scope.instruction = "Click to record a Message!"

        navigator.getUserMedia(
          {audio:true, video:false},
          function(stream) {
            $window.recordRTC = RecordRTC(stream, {
              recorderType: StereoAudioRecorder
            });
          },
          function(err) {
            console.log("problem");
          }
        )

        $scope.onRecord = function() {
          $window.recordRTC.startRecording();
        }

        $scope.onStopRecord =  function(audioUrl) {

          $window.recordRTC.stopRecording (function(audioUrl) {
            var recordedBlob = $window.recordRTC.getBlob();
            $scope.recordedBlob = recordedBlob;
            // console.log(recordedBlob);
            // //recordRTC.getDataURL()
            // var formData = new FormData();
            // console.log(formData);
            // formData.append('test', recordedBlob);
            // $http.post('http://localhost:3000', formData, {
            //   transformRequest: angular.identity,
            //   headers: {'Content-Type': undefined}
            // })
            // .then(function(result) {
            //   console.log("done")
            // })

          });
        }

        $scope.onSendRecord = function() {
          var recordedBlob = $scope.recordedBlob;
          console.log(recordedBlob);
          //recordRTC.getDataURL()
          var formData = new FormData();
          console.log(formData);
          formData.append('test', recordedBlob);
          $http.post('http://localhost:3000', formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
          })
          .then(function(result) {
            console.log("done")
          })
        }
      }, //Embed a custom controller in the directive
      link: function ($scope, element, attrs) { } //DOM manipulation
    }
  });
