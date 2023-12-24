<<<<<<< HEAD
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyANDmCcgvVfEvMahmF0dF_GDdrOTknjRoo',
  authDomain: 'music-685d7.firebaseapp.com',
  projectId: 'music-685d7',
  storageBucket: 'music-685d7.appspot.com',
  messagingSenderId: '751332409860',
  appId: '1:751332409860:web:ecf543b4ec002cd87a6b51',
  measurementId: 'G-SJTFLJL4K8'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users')
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export { auth, db, usersCollection,storage,songsCollection,commentsCollection, }
=======
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyANDmCcgvVfEvMahmF0dF_GDdrOTknjRoo',
  authDomain: 'music-685d7.firebaseapp.com',
  projectId: 'music-685d7',
  storageBucket: 'music-685d7.appspot.com',
  messagingSenderId: '751332409860',
  appId: '1:751332409860:web:ecf543b4ec002cd87a6b51',
  measurementId: 'G-SJTFLJL4K8'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users')
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export { auth, db, usersCollection,storage,songsCollection,commentsCollection, }
>>>>>>> e8b6db1 (Music App)
