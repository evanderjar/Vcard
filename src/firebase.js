// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

import 'firebase/storage'

import 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCHlCJ7LFu0ChWspxIWhge0rw_Z9N0ZwCk",
    authDomain: "prueba-app-1f667.firebaseapp.com",
    databaseURL: "https://prueba-app-1f667.firebaseio.com",
    projectId: "prueba-app-1f667",
    storageBucket: "prueba-app-1f667.appspot.com",
    messagingSenderId: "634074355477",
    appId: "1:634074355477:web:a21f93f08444f932f6bb1c",
    measurementId: "G-0JVQ3V6PLH"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage()
export const auth = firebase.auth();
