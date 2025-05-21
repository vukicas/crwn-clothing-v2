import {initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlJUH2zvjJVyHnse4bdc8ljN3lfR8j4oE",
    authDomain: "crwn-clothing-8d804.firebaseapp.com",
    projectId: "crwn-clothing-8d804",
    storageBucket: "crwn-clothing-8d804.firebasestorage.app",
    messagingSenderId: "405748799983",
    appId: "1:405748799983:web:81b56477a84d00478cbe1a",
    measurementId: "G-050XMXM1PP"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const sigInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);


  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,

        });
      } catch(error){
        console.log('Error Creating thevUser ', error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async(email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
    
    
  }

  export const signInAuthWithEmailAndPassword = async(email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
    
    
  }
