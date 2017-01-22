'use strict';
var app = angular.module('junidexApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  $routeProvider
  .when('/', {
    controller : 'MainController',
    templateUrl : 'templates/main.html'
  })
  .when('/pokemon', {
    controller: 'PokemonController as vm',
    templateUrl: 'templates/pokemon.html',
  });
});
