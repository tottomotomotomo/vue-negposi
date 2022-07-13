import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// copy from FireBase
const firebaseConfig = {
  apiKey: [apiKey],
  authDomain: [authDomain],
  projectId: [projectId],
  storageBucket: [storageBucket],
  messagingSenderId: [messagingSenderId],
  appId: [appId],
  measurementId: [measurementId],
  databaseURL: [databaseURL],
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount("#app");
