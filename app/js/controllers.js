'use strict';

var app = angular.module('socialApp');

app.controller('indexCtrl', function($scope, $state) {
  // if(localStorage['User-Data']) {
  //   $scope.loggedIn = true;
  // } else {
  //   $scope.loggedIn = false;
  // }
  //
  // $state.go('home');
})

app.controller('homeCtrl', function($scope, $state, $http) {

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
      $state.go('home');
    }).error(function(err) {
      console.log(err);
    });
  }

  $scope.logout = function() {
    localStorage.clear();
    $scope.loggedIn = false;
  }

});

app.controller('editCtrl', function($scope, $state, $http, Upload) {
  console.log('edit me binch');

  $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

  $scope.$watch(function() {
    return $scope.file
  }, function() {
    $scope.upload($scope.file);
  });

  $scope.upload = function(file) {
    if(file) {
      Upload.upload({
        url: 'api/profile/edit-photo',
        method: 'POST',
        data: {userId: $scope.user._id},
        file: file
      }).progress(function(event) {
        console.log('firing!!!');
      }).success(function(data) {

      }).error(function(err) {
        console.log(err);
      })
    }
  }

  $scope.updateUsername = function() {
    var request = {
      userId: $scope.user._id,
      username: $scope.user.username
    }
    $http.post('api/profile/updateUsername', request)
    .success(function() {
      console.log('success!')
    }).error(function(err) {
      console.log(err);
    })
  }

  $scope.updateBio = function() {
    var request = {
      userId: $scope.user._id,
      bio: $scope.user.bio
    }
    $http.post('api/profile/updateBio', request)
    .success(function() {
      console.log('success')
    }).error(function(err) {
      console.log(err)
    })
  }

})
