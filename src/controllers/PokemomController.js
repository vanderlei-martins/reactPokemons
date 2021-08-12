import { useState } from "react";
import firebase from "../services/firebaseonnection";


export async function marcarComoFavorito(id){
    await firebase.database().ref('favoritos').child(id).set(true);
}

export async function removerDoFavorito(id){
    await firebase.database().ref('favoritos').child(id).remove();
}