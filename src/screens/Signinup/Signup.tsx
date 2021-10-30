import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { Auth } from '../../components/firebase'
import firestore from '@react-native-firebase/firestore'
export function Signup({ navigation }) {
  const [valuesignup, setvaluesignup] = useState({
    email: '',
    password: '',
    lname: '',
    yourphone: '',
    fname: ''
  });
  const [createfisestore, setcreate] = useState(false)
  const [message, setmessage] = useState('')
  const [repassword, setrepassword] = useState('')

  const change=()=>{
      if(repassword!=valuesignup.password){return setmessage('value repassword different password')}
      else{return setmessage('')}
      
  }
  const register = () => {
    if (valuesignup.email != '' && valuesignup.password != '') {

      Auth()
        .createUserWithEmailAndPassword(valuesignup.email.toLowerCase(), valuesignup.password)

        .then(() => {
          setmessage('regited email is success')

          login()
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setmessage('That email address is already in use!')
          }

          if (error.code === 'auth/invalid-email') {
            setmessage('That email address is invalid!')

          }



          console.error(error);
        });

    }
    else { setmessage('Email and password is null!') }
  }
  const login = () => {
    firestore()
      .collection('user')
      .doc(valuesignup.email.toLowerCase()).set({
        email: valuesignup.email.toLowerCase(),
        password: valuesignup.password,
        lname: valuesignup.lname,
        fname: valuesignup.fname,
        yourphone: valuesignup.yourphone,
        address: '-',
        gender: 'male',
        birthday: '01/01/1999'
      })


    navigation.navigate('Login')

  }



  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>

          <View style={{ alignItems: 'center',height:'100%',justifyContent:'center' }}>
            <Text style={styles.txtitle}>Sign Up</Text>
            {message ? <View style={{ alignItems: 'center', height: 20 }} >
              <Text style={{ color: 'red' }}>{message}</Text>
            </View>
              :
              <View></View>}
            <TextInput
              style={styles.inputtx}
              value={valuesignup.fname}
              onChangeText={value => setvaluesignup(preState => {
                return { ...preState, fname: value };
              })}
              placeholder="First Name"></TextInput>
            <TextInput
              style={styles.inputtx}
              value={valuesignup.lname}
              onChangeText={value => setvaluesignup(preState => {
                return { ...preState, lname: value };
              })}
              placeholder="Last Name"></TextInput>
            <TextInput
              style={styles.inputtx}
              value={valuesignup.email}
              onChangeText={value => setvaluesignup(preState => {
                return { ...preState, email: value };
              })}
              placeholder="Email"></TextInput>
            <TextInput
              style={styles.inputtx}
              value={valuesignup.password}
              placeholder={'Password'}
              onChangeText={value => setvaluesignup(preState => {
                return { ...preState, password: value };
              })}
              secureTextEntry
            />
            <TextInput
              style={styles.inputtx}
              value={repassword}
              placeholder={'Repeat password'}
              onChangeText={value => {setrepassword(value); return(change())}}
              secureTextEntry
            />
            <TextInput
              style={styles.inputtx}
              value={valuesignup.yourphone}
              onChangeText={value => setvaluesignup(preState => {
                return { ...preState, yourphone: value };
              })}
              placeholder="Your Phone"></TextInput>
            <TouchableOpacity
              style={styles.btnlogin}>
              <Text style={styles.btntx}
                onPress={register}
              >Sign Up</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <Text>Allreary have an account?   </Text>
              <TouchableOpacity style={{ backgroundColor: 'white' }}
                onPress={()=>    navigation.navigate('Login')
              }
              >
                <Text style={{ color: 'blue' }}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>

      </ScrollView>
    </View>


  );
};
