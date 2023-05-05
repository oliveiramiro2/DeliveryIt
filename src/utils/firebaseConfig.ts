// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAlrTmRq4pEE6_-iveLoL5r0ZiLgttNoj4',
    authDomain: 'delivery-it-f6a84.firebaseapp.com',
    projectId: 'delivery-it-f6a84',
    storageBucket: 'delivery-it-f6a84.appspot.com',
    messagingSenderId: '372631897920',
    appId: '1:372631897920:web:0daa4e03bc5c5a91595ca5',
    measurementId: 'G-C5MLNRNE31'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
