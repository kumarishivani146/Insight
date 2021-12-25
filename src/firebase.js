import firebase from 'firebase/compat'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC6ZnO5w40sy_72K77lmHHuPzlt9BUVh6k",
    authDomain: "insight-68edd.firebaseapp.com",
    projectId: "insight-68edd",
    storageBucket: "insight-68edd.appspot.com",
    messagingSenderId: "535009375934",
    appId: "1:535009375934:web:21326a930aee7166d010ef",
    measurementId: "G-Z25BWTLF7H"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const db=firebaseApp.firestore();
  export {auth,provider};
  export default db;