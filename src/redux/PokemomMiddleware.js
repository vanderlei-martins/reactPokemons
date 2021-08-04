import * as api from "../services/api/fetch/pokemom";
import { getListAllPokemonsSuccess, getPokemomSuccess } from "./PokemomAction";

export const PokemomRequestMiddleware = (store) => (next) => async (action) => {
	if (action.type === "GET_ALL_POKEMONS") {
		next(action);
		const pokemons = await api.listAll();
        store.dispatch(getListAllPokemonsSuccess(pokemons));
		return;
	}
    
    if (action.type === "GET_POKEMOM") {
		next(action);
        const pokemom = await api.infoAboutUrlPokemom(action.idUrlPokemomTofind);
        store.dispatch(getPokemomSuccess(pokemom));
		return;
	}
	next(action);
};
