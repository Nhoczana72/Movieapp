import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile_user/profile_use.view'
import { tickets } from '../screens/Seenoverviewticket/overviewticket'
import Main from '../screens/Home/Main';
import { Navigator } from './navigator'
import {Slidebarcomponnen} from '../screens/menu/slidebar'
import Icon from 'react-native-vector-icons/Entypo'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Drawer = createDrawerNavigator();

export function drawnavi() {
    const [color,setcolor]=React.useState('black')
  return (
      <Drawer.Navigator initialRouteName='Home'   drawerContentOptions={{
        activeTintColor: 'red'
      }}  drawerContent={props=><Slidebarcomponnen {...props}/>} 
      >
          
 <Drawer.Screen name='Home' component={Main} options={{ drawerIcon:({focused} )=> <Icon color={ focused? 'red':'black'} size={20} name={ 'home'} /> } } />
 <Drawer.Screen name='Profile' component={ProfileScreen} options={{ drawerIcon:({focused} )=> <IconAntDesign color={ focused? 'red':'black'} size={20} name={ 'user'} /> } } />
 <Drawer.Screen name='Booking infomation' component={tickets} options={{ drawerIcon:({focused} )=> <Icon color={ focused? 'red':'black'} size={20} name={ 'ticket'} /> } }/>

        
      </Drawer.Navigator>
  );
}