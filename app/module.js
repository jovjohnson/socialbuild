'use strict';

var app = angular.module('socialApp', ['ui.router', 'ngFileUpload']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: 'app/partials/home.html', controller: 'homeCtrl'})
    .state('messages', { url: '/messages', templateUrl: 'app/partials/messages.html', controller: 'homeCtrl'})
    .state('edit-profile', { url: '/edit-profile', templateUrl: 'app/partials/edit-profile.html', controller: 'editCtrl' })
    // .state('detail', { url: '/detail', templateUrl: 'partials/detail.html', controller: 'detailCtrl' })
    // .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl' })
    .state('register', { url: '/register', templateUrl: 'app/partials/register.html', controller: 'registerCtrl'})
  $urlRouterProvider.otherwise('/');

  // $locationProvider.html5Mode('true');
});


app.run(function() {});
