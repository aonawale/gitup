/**
 * Created by ahmedOnawale on 3/24/15.
 */
angular.module('UserDataModule')
    .directive('searchResult', [function(){
        return {
            restrict: 'E',
            templateUrl: './app/githubuser/partials/search.result.html'
        };
    }]);