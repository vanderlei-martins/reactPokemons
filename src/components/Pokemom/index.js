import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	ScrollView,
	Image,
	ActivityIndicator,
	TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	getPokemom,
	getPokemomSelector,
	isLoadingSelector,
} from "../../redux/PokemomAction";
import firebase from "../../services/firebaseonnection";

export default function Pokemom({ urlPokemom }) {
	const dispatch = useDispatch();
	const infoPokemom = useSelector(getPokemomSelector);
	const loading = useSelector(isLoadingSelector);
	const [favoritos, setFavoritos] = useState([]);

	useEffect(() => {
		dispatch(getPokemom(urlPokemom));

		async function loadFavoritos() {
			await firebase
				.database()
				.ref("favoritos/")
				.on("value", (snapshot) => {
					const ids = [];
					snapshot.forEach((item) => {
						ids.push(item.key);
					});
					setFavoritos(ids);
				});
		}

		loadFavoritos();
	}, []);

	function isFavorito(id) {
		return favoritos.indexOf(id.toString()) > -1;
	}

    function carregarImgFavoritar(pokemomfavorito){
        return pokemomfavorito ? require("../../img/favoritada.png") : require("../../img/naofavoritada2.png");
    }

	if (loading || !infoPokemom) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" color="#131313" />
			</View>
		);
	}

	return (
		<View>
			<Text>{`${infoPokemom.name.toUpperCase()} : ${infoPokemom.id}`}</Text>
			<Text>
				Abilities:{" "}
				{infoPokemom.abilities &&
					infoPokemom.abilities.map(
						({ ability }) => `${ability.name}, `
					)}
			</Text>

			<Text>
				Moves:{" "}
				{infoPokemom.moves &&
					infoPokemom.moves
						.slice(0, 5)
						.map(({ move }) => `${move.name}, `)}
			</Text>
			<Image
				source={{
					uri: infoPokemom.sprites.other["official-artwork"][
						"front_default"
					],
				}}
				style={{ width: 150, height: 150 }}
			/>

			<TouchableOpacity>
				<Image
					source={carregarImgFavoritar(isFavorito(infoPokemom.id))}
					style={{ width: 45, height: 45 }}
				/>
			</TouchableOpacity>
		</View>
	);
}
