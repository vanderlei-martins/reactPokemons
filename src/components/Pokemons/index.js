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
				<ImgPokebola source={require("../../img/pokebola.png")} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					source={require("../../img/likeada.png")}
					style={{ width: 45, height: 45 }}
				/>
			</TouchableOpacity>

			<Modal animationType="slide" visible={modalVisible}>
				<Pokemom urlPokemom={data.url} />
                <TouchableOpacity>
				<Image
					source={require("../../img/likeada.png")}
					style={{ width: 45, height: 45 }}
				/>
			</TouchableOpacity>
				<Button title="Sair" onPress={() => setModalVisible(false)} />
			</Modal>
		</ViewPokemom>
	);
}
