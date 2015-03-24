/**
 * Created by ahmedOnawale on 3/23/15.
 */
angular.module('UserDataModule')

    .controller('SearchController', ['UserDataService', function(UserDataService){
        var person = this;
        person.user;
        person.query;
        person.hide = false;

        person.getUserData = function(){
            person.hide = true;
            UserDataService.getUserData(person.query)
                .then(function(response){
                    person.user = response.data;
                });
            person.getUserRepo();
            person.getUserFollowers();
            person.getUserFollowing();
        };
        person.getUserRepo = function(){
            UserDataService.getUserRepo(person.query)
                .then(function(response){
                person.user.repos = response.data;
                })
        };
        person.getUserFollowers = function(){
            UserDataService.getUserFollowers(person.query)
                .then(function(response){
                    person.user.followers = response.data;
                })
        };
        person.getUserFollowing = function () {
            UserDataService.getUserFollowing(person.query)
                .then(function(response){
                    person.user.following = response.data;
                }, function(error){
                    console.log('user not found');
                });
        };

    }])

    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('left').close()
                .then(function(){
                    $log.debug("close LEFT is done");
                });
        };
    });