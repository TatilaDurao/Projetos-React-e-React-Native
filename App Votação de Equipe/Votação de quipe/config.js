import firebase from 'firebase';

  /* /var firebaseConfig = {
    apiKey: "AIzaSyBpxcDgEguZ7oeqEEI-IS8PF6xKpwrY05E",
    authDomain: "teamvotingapp.firebaseapp.com",
    databaseURL: "https://teamvotingapp-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp",
    storageBucket: "teamvotingapp.appspot.com",
    messagingSenderId: "990395711535",
    appId: "1:990395711535:web:e2dac63cea3c596561c6da"
  }; */
const firebaseConfig = {
  apiKey: "AIzaSyCTqalagJQ2JuoelEFMfDYELoz0RuQjb7E",
  authDomain: "aulateste-29020.firebaseapp.com",
  projectId: "aulateste-29020",
  storageBucket: "aulateste-29020.appspot.com",
  messagingSenderId: "121026569256",
  appId: "1:121026569256:web:a86cba956e9356557b811d"
};

// Initialize Firebase

  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();