export const listAll = async () => {
	const pokemons = await fetch(
		`https://pokeapi.co/api/v2/pokemon/`
	).then((res) => res.json());

	return pokemons.results;
};

export const listAllByPage = async (id) => {
	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	).then((res) => res.json());

	return post;
};


export const infoAboutUrlPokemom = async (url) => {
	const pokemom = await fetch(url).then((res) => res.json());

    // console.log('consulta pokemom');
    // console.log(pokemom);
	return pokemom;
};
