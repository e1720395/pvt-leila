import fbAppli from 'firebase/app';
import 'firebase/firestore';

// Ajouter objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlIpl3cr-OD6mXTLf07CjmdGmSUV_BriM",
  authDomain: "veille-techno-1720395.firebaseapp.com",
  projectId: "veille-techno-1720395",
  storageBucket: "veille-techno-1720395.appspot.com",
  messagingSenderId: "851566208779",
  appId: "1:851566208779:web:74981719b8a49c1e32a40e",
  measurementId: "G-6D06L77RZG"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();

