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
      
    }).error(function(err) {
      console.log(err);
    })
  }
})
