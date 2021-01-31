import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBT-V98-NC5VlCXspAMVwvGrDgWb1OpyZ4",
  authDomain: "signal-clone-3f021.firebaseapp.com",
  projectId: "signal-clone-3f021",
  storageBucket: "signal-clone-3f021.appspot.com",
  messagingSenderId: "1046077775169",
  appId: "1:1046077775169:web:fa16a3c182660c369fd5c0"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }; 