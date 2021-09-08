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
import { Admin } from '../screens/Admin/admin.truyvan'
import { ProfileUpdate } from '../screens/profile_user/profileupdate/profile.update'

import { useSelector } from 'react-redux'
const Stack = createStackNavigator();

export const Index = () => {
    const load = useSelector((state: any) => { return state.user.loading })
    const user = useSelector((state: any) => { return state.user.user })
    return (
        <NavigationContainer >
            <Stack.Navigator  >
                {!load ?
                    (
                        <Stack.Screen name='Loading' component={loading} options={{ headerShown: false }} />
                    )
                    :
                   user != ''?
                    
                        (
                            <Stack.Screen name='Navigator' component={Navigator} options={{ headerShown: false }} />
                        )

                        : (
                            <Stack.Screen name='Login' component={Signin} options={{ headerShown: false }} />
                        )
                }
                {/* <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} /> */}

                <Stack.Screen name='Test' component={Test} options={{ headerShown: false }} />
                <Stack.Screen name='trailer' component={Trailer} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                {/* <Stack.Screen name='Login' component={Signin} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Detail_Item" component={detail_Item} options={{ headerShown: false }} />
                <Stack.Screen name="profileupdate" component={ProfileUpdate} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
