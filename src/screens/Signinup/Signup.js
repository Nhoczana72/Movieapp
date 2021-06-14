import React, {useState} from 'react';
import {View, Text,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Auth} from '../../components/firebase'
import firestore from '@react-native-firebase/firestore'
export function Signup({navigation})  {
    console.log('propss',navigation)
  const [valuesignup, setvaluesignup] = useState({
    email: '',
    password: '',
    lname:'',
    yourphone:''
  });
  const [createfisestore,setcreate]=useState(false)
  const [message,setmessage]=useState('')
  const register=()=>{
      if(valuesignup.email!=''&&valuesignup.password!=''){

    Auth()
    .createUserWithEmailAndPassword(valuesignup.email, valuesignup.password)
    .then(() => {
      setmessage('regited email is success')
      setcreate(true)
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
    else{setmessage('Email and password is null!') }
  }
  const login=()=>{
    if(createfisestore==true){
    firestore()
    .collection('user')
    .doc(valuesignup.email).set({
      email:valuesignup.email,
      password:valuesignup.password,
      name: valuesignup.lname,
      yourphone:valuesignup.yourphone
    })

  }
    navigation.navigate('Login')
    
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.txtitle}>Sign Up</Text>
      {message? <View style={{alignItems:'center',height:20}} >
          <Text style={{color:'red'}}>{message}</Text> 
          </View>
            :
            <View></View>}
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
        style={styles.btnlogin}>
        <Text style={styles.btntx}
        onPress={register}
        >Sign Up</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row',marginVertical:10}}>
        <Text>Allreary have an account?   </Text>
        <TouchableOpacity style={{backgroundColor: 'white'}}
            onPress={login}
        >
          <Text style={{color: 'blue'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
