import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-6XjrdGqUkYCKuC6yGJzVHK_ZTvDY960",
    authDomain: "efficient-kitchen.firebaseapp.com",
    projectId: "efficient-kitchen",
    storageBucket: "efficient-kitchen.appspot.com",
    messagingSenderId: "519643401307",
    appId: "1:519643401307:web:738c0f01e01845e5bb037e"
};

const app = createApp(App)

app.use(router);
app.mount('#app')

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
