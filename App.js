import React from "react";
import { View } from "react-native";
import Pokedex from "./src/components/Pokedex";

import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import { PokemomReducer } from "./src/redux/PokemomReducer";
import { PokemomRequestMiddleware } from "./src/redux/PokemomMiddleware";

const store = createStore(PokemomReducer, applyMiddleware(PokemomRequestMiddleware));

export default function App() {
	return(
        <Provider store={store}>
            <Pokedex />
        </Provider>
    )
}
