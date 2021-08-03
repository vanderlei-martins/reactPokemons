import * as api from "../services/api/fetch/pokemom";
import { getGetLisAllPokemonsSuccess } from "./PokemomAction";

export const PokemomRequestMiddleware = (store) => (next) => async (action) => {
	if (action.type === "GET_ALL_POKEMONS") {
		next(action);
		const pokemons = await api.listAll();
		// setTimeout(() => {
			store.dispatch(getGetLisAllPokemonsSuccess(pokemons));
		// 	console.log("POSTS", pokemons);
		// }, 1000);
		return;
	}
	next(action);
};
