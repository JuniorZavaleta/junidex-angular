angular
  .module('junidexApp')
  .controller('PokemonController', PokemonController);

PokemonController.$inject = ['dataService'];

function PokemonController(dataService, $scope) {
  var vm = this;

  vm.pokemons = [];

  function getAllPokemon() {
    return dataService.getAllPokemon()
      .then(function(data) {
        vm.pokemons = data;
      }
    )
  }

  function init() {
    getAllPokemon();
  }

  init();
}
