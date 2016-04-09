(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    var app = angular.module('yourAppName', [
        'ngRoute',
        'yourAppName.main'
        ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);

}());
