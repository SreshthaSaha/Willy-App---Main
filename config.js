import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyALknTQGTSiyy1gbzU084myHjGKhXrvz4g",
  authDomain: "wily-app-4bf97.firebaseapp.com",
  databaseURL: "https://wily-app-4bf97.firebaseio.com",
  projectId: "wily-app-4bf97",
  storageBucket: "wily-app-4bf97.appspot.com",
  messagingSenderId: "103659536510",
  appId: "1:103659536510:web:1f6eeb69103d8cb3aa982f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
