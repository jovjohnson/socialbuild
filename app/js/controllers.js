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
  if(localStorage['User-Data']) {
    $scope.loggedIn = true;
  } else {
    $scope.loggedIn = false;
  }
  $scope.logUserIn = function() {
    $http.post('api/user/login', $scope.login)
    .success(function(res) {
      console.log('logged in');
      localStorage.setItem('User-Data', JSON.stringify(res));
      $scope.loggedIn = true;
      $scope.login = '';
    }).error(function(err) {
      console.log(err);
    })
  }
});

app.controller('editCtrl', function($scope, $state, $http) {
  console.log('edit me binch');
})
