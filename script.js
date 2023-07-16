let currentIndex = 1; 

function getPokemonInfo(searchValue) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      
      const pokemonName = data.name;
      const pokemonImage = data.sprites.front_default;
      const pokemonStats = data.stats;
      const baseHP = pokemonStats[0].base_stat; 
      const baseAtk = pokemonStats[1].base_stat; 
      const baseDef = pokemonStats[2].base_stat; 
      const baseSpatk = pokemonStats[3].base_stat; 
      const baseSdef = pokemonStats[4].base_stat; 
      const speed = pokemonStats[5].base_stat; 


      document.getElementById("hp").innerHTML = baseHP;
      document.getElementById("atk").innerHTML = baseAtk;
      document.getElementById("def").innerHTML = baseDef;
      document.getElementById("spAtk").innerHTML = baseSpatk;
      document.getElementById("spDef").innerHTML = baseSdef;
      document.getElementById("speed").innerHTML = speed;
      
      let stats = {
        hp: baseHP,
        atk: baseAtk,
        def: baseDef,
        spAtk: baseSpatk,
        spDef: baseSdef,
        speed: speed
      };
      
      const maxValue = 250; 
      
      for (const stat in stats) {
        const value = stats[stat];
      
        const progressBar = document.getElementById(stat);
        const percentage = (value / maxValue) * 200;
      
        progressBar.style.width = `${percentage}%`;
      }
      



   

      const pokemonTypes = data.types.map((type) => type.type.name).join(", ");
      document.getElementById("pokemon-name").textContent = pokemonName;
      document.getElementById("pokemon-image").src = pokemonImage;
      document.getElementById("pokemon-type").textContent = ` ${pokemonTypes}`;

  
      const card = document.querySelector(".card__tipo");
      if (pokemonTypes.includes("fire")) {
        card.style.backgroundColor = "var(--fogo)";
      }
      else if (pokemonTypes.includes("water")) {
        card.style.backgroundColor = "var(--agua)";
      } else if (pokemonTypes.includes("grass")) {
        card.style.backgroundColor = "var(--planta)";
      } else if (pokemonTypes.includes("electric")) {
        card.style.backgroundColor = "var(--eletrico)";
      } else if (pokemonTypes.includes("fighting")) {
        card.style.backgroundColor = "var(--lutador)";
      } else if (pokemonTypes.includes("psychic")) {
        card.style.backgroundColor = "var(--psiquico)";
      } else if (pokemonTypes.includes("poison")) {
        card.style.backgroundColor = "var(--venenoso)";
      } else if (pokemonTypes.includes("bug")) {
        card.style.backgroundColor = "var(--inseto)";
      } else if (pokemonTypes.includes("ghost")) {
        card.style.backgroundColor = "var(--fantasma)";
      } else if (pokemonTypes.includes("steel")) {
        card.style.backgroundColor = "var(--aço)";
      } else if (pokemonTypes.includes("ice")) {
        card.style.backgroundColor = "var(--gelo)";
      } else if (pokemonTypes.includes("fairy")) {
        card.style.backgroundColor = "var(--fada)";
      } else if (pokemonTypes.includes("ground")) {
        card.style.backgroundColor = "var(--terrestre)";
      } else if (pokemonTypes.includes("dragon")) {
        card.style.backgroundColor = "var(--dragao)";
      } else if (pokemonTypes.includes("flying")) {
        card.style.backgroundColor = "var(--voador)";
      } else if (pokemonTypes.includes("dark")) {
        card.style.backgroundColor = "var(--sombrio)";
      } else {
        card.style.backgroundColor = "white";
      }
    })
    .catch((error) => console.log("Ocorreu um erro:", error));
}

function updatePokemonInfo() {
  const pokemonIndex = currentIndex.toString();
  getPokemonInfo(pokemonIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const previousButton = document.getElementById("previous-btn");
  const nextButton = document.getElementById("next-btn");

  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchValue = searchInput.value.trim().toLowerCase();

    if (searchValue) {
      getPokemonInfo(searchValue);
      searchInput.value = "";
    }
  });

  
  previousButton.addEventListener("click", () => {
    if (currentIndex > 1) {
      currentIndex--;
      updatePokemonInfo();
    }
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;

    updatePokemonInfo();
  });
});


updatePokemonInfo();