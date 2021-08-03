const INITIAL_STATE = {
    pokemons: [],
    loading: false
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
		default:
			return state;
	}
}