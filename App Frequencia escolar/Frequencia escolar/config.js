import firebase from "firebase"

 const firebaseConfig = {
  apiKey: "AIzaSyCiJvGqWlKwJpaorOt588Wlo4kVAJ_8gh4",
  authDomain: "myproject-eb605.firebaseapp.com",
  databaseURL: "https://myproject-eb605-default-rtdb.firebaseio.com",
  projectId: "myproject-eb605",
  storageBucket: "myproject-eb605.appspot.com",
  messagingSenderId: "1096860836694",
  appId: "1:1096860836694:web:fbfbdb85264a241a9c2cf7"
};

  firebase.initializeApp(firebaseConfig)


export default firebase.database()