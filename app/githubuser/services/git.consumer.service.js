angular.module('UserDataModule')
  .factory('UserDataService', ['$http', '$location', function($http, $location){
    return{
      token: null,
      code: null,
      getUserData: function(query){
        return $http.get('https://api.github.com/users/' + query);
      },
      getUserRepo: function(query){
        return $http.get('https://api.github.com/users/' +query+ '/repos');
      },
      getUserFollowers: function(query){
        return $http.get('https://api.github.com/users/' +query+ '/followers');
      },
      getUserFollowing: function(query){
        return $http.get('https://api.github.com/users/' +query+ '/following');
      },
      getRepositories: function(query){
        return $http.get('https://api.github.com/search/repositories?q=' +query);
      },
      loadUserProfile: function(){
          $location.path('/search/user');
      },
      loadErrorPage: function(){
        $location.path('/search/404');
      },
      loadHomePage: function(){
        $location.path('/');
      },
      loadRepositories: function(){
        $location.path('/search/repositories');
      },
      loadProfileEditor: function(){
        $location.path('/user/update_profile');
      },
      getCode: function(){
        code = $location.search().code.split("/")[0];
        return code;
      }
    }

  }]);