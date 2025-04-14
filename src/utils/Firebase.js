/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcDqTRAscAJQRCx0bjKwofHbMrTmTt4KM',
  authDomain: 'netflix-gpt-4ff14.firebaseapp.com',
  projectId: 'netflix-gpt-4ff14',
  storageBucket: 'netflix-gpt-4ff14.firebasestorage.app',
  messagingSenderId: '558077636727',
  appId: '1:558077636727:web:8aa3c8fddf8dca47ca5672',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
