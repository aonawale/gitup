/**
 * Created by ahmedOnawale on 3/23/15.
 */
angular.module('GitUp',
        ['ngMaterial',
        'ngRoute',
        'UserDataModule'])
.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider){
        /*$routeProvider
            .when('/search', {
                templateUrl: './app/githubuser/partials/search.result.html',
                controller: 'SearchController',
                controllerAs: 'searchCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });*/

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('teal');
    }]);