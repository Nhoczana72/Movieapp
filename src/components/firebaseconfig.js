import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBB3RFFfHUw3pZWOKni9VUC8jP8NFN0FVA",
    authDomain: "movie-ticket-booking-9e60a.firebaseapp.com",
    projectId: "movie-ticket-booking-9e60a",
    storageBucket: "movie-ticket-booking-9e60a.appspot.com",
    messagingSenderId: "443820605697",
    appId: "1:443820605697:web:b183d31df6475b93ee1b00",
    measurementId: "G-6JDK62TJFD"
  };
  // Initialize Firebase
  export const firebaseApp= firebase.initializeApp(firebaseConfig);
  export const db=firebase.firestore(firebaseApp)