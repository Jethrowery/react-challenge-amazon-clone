import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0HZmQeTnElcdqPrQWA4Vz1NtAF4cke_E",
  authDomain: "clone1-ac9bc.firebaseapp.com",
  databaseURL: "https://clone1-ac9bc.firebaseio.com",
  projectId: "clone1-ac9bc",
  storageBucket: "clone1-ac9bc.appspot.com",
  messagingSenderId: "237525711077",
  appId: "1:237525711077:web:7dae55563ed7fe26363c0c",
  measurementId: "G-LSC0GH6SEZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };