import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator,
	TextInput,
	TouchableHighlight,
} from "react-native";
import { BackgroundPokedex, Listpokemons } from "./styles";

import Pokemons from "../Pokemons";

import {
	getListAllPokemons,
	getAllPokemonsSelector,
	pesquisarPokemomSelector,
} from "../../redux/PokemomAction";

export default function Pokedex() {
	const [pagina, setPagina] = useState(1);
	const numColumns = 2;
	const dispatch = useDispatch();
	const listPokemons = useSelector(getAllPokemonsSelector);
	const [pokemonsDaBusca, setPokemonsDaBusca] = useState([]);

	useEffect(() => {
		dispatch(getListAllPokemons(pagina));
	}, []);

	async function listarMaisPokemons() {
		let newPage = pagina + 1;
		await setPagina(newPage);
		await dispatch(getListAllPokemons(newPage));
	}

	function pesquisarPokemons(busca) {
		if (!busca) {
			setPokemonsDaBusca([]);
			return;
		}

		let pokemonsFiltrados = listPokemons.filter((pokemom) => {
			let pos = pokemom.name.toLowerCase().indexOf(busca.toLowerCase());
			return pos != -1;
		});

		setPokemonsDaBusca(pokemonsFiltrados);
	}

	function renderizar() {
		return pokemonsDaBusca.length !== 0 ? pokemonsDaBusca : listPokemons;
	}

	return (
		<BackgroundPokedex>
			<View style={styles.flowRight}>
				<TextInput
					style={styles.searchInput}
					placeholder="Pesquisar"
					onChangeText={(textoBusca) => pesquisarPokemons(textoBusca)}
				/>
			</View>

			<Listpokemons
				showsVerticalScrollIndicator={false}
				data={createRows(renderizar(), numColumns)}
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

	flowRight: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "stretch",
	},

	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: "#8cc53e",
		color: "#8cc53e",
	},
});
