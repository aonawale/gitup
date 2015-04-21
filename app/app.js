angular.module('GitUp', ['ngMaterial', 'ngRoute', 'ngStorage', 'UserDataModule'] )
.config(['$routeProvider', '$mdThemingProvider', '$locationProvider',
          function($routeProvider, $mdThemingProvider, $locationProvider){

  $routeProvider
  // Define routes for the application
      // route for user profile
    .when('/search/user', {
      templateUrl: '/gitup/app/githubuser/partials/search.result.html',
      controller: 'UserProfileController',
      controllerAs: 'UserProfileCtrl'
    })
    // route for repositories
    .when('/search/repositories', {
      templateUrl: '/gitup/app/githubuser/partials/repositories.html',
      controller: 'RepositoriesController',
      controllerAs: 'RepositoriesCtrl'
    })
    // route for edit profile
    .when('/user/update_profile', {
      templateUrl: '/gitup/app/githubuser/partials/update.profile.html',
      controller: 'SideBarController'
      //controllerAs: 'SideBarCtrl'
    })
    // route for error 404 page
    .when('/search/404', {
      templateUrl: '/gitup/app/githubuser/partials/error.page.html',
      controller: 'ErrorPageController',
      controllerAs: 'ErrorPageCtrl'
    })
    // default route....
    .otherwise({
      redirectTo: ''
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('red', {
      'default': '800'
    })
    .accentPalette('amber', {
      'default': '400'
    });

  }]);