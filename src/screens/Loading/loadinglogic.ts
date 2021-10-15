import React, { useEffect, useState } from 'react'
import {Auth} from '../../components/firebase'
import {userAction} from '../../redux/users/action_user'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import CodePush from 'react-native-code-push';

import {useDispatch} from 'react-redux'
export const Loadinglogic=(props)=>{
    const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser] :any= useState();  
  const dispatch=useDispatch();
  const [label, setLabel] = React.useState('');
  const [codePushSuccess, setCodePushSuccess] = React.useState(false);
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

  React.useEffect(() => {
    const deploymentKey = "xpJa5Y70P4IrWxnmOvrPbsp_gJY4lx9uaviHJ";
    CodePush.sync(
      !!deploymentKey
        ? {
            deploymentKey,
          }
        : {},
      codePushStatusDidChange,
    );
  }, []);
  const codePushStatusDidChange = (syncStatus: number) => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setLabel("1.0");
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setLabel('downloading package.');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setLabel('awaiting user action.');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setLabel('installing update.');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        setLabel("1.1");
        setCodePushSuccess(true);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setLabel('update cancelled by user.');
        setCodePushSuccess(true);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setLabel('update installed and will be applied on restart.');
        setTimeout(() => {
          CodePush.restartApp();
        }, 1000);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        setLabel('an unknown error occurred.');
        setCodePushSuccess(true);
        break;
      default:
        setLabel("1.0");
        setCodePushSuccess(true);
        break;
    }
  };



      useEffect(() => {
          
          const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
          if(codePushSuccess){
            setTimeout(()=>{
                dispatch(userAction.loading(true))
            },5000)
          }
          
            return subscriber; 
       
      }, [codePushSuccess]);

    return{
        user,label
    }
}