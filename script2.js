let loadMore = document.querySelector("button");
let pokemon = document.querySelector("#pokemon");
let filterType = document.querySelector("#filterByType");
let nameInput = document.querySelector("#pokiid");

let temp = []; // This will store all loaded Pokémon data
let offset = 0;

document.addEventListener("DOMContentLoaded", loadData);
loadMore.addEventListener("click", loadData);

function loadData() {
    let URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;

    fetch(URL)
        .then((response) => response.json())
        .then((result) => {
            // Concatenate new results with existing ones
            temp = temp.concat(result.results);
            showdata(result.results);
            offset += 20;
        });
}

function showdata(data) {
    // Clear previous Pokémon display
    // pokemon.innerHTML = '';

    data.forEach(item => {
        flipcard = document.createElement("div");
        flipcard.classList.add("flip-card");

        flipcardinner = document.createElement("div");
        flipcardinner.classList.add("flip-card-inner");

        flipcardfront = document.createElement("div");
        flipcardfront.classList.add("flip-card-front");
        imgPoke = document.createElement("img");

        let fName = document.createElement("h1");
        fName.innerText = item.name;

        let type = document.createElement("h3");

        flipcardfront.append(imgPoke, fName, type);
        flipcardinner.append(flipcardfront);
        flipcard.append(flipcardinner);
        pokemon.append(flipcard);

        imgurl(item.url, imgPoke, type);
    });
}

function imgurl(url, imgelement, typee) {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            imgelement.src = result.sprites.other.dream_world.front_default;
            typee.innerText = result.types[0].type.name;

            temp.push({ name: result.name, type: result.types[0].type.name });
        });
}

filterType.addEventListener('change', () => {
    const selectedType = filterType.value;

    if (selectedType) {
        const filtered = temp.filter(pokemon => pokemon.type === selectedType);
        
        showdata(filtered);
    } else {
        offset = 0; 
        loadData();
    }
});

