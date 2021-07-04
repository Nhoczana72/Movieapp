import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View ,StatusBar} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Index} from './navigation/index'
export  function App() {
    return (
        <View style={{flex:1}}>
            <StatusBar
            hidden={true}
            />
        <Index/>
        </View>
    )
};