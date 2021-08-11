import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	Modal,
	TouchableOpacity,
	Button,
} from "react-native";

import Pokemom from "../Pokemom";
import { ViewPokemom, Nome, ImgPokebola } from "./styles";

export default function Pokemons({ data }) {
	const [modalVisible, setModalVisible] = useState(false);
    
	return (
		<ViewPokemom>
			<Nome>{data.name}</Nome>
			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<ImgPokebola source={{
					uri: data.imagem
				}} />
			</TouchableOpacity>
			<Modal animationType="slide" visible={modalVisible}>
				<Pokemom urlPokemom={data.url} />
				<Button title="Sair" onPress={() => setModalVisible(false)} />
			</Modal>
		</ViewPokemom>
	);
}
