import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigator'
import detail_Item from '../screens/detai_Item/detail_item'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Signup } from '../screens/Signinup/Signup'
import { Signin } from '../screens/Signinup/Login'
import {loading} from '../screens/Loading/loading'
import {ProfileScreen} from '../screens/profile_user/profile_use.view'
import {Test} from '../screens/Test/test'
import {MenuScreen} from '../screens/menu/menu'
const Stack = createStackNavigator();

const Index = () => {
    
    return (
            <NavigationContainer >
                <Stack.Navigator  >
                <Stack.Screen name='Loading' component={loading} options={{ headerShown: false }} /> 

                <Stack.Screen name='Test' component={Test} options={{ headerShown: false }} /> 


                 <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: true }} />

                    <Stack.Screen name='Signup' component={Signup} options={{ headerShown: true }} />
                    <Stack.Screen name='Login' component={Signin} options={{ headerShown: true }} />
                    <Stack.Screen name='Navigator' component={Navigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Detail_Item" component={detail_Item} options={{ headerShown: true, headerTitle: 'Movie' }} />
                    <Stack.Screen name="menu" component={MenuScreen} options={{ headerShown: true, headerTitle: 'Menu' }} />
                    
                </Stack.Navigator>
            </NavigationContainer>

    )
}
export default Index;