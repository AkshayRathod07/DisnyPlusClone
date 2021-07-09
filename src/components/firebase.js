import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};
// var firebaseConfig = {
//   apiKey: "AIzaSyD4GOZYymyvkvh8OsBbcnn2kHYqSlJ1sO4",
//   authDomain: "disney-clone-2.firebaseapp.com",
//   projectId: "disney-clone-2",
//   storageBucket: "disney-clone-2.appspot.com",
//   messagingSenderId: "503082834331",
//   appId: "1:503082834331:web:3d4e5c536694bd5048693e"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
