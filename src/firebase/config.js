import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRir34WEz_8cdqvechlEhXNm5mO6-51r0",
  authDomain: "vue-course-firebase.firebaseapp.com",
  projectId: "vue-course-firebase",
  storageBucket: "vue-course-firebase.appspot.com",
  messagingSenderId: "417002873312",
  appId: "1:417002873312:web:6e3f2794235fd2fcce4b85",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
