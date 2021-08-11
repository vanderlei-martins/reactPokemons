export const getListAllPokemons = (page = 1) => {
    return {
        type: 'GET_ALL_POKEMONS',
        page: page
        
    }
}

export const getListAllPokemonsSuccess = (pokemons) => {
    return {
        type: 'GET_ALL_POKEMONS_SUCCESS',
        payload: {
            pokemons
        }
    }
}

export const getPokemom = (urlToSearch) => {
    return {
        type: 'GET_POKEMOM',
        idUrlPokemomTofind: urlToSearch
    }
}

export const getPokemomSuccess = (pokemom) => {
    return {
        type: 'GET_POKEMOM_SUCCESS',
        payload: {
            pokemom
        }
    }
}


export const getAllPokemonsSelector = (state) => state.pokemons;
export const getPokemomSelector = (state) => state.pokemom;
export const isLoadingSelector = (state) => state.loading;