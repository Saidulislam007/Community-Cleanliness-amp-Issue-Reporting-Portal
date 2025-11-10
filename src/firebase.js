// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// Firebase config (communitycleanportal)
const firebaseConfig = {
  apiKey: "AIzaSyB3Zuqd4gWKhnCKnYdnTJgqLSBmkHtc144",
  authDomain: "communitycleanportal.firebaseapp.com",
  projectId: "communitycleanportal",
  storageBucket: "communitycleanportal.appspot.com",
  messagingSenderId: "759579066609",
  appId: "1:759579066609:web:7aadfd022d64b08600e950",
  measurementId: "G-G1NPEJ3J5N", // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Google Sign-in function
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    });
  }

  return user;
};
