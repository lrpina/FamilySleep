'use strict';

/**
 * @ngdoc function
 * @name FamilySleep.controller:SingleweeklyviewCtrl
 * @description
 * # SingleweeklyviewCtrl
 * Controller of the FamilySleep
 */


angular.module('FamilySleep')
  .controller('SingleweeklyviewCtrl', [
	'$scope', 'sleepWeeklyDataFactory', 'tractdbdata',  '$rootScope', 'dateFactory', '$routeParams', 'personaFactory', function (
		$scope, singleWeeklySleep, dbdata, $rootScope, dateFactory, $routeParams, personaFactory) {

	
	if($routeParams.id=='child1'){
      $scope.id = 'boy';
    } else if ($routeParams.id=='child2')
    {
      $scope.id = 'girl';
    } else {
    	$scope.id = $routeParams.id;
    }
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

	$rootScope.active = 'individual-weekly-view';
	$rootScope.updateActive = function (item) {
	  $rootScope.active = item;
	};
	console.log("in SingleweeklyviewCtrl");

	$scope.$on('date:updated', function() {
    updateData();
  });

	var updateData = function () {
		if(dateFactory.getWeekDateString() != []) {
			var promise = dbdata.get_single_weekly_sleep_data($scope.id, dateFactory.getWeekDateString());
			
			promise.then(function(response) {
				console.log("in SingleweeklyviewCtrl");
				//console.log(singleWeeklySleep);
				var rawData = singleWeeklySleep.sleep_data[$scope.id];
				$scope.data = [];

				angular.forEach(rawData, function(item) {
					var day = {
						data: [
						  item.minuteData.one, 
						  item.minuteData.two,
						  item.minuteData.three,
						],
						duration:item.duration,
						labels : item.labels,
						date: item.dateOfSleep,
						mood: item.mood
					}
					//console.log(day.duration);
					$scope.data.push(day);
				});
				
				$scope.options = {
					scales: {
					  xAxes: [{
						display: false
					  }],
					  yAxes: [{
						display: false
					  }]	
					},
					hover: { //to turn off hover
						mode: null
					},
					tooltips:{ //to turn off hover
						enabled: false
					},
					legend: {
					  display: false
					}
				};

				$scope.options_first = {
					scales: {
					  xAxes: [{
						stacked: true,
						categoryPercentage: 1,
						barPercentage: 1,
						type: 'time',
						position: 'top',
						gridLines: {
						  display: false, // Set to false here => xAxis labels displayed out of canvas
						  offsetGridLines: true,
						},
						ticks: {
						  display: true,
						  fontSize: 20,
						  fontColor: 'white',
						  fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded',
						  autoSkip: true,
						  maxTicksLimit: 20
						},
						time: {
						  displayFormats: {
							minute: 'HH:mm a'
						  },
						  tooltipFormat: 'YYYY-MM-DD HH:mm a',
						  unit: "minute",
						  unitStepSize: 1,
						},
						showXLabel: 60
					  }],
					  yAxes: [{
						display: false
					  }]
					},
					hover: { //to turn off hover
						mode: null
					},
					tooltips:{ //to turn off hover
						enabled: false
					},
					legend: {
					  display: false
					}
				};

				$scope.options_last = {
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
						  fontSize: 20,
						  fontColor: 'white',
						  fontFamily: 'HelveticaNeue, HelveticaNeue, Roboto, ArialRounded',
						  autoSkip: true,
						  maxTicksLimit: 20
						},
						time: {
						  displayFormats: {
							minute: 'HH:mm a'
						  },
						  tooltipFormat: 'YYYY-MM-DD HH:mm a',
						  unit: "minute",
						  unitStepSize: 1,
						},
						showXLabel: 60
					  }],
					  yAxes: [{
						display: false
					  }]
					},
					hover: { //to turn off hover
						mode: null
					},
					tooltips:{ //to turn off hover
						enabled: false
					},
					legend: {
					  display: false
					}
				};
				$scope.colors = [{
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
				},{
					backgroundColor: "#8CA2AA",
					borderColor: "#8CA2AA",
					pointBackgroundColor: "#8CA2AA",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "#8CA2AA",
				}];

				$scope.series = ["Sleep", "Movement", "Restless"];
			});
		} else {
	    alert('date factory get week didnt populate');
	  }
	}
	updateData();
}]);
