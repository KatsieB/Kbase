import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSENGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
});

// Initialize services with the 'firebaseApp' property
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
// export const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

// force the provider to offer Google account selection
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};

export const signOutUser = async () => await signOut(auth);
