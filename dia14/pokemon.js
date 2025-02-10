
async function fetchData() {
    try {
        let nombre = document.getElementById("pokemonName").value.toLowerCase();
        const respuesta = fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener el recurso");
        } 
        const data = await response.json();
        let spritePokemon = data.sprites.front_default;

        document.getElementById("pokemonSprite").src = spritePokemon;

    } catch (error) {
        console.error("Error:" + error);
    }
}