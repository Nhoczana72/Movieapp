import React, { Component, useState, useEffect } from 'react';
import { db } from '../../components/firebaseconfig'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore/lib/index';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database'
import firebase from '@react-native-firebase/app'
import {Auth} from '../../components/firebase'
import { PermissionsAndroid } from 'react-native';
import lodash from 'lodash'
import {userSubmit} from '../../components/firebase'
import styles from './style'
export function Test ({navigation}) {
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  

  const [valuesignup, setvaluesignup] = useState({
    email: user.email,
    password: '',
    lname:'',
    yourphone:''
  });
  
  const usersCollection = firestore().collection('user').doc(valuesignup.email).set({
    name: 'Ada Lovelace',
    age: 30,
  })
  console.log('user',usersCollection)
  const [Id,setId]=React.useState('')
  const submituser=()=>{
    new Promise(function(resolve,reject){
      let key;
      if(Id!=null){
        key=Id;
      }
      else{
        key=firebase.database()
        .ref()
        .push().key;
      }
      let dataToSave={
        id:key,
        email:valuesignup.email,
        password:valuesignup.passwword,
        name:valuesignup.lname,
        yourphone:valuesignup.yourphone
      };
     firebase.database().ref('users').set(dataToSave).then((snapshot)=>{
        resolve(snapshot)
      }).catch((err)=>{
        reject(err);
      })
    });
    const reference = database().ref('/users');
    console.log('rêr',reference)
  };

    const saveuser=()=>{
     userSubmit(1,'Thiên thiên')
      .then(() => console.log('Data updated.'));
    }

  // subscriber = async () => {
  //   const sub = firestore().collection('UUU').doc('01').onSnapshot(doc => {
  //     this.setState({
  //       user: {
  //         name: doc._data.Name,
  //         class: doc._data.Class
  //       }
  //     })
  //   })
  // }


  // realdb=async()=>{
  //   const a=await database().ref() ;
  //   console.log(a)
  // }


  // getUsers = async () => {
  //   const usersdoc = await firestore().collection("UUU").
  //     doc('02').get();
  //   console.log('user', usersdoc)

  // }
  
    // const db=()=>{
    //   userSubmit(1,'Hi')
    // }
    return (
      <View style={styles.container}>
      <Text style={styles.txtitle}>DATABASE</Text>
     
      <TextInput
        style={styles.inputtx}
        value={valuesignup.lname}
        onChangeText={value=>setvaluesignup(preState=>
            {return{...preState,lname:value};
        })}
        placeholder="Name"></TextInput>
      <TextInput
        style={styles.inputtx}
        value={valuesignup.email}
        onChangeText={value=>setvaluesignup(preState=>
            {return{...preState,email:value};
        })}
        placeholder="Email"></TextInput>
      <TextInput
        style={styles.inputtx}
        value={valuesignup.password}
        placeholder={'Password'}
        onChangeText={value=>setvaluesignup(preState=>
            {return{...preState,password:value};
        })}
        secureTextEntry
      />
      <TextInput
        style={styles.inputtx}
        value={valuesignup.yourphone}
        onChangeText={value=>setvaluesignup(preState=>
            {return{...preState,yourphone:value};
        })}
        placeholder="Your Phone"></TextInput>
      <TouchableOpacity
        style={styles.btnlogin}
        onPress={()=>saveuser()}>
          
        <Text style={styles.btntx}
       
        >Save</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row',marginVertical:10}}>
        <Text>Allreary have an account?   </Text>
        <TouchableOpacity style={{backgroundColor: 'white'}}
            
        >
          <Text style={{color: 'blue'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  
}