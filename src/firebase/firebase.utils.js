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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        } catch (err) {
            console.log('error creating user: ', err.message)
        }
    };

    return userRef;
    }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase