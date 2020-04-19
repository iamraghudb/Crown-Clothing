import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7vPVo4EaD8IrCaQ5lw341uQzOsSRCQ7s",
  authDomain: "crown-clothing-9918b.firebaseapp.com",
  databaseURL: "https://crown-clothing-9918b.firebaseio.com",
  projectId: "crown-clothing-9918b",
  storageBucket: "crown-clothing-9918b.appspot.com",
  messagingSenderId: "1080580085563",
  appId: "1:1080580085563:web:58e2ce2fbc257beffbc91e",
  measurementId: "G-LLLD9RY1RK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
