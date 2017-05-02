'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SdviewCtrl
 * @description
 * # SdviewCtrl
 * Controller of the FamilySleep
 */
/**angular.module('FamilySleep')
  .controller('SdviewCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
**/

 angular.module('FamilySleep')
 	.controller('SdviewCtrl', [
    '$rootScope', '$scope', 'sleepDataFactory', '$routeParams', 'tractdbdata', function(
      $rootScope, $scope, sleepDataFactory, $routeParams, dbdata) {
    $scope.id = sleepDataFactory.id;

    console.log("in SdviewCtrl");

    $rootScope.menu = [
      {
          title: 'Back',
          url: '#!/familydailyview',
          tag: 'family-daily-view'
      },
      {
          title: 'Individual Daily View',
          url: '#!/sdview/' + $scope.id,
          tag: 'individual-daily-view'
      },
      {
          title: 'Individual Weekly View',
          url: '#!/singleweeklyview/' + $scope.id,
          tag: 'individual-weekly-view'
      }
    ];
    $rootScope.active = 'individual-daily-view';
    $rootScope.updateActive = function (item) {
      $rootScope.active = item;
    };
    var promise = dbdata.get_single_daily_sleep('mom','2016-07-23');
    
    //have to wait for dbdate to populate 
    promise.then(function(response) {
      console.log('single daily');
      console.log(sleepDataFactory);
      $scope.options = {
        scales: {
          xAxes: [{
            stacked: true,
            categoryPercentage: 1,
            barPercentage: 1,
            type: 'time',
            gridLines: {
              display: false, // Set to false here => xAxis labels displayed out of canvas
              offsetGridLines: true,
            },
            ticks: {
              display: true,
              fontSize: 10,
              fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded',
              autoSkip: true,
              maxTicksLimit: 20
            },
            time: {
              displayFormats: {
                minute: 'HH:mm a'
              },
              tooltipFormat: 'HH:mm a',
              unit: "minute",
              unitStepSize: 1,
            },
            showXLabel: 60
          }],
          yAxes: [{
            stacked: true, //scaleLabel: "<%=value%>",
            ticks: {
              fontSize: 12,
              fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded'
            },
            gridLines: {
              display: false, // Set to false here => xAxis labels displayed out of canvas
            },
          }]
        },
        legend: {
          display: true
        }
      };

      $scope.data = [
          sleepDataFactory.sleep_data['mom']['2016-07-23'].minuteData.one, 
          sleepDataFactory.sleep_data['mom']['2016-07-23'].minuteData.two,
          sleepDataFactory.sleep_data['mom']['2016-07-23'].minuteData.three,
      ];

      $scope.labels = sleepDataFactory.sleep_data['mom']['2016-07-23'].labels;

      $scope.colors = [{
          backgroundColor: "#8CA2AA",
          borderColor: "#8CA2AA",
          pointBackgroundColor: "#8CA2AA",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#8CA2AA",
        }, {
          backgroundColor: "#551A8B",
          borderColor: "#551A8B",
          pointBackgroundColor: "#6B8FBD",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#6B8FBD",
        },
        {
          backgroundColor: "#03E2E7",
          borderColor: "#03E2E7",
          pointBackgroundColor: "#6B8FBD",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#6B8FBD",
        },
      ];

      $scope.series = ["Sleep", "Movement", "Restless"];

    });
  }]);
