'use strict';

var app = angular.module('socialApp');

app.controller('homeCtrl', function($scope, $state) {
  console.log('homeCtrl');
})

app.controller('registerCtrl', function($scope, $state, $http) {
  console.log('registerCtrl');

  $scope.createUser = function() {

    $http.post('api/user/register', $scope.newUser)
    .success(function(res) {
      $scope.newUser = '';
    }).error(function(err) {
      console.log(err);
    })
  }
})

app.controller('navCtrl', function($scope, $state, $http) {
  $scope.logUserIn = function() {
    $http.post('api/user/login', $scope.login)
    .success(function(res) {
      console.log('logged in');
      localStorage.setItem('User-Data', JSON.stringify(res));
      $scope.login = '';
    }).error(function(err) {
      console.log(err);
    })
  }
});
