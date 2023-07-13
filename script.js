document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', () => {
      const searchInput = document.getElementById('search-input');
      const searchValue = searchInput.value.trim();
  
      if (searchValue) {
        getPokemonInfo(searchValue);
        searchInput.value = '';
      }
    });
  });
  
  function getPokemonInfo(searchValue) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const pokemonName = data.name;
        const pokemonImage = data.sprites.front_default;
        const pokemonTypes = data.types.map(type => type.type.name).join(', ');
  
        // Atualiza os elementos HTML com as informações do Pokémon
        document.getElementById('pokemon-name').textContent = pokemonName;
        document.getElementById('pokemon-image').src = pokemonImage;
        document.getElementById('pokemon-type').textContent = `Tipo: ${pokemonTypes}`;
      })
      .catch(error => console.log('Ocorreu um erro:', error));
  }
  