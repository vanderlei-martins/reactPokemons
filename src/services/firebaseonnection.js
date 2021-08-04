import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
    apiKey: "AIzaSyC6PvZZC5nkONoQzapfT6WWtHKQl9rQPOU",
    authDomain: "estudofirebase-52bae.firebaseapp.com",
    databaseURL: "https://estudofirebase-52bae-default-rtdb.firebaseio.com",
    projectId: "estudofirebase-52bae",
    storageBucket: "estudofirebase-52bae.appspot.com",
    messagingSenderId: "651535794965",
    appId: "1:651535794965:web:bbd3d4fa067328108e1f1c",
    measurementId: "G-KW1RFMLXEE"
}; 


// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

console.log(firebase.apps.length);
console.log('dentro config');
export default firebase;
