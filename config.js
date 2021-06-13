import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAYd0PmZVGk_pxOd1EDJ3I2pH-OyoU7VJM",
    authDomain: "virtual-pet-1-b8a56.firebaseapp.com",
    projectId: "virtual-pet-1-b8a56",
    storageBucket: "virtual-pet-1-b8a56.appspot.com",
    messagingSenderId: "665823765341",
    appId: "1:665823765341:web:09785a755919dcc5fb7eb4"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
