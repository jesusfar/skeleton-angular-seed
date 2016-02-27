'use strict';

// Declare app level module which depends on views, and components
angular.module('yourAppName', [
    'ngRoute',
    'yourAppName.main'
    ]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
