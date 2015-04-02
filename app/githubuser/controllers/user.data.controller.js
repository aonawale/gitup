angular.module('UserDataModule')

.controller('SearchController', ['UserDataService', "$location", '$http', '$localStorage', '$rootScope', '$timeout',
                            function(UserDataService, $location, $http, $localStorage, $rootScope, $timeout){
  var person = this;
  person.errorMsg = null;
  $rootScope.user;
  $rootScope.repositories;

  person.getRepositories = function(query){
    UserDataService.getRepositories(query)
    .then(function(response){
      console.log(response);
      $rootScope.repositories = response.data.items;
      UserDataService.loadRepositories();
    }, function(response){

    });
    $rootScope.query = query;
  };

  person.getUserData = function(query){
    UserDataService.getUserData(query)
      .then(function(response){
        $rootScope.user = response.data;
      }, function(error){
        UserDataService.loadErrorPage();
        person.errorMsg = error.statusText;
    });
    person.getUserRepo(query);
    person.getUserFollowers(query);
    person.getUserFollowing(query);
  };
  person.getUserRepo = function(arg){
    UserDataService.getUserRepo(arg)
      .then(function(response){
        $rootScope.user.repos = response.data;
      }, function(error){
        person.errorMsg = error.statusText;
    });
  };
  person.getUserFollowers = function(arg){
    UserDataService.getUserFollowers(arg)
      .then(function(response){
        $rootScope.user.followers = response.data;
      }, function(error){
        person.errorMsg = error.statusText;
    });
  };
  person.getUserFollowing = function(arg){
    UserDataService.getUserFollowing(arg)
    .then(function(response){
      $rootScope.user.following = response.data;
      UserDataService.loadUserProfile();
    }, function(error){
        UserDataService.loadErrorPage();
        person.errorMsg = error.statusText;
    });
  };

  /*person.auth = 'https://github.com/login/oauth/authorize?client_id=c2c7762e7f96f8461097&scope=user,public_repo';
  person.code;
  person.token;

  person.authenticate = function(){
    location.href = person.auth;
  };

  person.signIn = function(){
    person.getCode();
    person.getToken();
  };

  person.getCode = function(){
    person.code = $location.search().code.split("/")[0];
    console.log(person.code);
  };

  person.getToken = function (provider) {
    return $http.post('https://github.com/login/oauth/access_token', {
    client_id: 'c2c7762e7f96f8461097',
    client_secret: '8b8bb41aef852dee0dd7dd05b5c2cd8376b16a3c',
    code: person.code})
    .then(function(response){
      person.token = response.data.split('=')[1].split('&')[0];
    });
  };

  person.updateUserData = function(){
    return $http.post('https://api.github.com/user',{
      "name": "monalisa octocat",
      "email": "octocat@github.com",
      "blog": "https://github.com/blog",
      "company": "GitHub",
      "location": "San Francisco",
      "hireable": true,
      "bio": "There once..."}, 
      {headers: {'Authorization': 'token ' +person.token}
      })
      .then(function(response){
        console.log(response);
      });
  };*/

}]);