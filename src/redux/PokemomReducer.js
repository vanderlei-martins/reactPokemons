const INITIAL_STATE = {
    pokemons: [],
    loading: false,
    pokemom: null
}

export const PokemomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case "GET_ALL_POKEMONS":
			return {
				...state,
				loading: true,
			};
		case "GET_ALL_POKEMONS_SUCCESS":
			return {
				...state,
				loading: false,
				pokemons: [...state.pokemons, ...action.payload.pokemons],
			};
        case "GET_POKEMOM":
			return {
				...state,
				loading: true,
			};
		case "GET_POKEMOM_SUCCESS":
			return {
				...state,
				loading: false,
				pokemom: action.payload.pokemom
			};
		default:
			return state;
	}
}