/**
 * @format
 */

import {AppRegistry, View, YellowBox} from 'react-native';
import React, {useState} from 'react';
import Index from './src/navigation/index';
import {name as appName} from './app.json';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Video from './src/screens/Video/vidtrailer'
import {Signup} from './src/screens/Signinup/Signup'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import { MenuProvider } from 'react-native-popup-menu';
import {Test} from './src/screens/Test/test'
import { loading } from './src/screens/Loading/loading';

const app =()=>{
    return(
        <Provider store={store}>
            <MenuProvider>
            <Index/>
            </MenuProvider>
        </Provider>
    );
}
AppRegistry.registerComponent(appName, () => app);

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
