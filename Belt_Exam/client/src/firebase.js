import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyAKGlf0C_cl5ulFzRisXQbRevKcmL9E9Xo",
  authDomain: "shurikin-58d26.firebaseapp.com",
  projectId: "shurikin-58d26",
  storageBucket: "shurikin-58d26.appspot.com",
  messagingSenderId: "583108642034",
  appId: "1:583108642034:web:2de40755a861ba1822fc6b"
}).auth();