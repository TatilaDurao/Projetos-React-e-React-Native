import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDczq4EfNCozEc6oCpSmxe8TqoSVW8fItY",
    authDomain: "c59-newsletter.firebaseapp.com",
    databaseURL: "https://c59-newsletter.firebaseio.com",
    projectId: "c59-newsletter",
    storageBucket: "c59-newsletter.appspot.com",
    messagingSenderId: "238710533242",
    appId: "1:238710533242:web:0448e71a22c6b967ec1fc3"
  };
  // Inicializar o Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();