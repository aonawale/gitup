/**
 * Created by ahmedOnawale on 3/23/15.
 */
angular.module('UserDataModule')
    .factory('UserDataService', ['$http', function($http){
        return{

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
            }

        }
    }]);