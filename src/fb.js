import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsq5IPh6wq7lmcRMXEeOkF0j5psuUwrho',
  authDomain: 'todo-ninja-366d8.firebaseapp.com',
  databaseURL: 'https://todo-ninja-366d8.firebaseio.com',
  projectId: 'todo-ninja-366d8',
  storageBucket: 'todo-ninja-366d8.appspot.com',
  messagingSenderId: '52079806757',
  appId: '1:52079806757:web:72de614cc985cd64',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// database
const db = firebase.firestore();

export default db;
