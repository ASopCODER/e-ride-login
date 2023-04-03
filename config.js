import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC-Q98xdDW1ZDEjj_jmEydKQ-BJKz3evXo",
  authDomain: "e---ride-f22d5.firebaseapp.com",
  projectId: "e---ride-f22d5",
  storageBucket: "e---ride-f22d5.appspot.com",
  messagingSenderId: "13999374172",
  appId: "1:13999374172:web:264219298e8b4fab54cb99"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
