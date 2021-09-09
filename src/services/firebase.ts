import { FirebaseOptions, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";

export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyALqLSFP6fPCpxM0atHeUWniWJPr5f5Blk",
  authDomain: `soothe-81aaa.firebaseapp.com`,
  projectId: "soothe-81aaa",
  storageBucket: `soothe-81aaa.appspot.com`,
  messagingSenderId: "799604393262",
  appId: "1:799604393262:web:b0c19b0a970299097726bf",
  measurementId: "G-D61LW4TQ1V"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

export async function googleSignIn() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const memberRef = doc(db, "users", user.uid);
    const memberSnap = await getDoc(memberRef);

    if (!memberSnap.exists()) {
      console.log('No document exists, we will create one');
      const newUser = doc(db, "users", user.uid);
      await setDoc(newUser, { role: "member" });
    }

    localStorage.setItem("soothe-token", JSON.stringify(token));
  } catch (e) {
    console.error(e);
  }
}
