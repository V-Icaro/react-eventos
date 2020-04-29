import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqSiUPpkJRQV2W1965SGHQTubAbcD3FRs",
    authDomain: "eventos-c7367.firebaseapp.com",
    databaseURL: "https://eventos-c7367.firebaseio.com",
    projectId: "eventos-c7367",
    storageBucket: "eventos-c7367.appspot.com",
    messagingSenderId: "241675138430",
    appId: "1:241675138430:web:d1455ade3cbc9bc6816f2f"
  };
  
  // Initialize Firebase

  export default firebase.initializeApp(firebaseConfig);