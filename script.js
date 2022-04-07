let button = document.querySelector(`#searchButton`)

async function getData(event) {

    event.preventDefault()

    let searchInput = document.getElementById(`inputBar`).value

    let url = `http://pokeapi.co/api/v2/pokemon/${searchInput}`

    console.log(url)

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => { 
            const pokemonHeading = document.querySelector(`#pokemonName`)
            pokemonHeading.innerText = `Pokemon: ${res.name.toUpperCase()}`
            console.log("success!", res.sprites.front_default) })

        .catch(err => { console.log(`error`, err) })
}

button.addEventListener(`click`, getData)