'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:FamilydailyviewCtrl
 * @description
 * # FamilydailyviewCtrl
 * Controller of the FamilySleep
 */
 angular.module('FamilySleep')
  .controller('FamilydailyviewCtrl', ['$scope', '$rootScope', 'tractdbdata', 'sleepDataFactory', 'sleepFamDailyDataFactory', 'dateFactory', 'selfReportState',
    function($scope, $rootScope, dbdata, sleepDataFactory, famDailySleep, dateFactory, selfReportState){
      var familyInfo = {
        mom: {
          type: "family",
          sleep: null,
          mood: selfReportState.mom.mood,
          image: selfReportState.mom.image,
          name: "mom",
          pid: "f1m1",
          avatar: "images/avatars/momcircle.png"
        },
        dad: {
          type: "family",
          sleep: null,
          mood: selfReportState.dad.mood,
          image: selfReportState.dad.image,
          name: "dad",
          pid: "f1m2",
          avatar: "images/avatars/dadcircle.png"
        },
        moon: {
          type: "moon",
          name: "moon",
          image: "images/moons/moon7a.png",
        },
        child1: {
          type: "family",
          sleep: null,
          mood: selfReportState.child1.mood,
          image: selfReportState.child1.image,
          name: "child1",
          pid: "f1m3",
          avatar: "images/avatars/girlcircle.png"
        },
        child2: {
          type: "family",
          sleep: null,
          pid: "f1m4",
          mood: selfReportState.child2.mood,
          image: selfReportState.child2.image,
          name: "child2",
          avatar: "images/avatars/boycircle.png"
        }
      };
    $rootScope.menu = [
      {
        title: 'Family Daily View',
        url: '#!/familydailyview',
        tag: 'family-daily-view',
      },
      {
        title: 'Family Weekly View',
        url: '#!/famweeklyview',
        tag: 'family-weekly-view',
      }
    ];

    $rootScope.active = 'family-daily-view';
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
    };

    $scope.$on('date:updated', function() {
      updateData();
    });
    
    var updateData = function() {
      console.log("famDailySleep");
      console.log("in updateData");
      var newDate = dateFactory.getDateString();
      
      console.log(newDate);
      if(dateFactory.getWeekDateString() != []) {
      var promise = dbdata.get_fam_daily_sleep_data(['mom','dad','girl','boy'], newDate);
      promise.then(function(response) {
        
        /*$scope.data = [famDailySleep.sleep_data['mom'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['mom'][newDate].duration/1000/60/60)];
        /****this is a temporary fix this will need to figure out once I fix the view
        $scope.id = famDailySleep.sleep_data['mom'][newDate].pid;
        $scope.data_dad = [famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60)];
        $scope.data_girl = [famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60)];
        $scope.data_boy = [famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60)];*/
        var mom_sleep = [famDailySleep.sleep_data['mom'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['mom'][newDate].duration/1000/60/60)];
        console.log('after query');
        console.log(mom_sleep);
        familyInfo.mom.sleep = mom_sleep;
        familyInfo.dad.sleep = [famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60)];
        familyInfo.child1.sleep = [famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60)];
        familyInfo.child2.sleep = [famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60)];
        /****this is a temporary fix this will need to figure out once I fix the view
        $scope.id = famDailySleep.sleep_data['mom'][newDate].pid;
        $scope.data_dad = [famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['dad'][newDate].duration/1000/60/60)];
        $scope.data_girl = [famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['girl'][newDate].duration/1000/60/60)];
        $scope.data_boy = [famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60, (24-famDailySleep.sleep_data['boy'][newDate].duration/1000/60/60)];*/
        $scope.family = familyInfo;
        console.log('after assignment');
        console.log($scope.family.mom.sleep);
        //console.log($scope.family);
        $scope.labels = ['hours slept','hours awake'];
         /*define colors here*/
         $scope.colors = ['#0000FF', '#E0E0E0'];
         $scope.options = {
              cutoutPercentage: 70
         };
      });
    }else {
        alert('date factory get week didnt populate');
      }
    }
    updateData();

    //given all ids, [id1, id2, id3, id4]
    
  }]);