'use strict';

var app = angular.module('socialApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: 'app/partials/home.html', controller: 'homeCtrl'})
    // .state('lineup', { url: '/lineup', templateUrl: 'partials/lineup.html', controller: 'lineupCtrl' })
    // .state('detail', { url: '/detail', templateUrl: 'partials/detail.html', controller: 'detailCtrl' })
    // .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl' })
    .state('register', { url: '/register', templateUrl: 'app/partials/register.html'})
  $urlRouterProvider.otherwise('/');

  // $locationProvider.html5Mode('true');
});


app.run(function() {});
