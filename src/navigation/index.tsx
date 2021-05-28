import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigator'
import detail_Item from '../screens/detai_Item/detail_item'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Provider } from 'react-redux';
import store  from '../redux/store'
const Stack = createStackNavigator();

 const Index = () => {

    return (
         <Provider store={store}>
        <NavigationContainer >
            <Stack.Navigator  >
                <Stack.Screen name='Navigator'  component={Navigator} options={{headerShown:false}}/>
                <Stack.Screen name="Detail_Item" component={detail_Item} options={{headerShown:true,headerTitle:'Movie'}}/>
            </Stack.Navigator>
        </NavigationContainer>
         </Provider>

    )
}
export default Index;