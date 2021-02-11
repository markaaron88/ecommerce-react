import firebase from "firebase/app";
//firebase db storage
import "firebase/firestore";
//firebae auth
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1mXgdbkP8-jGKyy7n3a8_62CPhXoOyoc",
  authDomain: "e-commdb-cde98.firebaseapp.com",
  projectId: "e-commdb-cde98",
  storageBucket: "e-commdb-cde98.appspot.com",
  messagingSenderId: "668374413252",
  appId: "1:668374413252:web:454d28d490ed0441293e91",
  measurementId: "G-YQ260XRGEG",
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
