// Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const pokemons = [
    { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png` },
    { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png` },
    { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png` },
    { name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png` },
    { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png` },
    { name: "Ultrigaria", type: "Gift", image: `${pokemonBilderQuelle}70.png` },
];

// HTML-Elemente
let titleSelection = document.createElement("div");
titleSelection.id = "title-selection";
titleSelection.classList.add("container");
document.body.appendChild(titleSelection);

let elTitle = document.createElement("h1");
elTitle.id = "title";
elTitle.textContent = "Mein Pokédex";
titleSelection.appendChild(elTitle);

let pokemonCards = document.createElement("div");
pokemonCards.id = "pokemon-cards";
pokemonCards.classList.add("container");
document.body.appendChild(pokemonCards);


// Detail-View vor der Schleife erstellen
let div = document.createElement("div");
div.id = "pokemon-detail-view";
div.classList.add("container");
div.classList.add("d-none");
document.body.appendChild(div);

// Anzeige-Funktion außerhalb der Schleife
function displaySinglePokemon(pokemon) {
    const detailView = document.getElementById("pokemon-detail-view");
    detailView.innerHTML = "";

    const detailTitle = document.createElement("h2");
    detailTitle.textContent = pokemon.name;

    const detailImage = document.createElement("img");
    detailImage.src = pokemon.image;

    const detailType = document.createElement("p");
    detailType.textContent = "Typ: " + pokemon.type;

    detailView.appendChild(detailTitle);
    detailView.appendChild(detailImage);
    detailView.appendChild(detailType);
}


for (const pokemon of pokemons) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = "Typ: " +  pokemon.type;

    if (pokemon.type == "Feuer") type.style.color = "red";
    if (pokemon.type == "Wasser") type.style.color = "blue";
    if (pokemon.type == "Pflanze") type.style.color = "green";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);

    card.addEventListener("click", function () {
        pokemonCards.classList.add("d-none");
        div.classList.remove("d-none");
        displaySinglePokemon(pokemon);
    });

    pokemonCards.appendChild(card);
}
