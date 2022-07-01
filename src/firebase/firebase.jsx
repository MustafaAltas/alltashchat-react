import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyBL76ZLceEAyrc6o11hpiKyRJjeAV-HY98",
  // authDomain: "alltashchat.firebaseapp.com",
  // projectId: "alltashchat",
  // storageBucket: "alltashchat.appspot.com",
  // messagingSenderId: "856244498496",
  // appId: "1:856244498496:web:401d9b53f5898c9a242fa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



export const writeToData = async (messageText, user, imageUrl) => {
  await addDoc(collection(db, "messages"), {
    date: serverTimestamp(),
    text: messageText,
    user: user,
    image: imageUrl,
    
  });
};

export default getFirestore();
