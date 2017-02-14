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
    'ngVega',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
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
      .otherwise({
        redirectTo: '/'
      });
  });
