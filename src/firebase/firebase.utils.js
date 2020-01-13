import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyA89AVWorMrmyHtf8s4UdW_AEIORPtL7eY",
    authDomain: "crwn-db-b27d7.firebaseapp.com",
    databaseURL: "https://crwn-db-b27d7.firebaseio.com",
    projectId: "crwn-db-b27d7",
    storageBucket: "crwn-db-b27d7.appspot.com",
    messagingSenderId: "814070581310",
    appId: "1:814070581310:web:1fda55e4422e4bb684696f",
    measurementId: "G-3H7376XSC8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase