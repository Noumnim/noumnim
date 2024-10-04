
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDAu0XpeOhkLDPwxhC3ExDVTIqn9vTD-Y",
  authDomain: "noumnim-portfolio.firebaseapp.com",
  projectId: "noumnim-portfolio",
  storageBucket: "noumnim-portfolio.appspot.com",
  messagingSenderId: "631862634113",
  appId: "1:631862634113:web:e179f3eb0b90c676b50f80",
  measurementId: "G-6L17QMG0WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);