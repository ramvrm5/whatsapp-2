import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKU-qHaa_iF0XghrmaoLwsaaVT2pcRB-8",
    authDomain: "whatsapp-2-e9e11.firebaseapp.com",
    projectId: "whatsapp-2-e9e11",
    storageBucket: "whatsapp-2-e9e11.appspot.com",
    messagingSenderId: "362729453493",
    appId: "1:362729453493:web:13d08497e1f7e8e5c04bfc"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };