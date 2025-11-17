/*************************************************************************************
 * Obejtivo: Manipular dados de uma API e criar uma pokedex interativa
 * Data: 17/11/25
 * Autor: Rafael Naunnccik
 * Versão: 1.0
 *************************************************************************************/

const cardsContainer = document.getElementById("cards-container");
let currentId = 1; 

// Botões e pesquisa da pokedex
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const searchForm = document.getElementById("search-form");
const pokemonIdInput = document.getElementById("pokemon-id");


// Botões de voltar e próximo
nextBtn.addEventListener("click", function () {
  currentId++;
  loadPokemonById(currentId);
});

prevBtn.addEventListener("click", function () {
  if (currentId > 1) { // não deixa ir pra 0
    currentId--;
    loadPokemonById(currentId);
  }
});

// Barra de pesquisa por ID ou Nome
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = pokemonIdInput.value.trim().toLowerCase();

  if (!value) {
    alert("Digite um ID ou nome de Pokémon.");
    return;
  }

  // Aqui pode ser "25" ou "pikachu"
  loadPokemonById(value);

  pokemonIdInput.value = "";
});


// Função com a API 

function loadPokemonById(idOrName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemonData) {
      console.log("Detalhes do Pokémon:", pokemonData);

      // atualiza o currentId com o ID real do Pokémon
      currentId = pokemonData.id;

      cardsContainer.innerHTML = "";
      createPokemonCard(pokemonData);
    })
    .catch(function (error) {
      console.log("Erro ao carregar Pokémon:", error);
      alert("Não encontrei esse Pokémon. Verifique o ID ou o nome.");
    });
}


// Cria o card com as informações do pokemon

function createPokemonCard(pokemonData) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const img = document.createElement("img");
  img.src = pokemonData.sprites.front_default;
  img.alt = `Imagem de ${pokemonData.name}`;

  // Nome
  const name = document.createElement("h2");
  name.textContent = pokemonData.name;

  const info = document.createElement("p");

  // Tipos
  const tipos = pokemonData.types
    .map(function (tipoInfo) {
      return tipoInfo.type.name;
    })
    .join(" / ");

  info.textContent = "Tipo(s): " + tipos;

  // ID
  const idInfo = document.createElement("p");
  idInfo.textContent = "ID: " + pokemonData.id;

  // Altura e peso
  const statsInfo = document.createElement("p");
  const alturaEmMetros = pokemonData.height / 10;
  const pesoEmKg = pokemonData.weight / 10;

statsInfo.textContent =
  "Altura: " + alturaEmMetros.toFixed(1) + " m | Peso: " + pesoEmKg.toFixed(1) + " kg";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(idInfo);
  card.appendChild(info);
  card.appendChild(statsInfo);

  cardsContainer.appendChild(card);
}

loadPokemonById(currentId);
