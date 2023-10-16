// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEKqMKR9Bhb1o7ew31_tg-xqdTHddSwdc',
  authDomain: 'recipes-ai-5e101.firebaseapp.com',
  projectId: 'recipes-ai-5e101',
  storageBucket: 'recipes-ai-5e101.appspot.com',
  messagingSenderId: '1059318991734',
  appId: '1:1059318991734:web:3ac8eccf9618a05b7d8857',
  measurementId: 'G-KF1R90J1HR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth();

export const googleAuthProvider = new GoogleAuthProvider();

if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(firebaseAuth, 'http://127.0.0.1:9099');
}
