import React, { useState } from 'react'
import axios from 'axios'
import { View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import auth from '@react-native-firebase/auth';

import { ScrollView } from 'react-native';
import { HomeLogic } from '../Home/home.logic';
import { DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import { size } from 'lodash';
import { useDispatch,useSelector } from 'react-redux';
import { userAction } from '../../redux/users/action_user';

export const Slidebarcomponnen = (props) => {
    const dispatch = useDispatch()
    const user=useSelector((state:any)=>{return state.user.profileuser})
    const Logout = () => {
        auth()
          .signOut()
          .then(() => { dispatch(userAction.getuser(''));dispatch(userAction.getprofileuser({})) }
          
          );
      }
    return (
        <View style={{ width: '100%', height: '70%' }}>

            <View style={{ backgroundColor: 'orange', height: 100 ,alignItems:'center',justifyContent:'center'}}>
                <Image
                    style={{ width: 70, height: 70, borderRadius: 50}}
                    source={user.uri?{uri:user.uri}
                    : require('../../assets/image/no_Image.jpg')
                }
                />
                <Text >{user.fname} {user.lname}</Text>
            </View>
           
            <DrawerItemList {...props}/>
          
             
               
               <DrawerItem icon={()=> <IconAntDesign color= 'black' size={20} name={ 'logout'} />} 
              label={()=><Text style={{color: 'black'}} >Log out</Text>}  onPress={()=>Logout()}
              />


            
        </View>
    )
}


