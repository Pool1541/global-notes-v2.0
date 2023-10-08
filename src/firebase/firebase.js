import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  initializeFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const databaseId = process.env.REACT_APP_MODE === 'test' ? 'global-notes-app-test' : '';
const db = initializeFirestore(app, {}, databaseId);

export async function setNote(note) {
  const collectionRef = collection(db, 'Notes');
  const docRef = doc(collectionRef);
  await setDoc(docRef, note);
}

export async function getNotes() {
  try {
    const data = [];
    const collectionRef = collection(db, 'Notes');
    const q = query(collectionRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const note = { ...doc.data() };
      note.docId = doc.id;
      data.push(note);
    });
    return data;
  } catch (error) {
    throw new Error('Error en getNotes -> ', error);
  }
}

export function realTimeChanges(callback) {
  const collectionRef = collection(db, 'Notes');
  const q = query(collectionRef, orderBy('date', 'desc'));
  onSnapshot(q, callback);
}

export async function updateNote(docId, data) {
  const collectionRef = collection(db, 'Notes');
  const docRef = doc(collectionRef, docId);
  await updateDoc(docRef, data);
}
