export const listAll = async (page) => {
    const offSet = (20 * page) - 20;
	const pokemons = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=20`
	).then((res) => res.json());
    
    
	return normalizeResponse(pokemons.results);
};

export const infoAboutUrlPokemom = async (url) => {
	const pokemom = await fetch(url).then((res) => res.json());
	return pokemom;
};


function normalizeResponse(pokemons){
    let idPokemom = '';
    return pokemons.map((pokemom) => {
        idPokemom = extrairIdDaUrl(pokemom.url);
        return {
            ...pokemom,
            id: idPokemom,
            imagem: imagemPokemom(idPokemom)
        }
    });
}

function extrairIdDaUrl(urlDoPokemom){
    let regex = /https\:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]{1,})+\//;

    let url = urlDoPokemom;
    let id = url.match(regex)[1];
    return id;
}

function imagemPokemom(idPokemom){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemom}.png`;
}
