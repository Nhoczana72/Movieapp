import database from '@react-native-firebase/database'
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBB3RFFfHUw3pZWOKni9VUC8jP8NFN0FVA",
    authDomain: "movie-ticket-booking-9e60a.firebaseapp.com",
    databaseURL: "https://movie-ticket-booking-9e60a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "movie-ticket-booking-9e60a",
    storageBucket: "movie-ticket-booking-9e60a.appspot.com",
    messagingSenderId: "443820605697",
    appId: "1:443820605697:web:b183d31df6475b93ee1b00",
    measurementId: "G-6JDK62TJFD"
  };
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export {firebase,database,Auth}


export const userSubmit=(id,Name)=>{
    return new Promise(function(resolve,reject){
        let key;
        if(id!=null){
            key=id;

        }
        else{
            key=database().ref().push().key;
        }

        let datatosave={
            id:key,
            Name:Name
        };
        database().ref('users')
        .update(datatosave)
        .then(snapshot=>{
            resolve(snapshot);
        })
        .catch(err=>{reject(err)});
    })
}