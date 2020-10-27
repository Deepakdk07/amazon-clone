import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeOcMfj25TGGle3WxFs0uYAlpUfW883ss",
    authDomain: "clone-4321d.firebaseapp.com",
    databaseURL: "https://clone-4321d.firebaseio.com",
    projectId: "clone-4321d",
    storageBucket: "clone-4321d.appspot.com",
    messagingSenderId: "1021879078301",
    appId: "1:1021879078301:web:5a84e62f311cf53827f374",
    measurementId: "G-W1LXT7RBBJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };