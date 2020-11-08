import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3-wBINijDhmRT4PrpCDDbVyGkMIFiBX8",
  authDomain: "line-auction-backend.firebaseapp.com",
  databaseURL: "https://line-auction-backend.firebaseio.com",
  projectId: "line-auction-backend",
  storageBucket: "line-auction-backend.appspot.com",
  messagingSenderId: "530443888720",
  appId: "1:530443888720:web:4f93df8066b3c15ec38955",
  measurementId: "G-D33DWW6XX2"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { firestore,firebase as default };
