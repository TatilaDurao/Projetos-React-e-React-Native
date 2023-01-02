import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjBV4b4k4I98i1sk_0AYhbqHgTks4CcG4",
  authDomain: "wireless-buzzer-41bc0.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-41bc0-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-41bc0",
  storageBucket: "wireless-buzzer-41bc0.appspot.com",
  messagingSenderId: "522222738489",
  appId: "1:522222738489:web:1f1e2da05226f459db01e8"
};

 
// Inicialize o Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()