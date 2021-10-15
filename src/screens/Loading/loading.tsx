import React, {useEffect, useState, Dispatch} from 'react';
import {View, Text} from 'react-native';
import {Signup} from '../Signinup/Signup';
import {Auth} from '../../components/firebase'
import {useDispatch,useSelector} from 'react-redux';
import {userAction} from '../../redux/users/action_user'
import {Loadinglogic} from './loadinglogic'
export function loading(props) {
  const {label} =Loadinglogic(props)


  return (
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'orange',flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:35}}>Booking Movie</Text>
        <Text>{label}</Text>
      </View>
  );
}
