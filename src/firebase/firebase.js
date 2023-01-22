// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function setNote(note) {
  const collectionRef = collection(db, "Notes");
  const docRef = doc(collectionRef);
  await setDoc(docRef, note);
}

export async function getNotes() {
  try {
    const data = [];
    const collectionRef = collection(db, "Notes");
    const q = query(collectionRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const note = { ...doc.data() };
      note.docId = doc.id;
      data.push(note);
    });
    return data;
  } catch (error) {
    throw new Error("Error en getNotes -> ", error);
  }
}

export function realTimeChanges(callback) {
  const collectionRef = collection(db, "Notes");
  const q = query(collectionRef, orderBy("date", "desc"));
  onSnapshot(q, callback);
}

export async function updateNote(docId, data) {
  const collectionRef = collection(db, "Notes");
  const docRef = doc(collectionRef, docId);
  await updateDoc(docRef, data);
}
