import React, {useEffect, useState, Dispatch} from 'react';
import {View, Text} from 'react-native';
import {Signup} from '../Signinup/Signup';
import {Auth} from '../../components/firebase'
import {useDispatch,useSelector} from 'react-redux';
import {userAction} from '../../redux/users/action_user'

export function loading(props) {
  const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser] :any= useState();    
  function onAuthStateChanged(user) {
    setUser(user);
    if (inittializing) setInitiallizing(false);
  }
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, [user]);
  const navi:any=()=>{
    setTimeout(() => {
      props.navigation.navigate(    user? 'Navigator' : 'Login')
    }, 2000);
  }
  useEffect(()=>{
    navi()
    return clearTimeout(navi);
  },[user])

  if (inittializing) return null;
  if (!user) {    
    return (
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'orange',flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:35}}>IMDb</Text>
      </View>
    );
  }
  return (
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'orange',flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:35}}>IMDb</Text>
      </View>
  );
}
