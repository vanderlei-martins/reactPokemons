import React, { useEffect } from "react";
import { View, Text, ScrollView, Image,ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPokemom, getPokemomSelector, isLoadingSelector } from "../../redux/PokemomAction";

export default function Pokemom({ urlPokemom }) {
	const dispatch = useDispatch();
	const infoPokemom = useSelector(getPokemomSelector);
    const loading = useSelector(isLoadingSelector);

	useEffect(() => {
		dispatch(getPokemom(urlPokemom));
	}, []);

    if(loading || !infoPokemom){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    }

	return (
		<View>
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
					infoPokemom.moves.slice(0,5).map(({ move }) => `${move.name}, `)}
			</Text>
			<Image
				// source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'}}
				source={{uri: infoPokemom.sprites.other['official-artwork']['front_default']}}
				style={{ width: 150, height: 150 }}
			/>
		</View>
	);
}
