import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCi4HEdXQA64aF3Lf63hribBGBIMI7xNMk",
    authDomain: "slack-bad21.firebaseapp.com",
    projectId: "slack-bad21",
    storageBucket: "slack-bad21.appspot.com",
    messagingSenderId: "713824331997",
    appId: "1:713824331997:web:fd62253b217e15539a1334"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }