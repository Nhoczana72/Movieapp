import React, {useState} from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native';
import {View,Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import {Auth} from '../../components/firebase'



export const Signin = ({navigation}) => {
  const [valuesignin, setvaluesignup] =
    useState({
        email: '',
        password: '',
    });
    const [messages,setmessage]=useState('')

    const login=()=>
    {
      if(valuesignin.email!=''&&valuesignin.password!=''){

      Auth()
      .signInWithEmailAndPassword(valuesignin.email.toLowerCase(),valuesignin.password)
      .then(()=>{
        Alert.alert(
          'Alert',
          `Wellcome ${valuesignin.email}`,
        ) ;navigation.navigate('Navigator')
    })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setmessage('That email address is already in use!')
        }
    
        if (error.code === 'auth/invalid-email') {
          setmessage('That email address is invalid!')
  
        }
        if (error.code === 'auth/user-not-found') {
          setmessage('That email address is not found!')
  
        }    
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
      placeholder={'Password'}
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
  </View>
);
};
