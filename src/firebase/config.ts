//firebase

import { initializeApp } from 'firebase/app'
import { 
    getFirestore
} from 'firebase/firestore'
import {
    getAuth
} from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQZwWY8kDuF7oxkLApgc0wAxTdMcGIgg4",
    authDomain: "eifwebapp.firebaseapp.com",
    projectId: "eifwebapp",
    storageBucket: "eifwebapp.appspot.com",
    messagingSenderId: "254549578127",
    appId: "1:254549578127:web:538af56659bbc325563bfa",
    measurementId: "G-5CCC07ZT18"
};

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

// f needed in vusjs route guard beforeEach
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export { auth, db, getCurrentUser }