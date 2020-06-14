import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5iD6GADhAXU7yl6vhjyaikPFybB9n5lI",
  authDomain: "cati-e0320.firebaseapp.com",
  databaseURL: "https://cati-e0320.firebaseio.com",
  projectId: "cati-e0320",
  storageBucket: "cati-e0320.appspot.com",
  messagingSenderId: "750073173015",
  appId: "1:750073173015:web:af718cf41f1a239f133852"
};
  
  // Initialize Firebase

  export default firebase.initializeApp(firebaseConfig);

  