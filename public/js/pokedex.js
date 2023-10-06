const pokeList = document.querySelector('#pokemon-list');
const buscador = document.querySelector('#buscador');


const fetchPokemons = async () => {
    const apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/';

    for(let i = 1; i <= 150; i++){
        try {
            const response = await fetch(apiEndpoint + i);
            const pokemonData = await response.json();

            const pokemon = {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                type: pokemonData.types.map(currentType => currentType.type.name).join(', '),
                id: pokemonData.id
            }

            // Creamos la etiqueta li
            let pokemonLi = document.createElement('li');

            // Le agregamos estilos, un ID único  y un innerHTML
            pokemonLi.id = `pokemon-${pokemon.id}`;
            pokemonLi.classList.add('pokemon')
            //pokemonLi.setAttribute('href', 'asdfaesdf') otra forma de agregar atributos

            const pokemonImg = document.createElement('img');
            pokemonImg.src = pokemon.image;
            pokemonLi.appendChild(pokemonImg);

            const pokemonType = document.createElement('p');
            pokemonType.innerText = pokemon.type;
            pokemonLi.appendChild(pokemonType);

            const pokemonName = document.createElement('h2');
            pokemonName.innerText = pokemon.name;
            pokemonLi.appendChild(pokemonName);

            // Al ul le agregamos cada LI como hijo
            pokeList.appendChild(pokemonLi);

        } catch (error) {
            console.error(error);
        }
    }
}

// Agregamos el eventListener de input para responder a cuando el usuario ingresa su búsqueda
buscador.addEventListener('input', e => {
    // Cada vez que el usuario escriba algo, llamamos a la función searchPokemon y le pasamos como parámetro lo que el usuario escribió
    searchPokemon(e.target.value);
});

// La función searchPokemon se encargará de recibir una búsqueda, y hará desaparecer a todos los pokemones cuyo nombre no coincida con la búsqueda
const searchPokemon = search => {
    // Creamos un array que contiene todos los nombres de pokemon (todos son etiquetas h2)
    const pokemonNameList = Array.from(document.querySelectorAll('.pokemon h2'));

    // Usamos un forEach para poder evaluar cierta condición para cada nombre de pokemón
    pokemonNameList.forEach(pokemonName => {        
        // Si el texto del h2 actual no contiene la búsqueda (lo que el usuario ingresó)
        if(!pokemonName.innerText.includes(search)){
            // Al padre del h2 actual le ponemos display none
            pokemonName.parentElement.style.display = 'none';
        } else {
            pokemonName.parentElement.style.display = 'list-item';
        }
    })
}

fetchPokemons();