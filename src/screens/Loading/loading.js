import React, {useEffect, useState, Dispatch} from 'react';
import {View, Text} from 'react-native';
import {Signup} from '../Signinup/Signup';
import {Auth} from '../../components/firebase'
import {useDispatch,useSelector} from 'react-redux';
import {userAction} from '../../redux/users/action_user'

export function loading(props) {
  const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser] = useState();
   console.log('props',props)

    
  function onAuthStateChanged(user) {
    setUser(user);
    if (inittializing) setInitiallizing(false);
  }
//   auth()
//     .signInAnonymously()
//     .then(() => {
//       console.log('User signed in anonymously');
//     })
//     .catch(error => {
//       if (error.code === 'auth/operation-not-allowed') {
//         console.log('Enable anonymous in your firebase console.');
//       }

//       console.error(error);
//     });
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  const navi=()=>{
    setTimeout(() => {
      props.navigation.navigate(    user? 'Navigator' : 'Login')
    }, 5000);
  }
  useEffect(()=>{
    navi()
},[])


  if (inittializing) return null;
  if (!user) {
      
    return (
      <View>
        <Text>IMDb</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>wellcome {user.email}</Text>
    </View>
  );
}
