import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDYeLicFSBgv8fd8cAJjLjDIcxNKpYb7Oo",
    authDomain: "linkedin-clone-sc-2470d.firebaseapp.com",
    projectId: "linkedin-clone-sc-2470d",
    storageBucket: "linkedin-clone-sc-2470d.appspot.com",
    messagingSenderId: "861724847105",
    appId: "1:861724847105:web:d1069471bfbcaf7b652400"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

//  for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };