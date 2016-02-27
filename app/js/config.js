/**
 * globalconf.js
 * 
 * Global configuration
 * 
 */

(function(){

  'use strict';

  var app = angular.module("yourAppName");

  app.factory('configApp', [function () {

    var appConfig = {
      debug : true
    };    
    return appConfig;
  }]);
})();


