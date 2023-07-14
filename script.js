document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchValue = searchInput.value.trim().toLowerCase();

    if (searchValue) {
      getPokemonInfo(searchValue);
      searchInput.value = "";
    }
  });
});

function getPokemonInfo(searchValue) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const pokemonName = data.name;
      const pokemonImage = data.sprites.front_default;
      const pokemonTypes = data.types.map((type) => type.type.name).join(", ");

      document.getElementById("pokemon-name").textContent = pokemonName;
      document.getElementById("pokemon-image").src = pokemonImage;
      document.getElementById("pokemon-type").textContent = ` ${pokemonTypes}`;

      // Define o background color com base no tipo do Pokémon
      const card = document.querySelector(".card__tipo");
      if (pokemonTypes.includes("fire")) {
        card.style.backgroundColor = "var(--fogo)";
      } else if (pokemonTypes.includes("water")) {
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
