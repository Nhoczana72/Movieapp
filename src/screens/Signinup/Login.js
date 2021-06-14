import React, {useState} from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native';
import {View,Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import auth from '@react-native-firebase/auth'
import {Auth} from '../../components/firebase'


export const Signin = ({navigation}) => {
  const [valuesignin, setvaluesignup] =
    useState({
       
        email: '',
        password: '',
      
    });
    const [messages,setmessage]=useState('aaa')

    const login=()=>
    {
      if(valuesignin.email!=''&&valuesignin.password!=''){

      Auth()
      .signInWithEmailAndPassword(valuesignin.email,valuesignin.password)
      .then(()=>{
        Alert.alert(
          'Alert',
          `Wellcome ${valuesignin.email}`,
          [{text:'Go Home' ,onPress:()=>navigation.navigate('Navigator')}],
          
        )
    })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setmessage('That email address is already in use!')
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setmessage('That email address is invalid!')
  
        }
    
        console.error(error);
      });
    }
    else{setmessage('Email and password is null!') }
    }
    

  return (
    <View style={styles.container}>
    <Text style={styles.txtitle}>Sign In</Text>
    {messages? <View style={{alignItems:'center',height:20}} >
          <Text style={{color:'red'}}>{messages}</Text> 
          </View>
            :
            <View></View>}

    <TextInput
      style={styles.inputtx}
      value={valuesignin.email}
      placeholder="Email"
      onChangeText={value=>setvaluesignup(preState=>
        {return{...preState,email:value};
    })}></TextInput>
    <TextInput
      style={styles.inputtx}
      value={valuesignin.password}
      placeholder={'password'}
      secureTextEntry
      onChangeText={value=>setvaluesignup(preState=>
        {return{...preState,password:value};
    })}
    />
    <TouchableOpacity
      style={styles.btnlogin}
      onPress={login}
      >
      <Text style={styles.btntx}>Log In</Text>
    </TouchableOpacity>
    <View style={{flexDirection: 'row',marginVertical:10}}>
      <Text>Don't have an account?   </Text>
      <TouchableOpacity style={{backgroundColor: 'white'}}
            onPress={()=>navigation.navigate('Signup')}
        >
        <Text style={{color: 'blue'}}>Sign up</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.btnlogin}
      onPress={()=>navigation.navigate('Test')}      >
      <Text style={styles.btntx}>Log out</Text>
    </TouchableOpacity>
  </View>
);
};
