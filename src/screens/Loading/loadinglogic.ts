import React, { useEffect, useState } from 'react'
import {Auth} from '../../components/firebase'
import {userAction} from '../../redux/users/action_user'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import {useDispatch} from 'react-redux'
export const Loadinglogic=(props)=>{
    const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser] :any= useState();  
  const dispatch=useDispatch();
  const dispatchuser=(user)=>{
      const action=userAction.getuser(user)
       dispatch(action)
  }
  const usersCollection=(user:any) =>{
    firestore().collection('user').doc(user).onSnapshot(documentSnapshot => {
        
        const data = documentSnapshot.data()
         dispatchprofileuser(data,user)
      });
  }
 
  const dispatchprofileuser=(data,user)=>{
    const dataprofile =data
    storage().ref(`${user}`).getDownloadURL().then((url:any) => { return Object.assign(dataprofile,{uri:url} ) } )
      
    const action=userAction.getprofileuser(dataprofile)
     dispatch(action)

}
    function onAuthStateChanged(user) {
        setUser(user)
        if(user!=null){
            dispatchuser(user._user.email)
            usersCollection(user._user.email)
        }
        if (inittializing) {
            
            setInitiallizing(false);
        } 
      }
      useEffect(() => {
          const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
          setTimeout(()=>{
              dispatch(userAction.loading(true))
          },5000)
            return subscriber; 
       
      }, []);

    return{
        user
    }
}