import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB41_nCU1ZSx7oNV6JJiGVZRuTkCAr3aIY",
  authDomain: "album-app-74405.firebaseapp.com",
  databaseURL: "https://album-app-74405.firebaseio.com",
  projectId: "album-app-74405",
  storageBucket: "album-app-74405.appspot.com",
  messagingSenderId: "710328217185",
  appId: "1:710328217185:web:ad5e6288c0f2cc82404420",
  measurementId: "G-1BB6171VNE"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();

export function snapshotToArray(snapshot) {
  const updatedArray = [];
  snapshot.forEach(s => {
    const data = s.data();
    data.id = s.id;
    updatedArray.push(data);
  });
  return updatedArray;
}
