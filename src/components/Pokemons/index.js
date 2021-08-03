import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	Modal,
	TouchableOpacity,
	Button,
} from "react-native";
import { ViewPokemom, Nome, ImgPokebola } from "./styles";

export default function Pokemons({ data }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<ViewPokemom>
			<Nome>{data.name}</Nome>
			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<ImgPokebola source={require("../../img/pokebola.png")} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					source={require("../../img/likeada.png")}
					style={{ width: 45, height: 45 }}
				/>
			</TouchableOpacity>

			<Modal animationType="slide" visible={modalVisible}>
				<Text>Meu modal funcionando</Text>
				<Button title="Sair" onPress={() => setModalVisible(false)} />
			</Modal>
		</ViewPokemom>
	);
}
