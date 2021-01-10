import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    "projectId": "shop-img-repo",
    "appId": "1:878198398721:web:e7e02fa1c4d92e19b84500",
    "storageBucket": "shop-img-repo.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBzUePODWlLC5jSucHoATRidqyc5GUMa9M",
    "authDomain": "shop-img-repo.firebaseapp.com",
    "messagingSenderId": "878198398721"
  });

  const storage = firebase.storage();
  const db = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
  const auth = firebase.auth();

  export { storage, db , timeStamp, auth};
  