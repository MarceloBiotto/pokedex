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
  
        document.getElementById('pokemon-name').textContent = pokemonName;
        document.getElementById('pokemon-image').src = pokemonImage;
        document.getElementById('pokemon-type').textContent = `Tipo: ${pokemonTypes}`;
        
      // Define o background color com base no tipo do Pokémon
      const card = document.querySelector('.card__tipo');
      if (pokemonTypes.includes('fire')) {
        card.style.backgroundColor = 'red';
     
      } else if (pokemonTypes.includes('water')) {
        card.style.backgroundColor = 'blue';
      } else if (pokemonTypes.includes('grass')) {
        card.style.backgroundColor = 'green';
        
      }else if(pokemonTypes.includes('electric')){
        card.style.backgroundColor='yellow';
      }
       else {
        card.style.backgroundColor = 'white';
      }
    })
    .catch(error => console.log('Ocorreu um erro:', error));
  }
   

     
   
  