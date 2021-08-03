import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { BackgroundPokedex, Listpokemons } from "./styles";

import Pokemons from "../Pokemons";

import {
	getListAllPokemons,
	getAllPokemonsSelector,
	isLoadingSelector,
} from "../../redux/PokemomAction";

export default function Pokedex() {
	const numColumns = 2;
	const _pokemons = [
		{
	        id: 1,
			nome: "bulbassauro",
		},{
	        id: 2,
			nome: "charmandar",
		},{
	        id: 3,
			nome: "charmandar",
		},{
	        id: 4,
			nome: "charmandar",
		},{
	        id: 5,
			nome: "charmandar 3",
		},
	];

    useEffect(() => {
        dispatch(getListAllPokemons());
    }, [])

    const dispatch = useDispatch();
    const listPokemons = useSelector(getAllPokemonsSelector);
    const isLoading = useSelector(isLoadingSelector);

	return (
		<BackgroundPokedex>
			<Listpokemons
				showsVerticalScrollIndicator={false}
				data={createRows(listPokemons, numColumns)}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => {
					if (item.empty) {
						return <View style={[styles.itemEmpty]} />;
					}
					return <Pokemons data={item} />;
				}}
				numColumns={numColumns}
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
