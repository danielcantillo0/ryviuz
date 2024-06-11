// firebaseConfig.js

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "${{secrets.API_KEY }}",

    authDomain: "ryviuz-619f4.firebaseapp.com",
  
    projectId: "ryviuz-619f4",
  
    storageBucket: "ryviuz-619f4.appspot.com",
  
    messagingSenderId: "783683615371",
  
    appId: "1:783683615371:web:b21c160a908ef363fc728e",
  
    measurementId: "G-1Q7SBRF3BN"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
