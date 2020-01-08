import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAJM1dsmCOWdayRc4ohxQoNCkrlBhSECsg",
    authDomain: "coffeeshops-database.firebaseapp.com",
    databaseURL: "https://coffeeshops-database.firebaseio.com",
    projectId: "coffeeshops-database",
    storageBucket: "coffeeshops-database.appspot.com",
    messagingSenderId: "430651409692",
    appId: "1:430651409692:web:105cc806d3eba173ca26d9",
    measurementId: "G-XHQ2J3Z0JF",
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()