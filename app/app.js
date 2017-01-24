'use strict';
var app = angular.module('junidexApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  $routeProvider
  .when('/', {
    controller : 'MainController',
    templateUrl : 'templates/main.html',
  })
  .when('/pokemon', {
    controller: 'PokemonController as vm',
    templateUrl: 'templates/pokemon.html',
  })
  .when('/pokemon/add', {
    templateUrl: 'templates/pokemon/add.html'
  });
});

app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        if ($('#sidebar').hasClass('visible')) {
            $('.ui.sidebar').sidebar({
              context: $('.bottom.segment')
            }).sidebar('toggle');
        }
    });
}]);
