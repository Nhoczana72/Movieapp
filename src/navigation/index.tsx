import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './navigator'
import detail_Item from '../screens/detai_Item/detail_item'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Signup } from '../screens/Signinup/Signup'
import { Signin } from '../screens/Signinup/Login'
import { loading } from '../screens/Loading/loading'
import { ProfileScreen } from '../screens/profile_user/profile_use.view'
import { Test } from '../screens/bookingticket/bookingticket'
import { tickets } from '../screens/Seenoverviewticket/overviewticket'
import { Trailer } from '../screens/detai_Item/modules/trailer'

const Stack = createStackNavigator();

export const Index = () => {

    return (
        <NavigationContainer >
            <Stack.Navigator  >
                <Stack.Screen name='Loading' component={loading} options={{ headerShown: false }} />
                <Stack.Screen name='Test' component={Test} options={{ headerShown: false }} />
                <Stack.Screen name='trailer' component={Trailer} options={{ headerShown: false}} />
                <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Signin} options={{ headerShown: false }}  />
                <Stack.Screen name='Navigator' component={Navigator} options={{ headerShown: false }} />
                <Stack.Screen name="Detail_Item" component={detail_Item} options={{ headerShown: false}} />
                
            </Stack.Navigator>
        </NavigationContainer>

    )
}
