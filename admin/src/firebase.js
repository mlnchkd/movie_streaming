import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn2XBJUtqOfeovz4EueEBdTzT0EdEvWAo",
  authDomain: "moviestreaming-62863.firebaseapp.com",
  projectId: "moviestreaming-62863",
  storageBucket: "moviestreaming-62863.appspot.com",
  messagingSenderId: "434845684271",
  appId: "1:434845684271:web:3f13bd1b3fce1d09996cda",
  measurementId: "G-WVCX8M4M7S"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
