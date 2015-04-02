angular.module('UserDataModule')
    .directive('searchResult', [function(){
        return {
            restrict: 'E',
            templateUrl: './app/githubuser/partials/search.result.html'
        };
    }]);