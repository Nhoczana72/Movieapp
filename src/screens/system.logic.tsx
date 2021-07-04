import React, {useEffect, useState, Dispatch} from 'react';
import Auth from '@react-native-firebase/auth'

export function Authentication(props) {
  const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser] :any= useState();    
  function onAuthStateChanged(user) {
    setUser(user._user.email);
    if (inittializing) setInitiallizing(false);
  }
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, [user]);

   
  return {
    user
  }
}
