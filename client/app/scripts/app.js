'use strict';

/**
 * @ngdoc overview
 * @name FamilySleep
 * @description
 * # FamilySleep
 *
 * Main module of the application.
 */
angular
  .module('FamilySleep', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'chart.js' //I don't know if I need to add other things here might happen when I start talking to trackdb--couch
  ])
  .config(function ($routeProvider, $locationProvider) {
    //can't get the removing hash to work
    //$locationProvider.html5Mode(true); //escaping hashtags all over the place

    $routeProvider
      .when('/', {
        templateUrl: 'views/familydailyview.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/familydailyview', {
        templateUrl: 'views/familydailyview.html',
        controller: 'FamilydailyviewCtrl',
        controllerAs: 'familydailyview'
      })
      .when('/sdview/1', {
        templateUrl: 'views/sdview.html',
        controller: 'SdviewCtrl',
        controllerAs: 'sdview'
      })
      .otherwise({ //I want to add an error page when we don't get to the right page
        redirectTo: '/'
      });
  });
