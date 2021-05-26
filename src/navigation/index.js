import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigator'
import detail_Item from '../screens/detai_Item/detail_item'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
const Stack = createStackNavigator();

export const Index = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator  >
                <Stack.Screen name='Navigator'  component={Navigator} options={{headerShown:false}}/>
                <Stack.Screen name="Detail_Item" component={detail_Item} options={{headerShown:false}}/>
                
            </Stack.Navigator>
        </NavigationContainer>


    )
}
export default Index;