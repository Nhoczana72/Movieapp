import React, { useState } from 'react'
import axios from 'axios'
import { View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import { ScrollView } from 'react-native';
import { HomeLogic } from '../Home/home.logic';
import { DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import { size } from 'lodash';

export const Slidebarcomponnen = (props) => {
    const {
         Logout
    } = HomeLogic(props)
    return (
        <View style={{ width: '100%', height: '70%' }}>

            <View style={{ backgroundColor: 'orange', height: 100 ,alignItems:'center',justifyContent:'center'}}>
                <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'green' }}></View>
                <Text >IMDb</Text>
            </View>
           
            <DrawerItemList {...props}/>
          
             
               
               <DrawerItem icon={()=> <IconAntDesign color= 'black' size={20} name={ 'logout'} />} 
              label={()=><Text style={{color: 'black'}} >Log out</Text>}  onPress={()=>Logout()}
              />


            
        </View>
    )
}


