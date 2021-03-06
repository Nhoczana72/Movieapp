import 'react-native-gesture-handler';
import * as React from 'react';

import Main from '../screens/Home/Main';
import searchitem from '../screens/Search/search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import IconVideo from 'react-native-vector-icons/Entypo';

import VideoTrailer from '../screens/Video/vidtrailer';
import {drawnavi} from './drawnavigation'

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: 'red',
        inactiveBackgroundColor: 'gray',
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={drawnavi}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" color={'white'} size={20} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={searchitem}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="magnifying-glass" color={'white'} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Video"
        component={VideoTrailer}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({color, size}) => (
            <IconVideo name="video" color={'white'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

