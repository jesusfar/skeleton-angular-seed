(function() {
    'use strict';

    var app = angular.module('yourAppName.main', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
    }]);

    app.controller('MainCtrl', [function() {

    }]);

}());
