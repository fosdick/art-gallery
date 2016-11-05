'use strict';

angular.module('app', ['app.filters', 'app.services', 'app.directives', 'app.controllers', 'ui.bootstrap', 'imgur', 'ngCookies', 'wu.masonry']).
  config(['$routeProvider', '$locationProvider', '$imgurGlobalProvider', function($routeProvider, $locationProvider, $imgurGlobalProvider) {

    $imgurGlobalProvider.options({
      apiKey:'7c7f273c0232827',
      account:'gigablox'
    });


    $routeProvider.when('/', {
      template: '/views/art.html',
      title:'Home',
    }).otherwise({ redirectTo: 'art-gallery/' });;


    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }]);
