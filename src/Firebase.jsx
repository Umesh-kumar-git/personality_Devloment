import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC8o3S-ode2_ZIVAVUXZ8s5_FWBe2Im9tw",
    authDomain: "onilinecourse.firebaseapp.com",
    projectId: "onilinecourse",
    storageBucket: "onilinecourse.appspot.com",
    messagingSenderId: "1027061889382",
    appId: "1:1027061889382:web:5da1ed1dabab1f648870a7"
  };

  export const App = initializeApp(firebaseConfig)

  export const auth = getAuth(App);
