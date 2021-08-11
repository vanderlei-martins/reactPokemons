import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { BackgroundPokedex, Listpokemons } from "./styles";

import Pokemons from "../Pokemons";

import {
	getListAllPokemons,
	getAllPokemonsSelector,
} from "../../redux/PokemomAction";

export default function Pokedex() {
    const [pagina, setPagina] = useState(1);
	const numColumns = 2;
    const dispatch = useDispatch();
    const listPokemons = useSelector(getAllPokemonsSelector);

    useEffect(() => {
        dispatch(getListAllPokemons(pagina));
    }, [])

    async function listarMaisPokemons(){
        let newPage = pagina + 1;
        await setPagina(newPage);
        await dispatch(getListAllPokemons(newPage));
    }

	return (
		<BackgroundPokedex>
			<Listpokemons
				showsVerticalScrollIndicator={false}
				data={createRows(listPokemons, numColumns)}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					if (item.empty) {
						return <View style={[styles.itemEmpty]} />;
					}
					return <Pokemons data={item} />;
				}}
				numColumns={numColumns}
				onEndReached={listarMaisPokemons}
				onEndReachedThreshold={0.1}
			/>
		</BackgroundPokedex>
	);

	// funcao para organizar as colunas do flatlist
	function createRows(data, columns) {
		const numberOfFullRows = Math.floor(data.length / numColumns);

		let numberOfElementsLastRow =
			data.length - numberOfFullRows * numColumns;
		while (
			numberOfElementsLastRow !== numColumns &&
			numberOfElementsLastRow !== 0
		) {
			data.push({
				id: `blank-${numberOfElementsLastRow}`,
				nome: "vazio",
				empty: true,
			});
			numberOfElementsLastRow++;
		}

		return data;
	}
}

const styles = StyleSheet.create({
	itemEmpty: {
		backgroundColor: "transparent",
		flexBasis: 0,
		flexGrow: 1,
		margin: 5,
	},
});
