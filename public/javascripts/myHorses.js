angular.module('app', ['ngRoute', 'ngResource'])


    .factory('Horses', ['$resource', function($resource){
        return $resource('/horses/:id', null,
            {'get': {method: 'GET', isArray: true},
                'query': {method: 'GET', isArray: true}});
    }])



    .controller('HorseController', ['$scope', '$rootScope', 'Horses', function ($scope,$rootScope, Horses) {
        $scope.horses = Horses.query();
        $scope.getHorseId = function (horse) {
            return horse.registro_equino;
        }
        $rootScope.showSearch = true;
    }])

    .controller('HorseDetailCtrl', ['$scope', '$rootScope', '$routeParams', 'Horses', function ($scope,$rootScope, $routeParams, Horses) {
        Horses.get({id: $routeParams.id}).$promise.then(function(data) {
            $scope.horse = data["0"];

        });
        $rootScope.showSearch = false;
    }])

    .controller('HelpController', ['$scope', '$rootScope', function ($scope,$rootScope) {
        $rootScope.showSearch = false;
    }])

    .config(['$routeProvider','$locationProvider', function ($routeProvider,  $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/html/myHorses.html",
                controller: 'HorseController'
            })

            .when('/help', {
                templateUrl: '/html//help.html',
                controller: 'HelpController'
            })

            .when('/:id', {
                templateUrl: '/html/horseDetail.html',
                controller: 'HorseDetailCtrl'
            });
        $locationProvider.html5Mode(true);
    }]);