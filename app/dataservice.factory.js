angular
  .module('junidexApp', [])
  .factory('dataService', dataService);

var apiBaseUrl = 'http://45.55.83.44/junidex/api/';

dataService.$inject = ['$http'];

function dataService($http) {

  return {
    getAllPokemon: getAllPokemon
  };

  function getAllPokemon() {
    return $http.get(apiBaseUrl + 'pokemon/all')
                .then(getAllPokemonOk);

    function getAllPokemonOk(response) {
      return response.data;
    }
  }
}
