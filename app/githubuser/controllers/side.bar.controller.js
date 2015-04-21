angular.module('UserDataModule')
.controller('SideBarController', ['$scope', '$mdDialog','$timeout', '$mdSidenav', '$log', '$location', 'UserDataService', '$http',
															function($scope, $mdDialog, $timeout, $mdSidenav, $log, $location, UserDataService, $http){
  $scope.close = function() {
	  $mdSidenav('left').close()
	    .then(function(){
	      $log.debug("close LEFT is done");
	    });
  };

	$scope.auth = 'https://github.com/login/oauth/authorize?client_id=c2c7762e7f96f8461097&scope=user,public_repo';
  $scope.code;
  $scope.update = {};
  $scope.newRepo = {};

  $scope.authenticate = function(){
  	location.href = $scope.auth;
  };

  $scope.signIn = function(){
    $scope.getCode();
    $scope.getToken();
  };

  $scope.getCode = function(){
    $scope.code = UserDataService.getCode();
  };

  $scope.getToken = function (provider) {
    return $http.post('https://github.com/login/oauth/access_token', {
    client_id: 'c2c7762e7f96f8461097',
    client_secret: '8b8bb41aef852dee0dd7dd05b5c2cd8376b16a3c',
    code: $scope.code})
    .then(function(response){
      UserDataService.token = response.data.split('=')[1].split('&')[0];
    });
  };

  $scope.editProfile = function(){
  	UserDataService.loadProfileEditor();
  };

  $scope.updateProfile = function(){
    return $http.post('https://api.github.com/user',
    	$scope.update, 
      {headers: {'Authorization': 'token ' +UserDataService.token}
      })
      .then(function(response){
        console.log(response);
      });
  };

  $scope.createRepo = function(){
  	return $http.post('https://api.github.com/user/repos',
  		$scope.newRepo,
  		{headers: {'Authorization': 'token ' +UserDataService.token}
      })
  	.then(function(response){
  		console.log(response);
  	});
  }

  function Makedialog(){
    return function(ev){
      $mdDialog.show({
      		bindToController: true,
      		controllerAs: 'ctrl',
      		controller: angular.noop,
      			locals: {parent: $scope},
          templateUrl: '/gitup/app/githubuser/partials/create.repository.html',
          targetEvent: ev

      });
    };
  }

  $scope.showAddDialog = Makedialog();

}]);