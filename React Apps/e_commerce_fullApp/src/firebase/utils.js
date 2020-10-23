import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

//connect to firebase db
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//function on click event on button
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

//function for user profile
export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uId } = userAuth;

    //check if user exists in user collection:
    const userRef = firestore.doc(`users/${uId}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            });
        } catch(err) {
            //console.log(error);
        }
    }

    return userRef; //document use to store user info in local state of app
};
