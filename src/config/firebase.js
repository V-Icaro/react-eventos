import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALdzYzuVP99scIIWu1RdvvMHpL-rqdFmE",
    authDomain: "eventos-1119b.firebaseapp.com",
    databaseURL: "https://eventos-1119b.firebaseio.com",
    projectId: "eventos-1119b",
    storageBucket: "eventos-1119b.appspot.com",
    messagingSenderId: "304142639336",
    appId: "1:304142639336:web:e386e888bd901c0fb4e95d"
  };
  
  // Initialize Firebase

  export default firebase.initializeApp(firebaseConfig);

  