import 'react-native-gesture-handler';
import * as React from 'react';

import Main from '../screens/Home/Main';
import searchitem from '../screens/Search/search'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation'
import VideoTrailer from '../screens/Video/vidtrailer'

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: 'red',
        inactiveBackgroundColor:'gray',
        inactiveTintColor:'white',
        
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Main}
        
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home" color={'white'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={searchitem}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnifying-glass" color={'white'} size={20} />
          ),
        }}
      />

    <Tab.Screen
            name="Video"
            component={VideoTrailer}
            options={{
              tabBarLabel: 'Video',
              tabBarIcon: ({ color, size }) => (
                <Icon name="magnifying-glass" color={'white'} size={20} />
              ),
            }}
          />

    </Tab.Navigator>

  );
}

export default Navigator;