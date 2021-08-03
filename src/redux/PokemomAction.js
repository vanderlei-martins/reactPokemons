export const getListAllPokemons = () => {
    return {
        type: 'GET_ALL_POKEMONS'
    }
}

export const getGetLisAllPokemonsSuccess = (pokemons) => {
    return {
        type: 'GET_ALL_POKEMONS_SUCCESS',
        payload: {
            pokemons
        }
    }
}

export const getAllPokemonsSelector = (state) => state.pokemons;
export const isLoadingSelector = (state) => state.loading;