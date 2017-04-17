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
    'chart.js',
    'ngMaterial' //check if I still need this
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
      .when('/sdview/1', { //sdview:/:id
        templateUrl: 'views/sdview.html',
        controller: 'SdviewCtrl',
        controllerAs: 'sdview'
      })
      .when('/famweeklyview', {
        templateUrl: 'views/famweeklyview.html',
        controller: 'FamweeklyviewCtrl',
        controllerAs: 'famweeklyview'
      })
      .when('/singleweeklyview', {
        templateUrl: 'views/singleweeklyview.html',
        controller: 'SingleweeklyviewCtrl',
        controllerAs: 'singleweeklyview'
      })
      .when('/fambarview', {
        templateUrl: 'views/fambarview.html',
        controller: 'FambarviewCtrl',
        controllerAs: 'fambarview'
      })
      .otherwise({ //I want to add an error page when we don't get to the right page
        redirectTo: '/'
      });
  });
