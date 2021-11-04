import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'
import RestaurantDetails from './Screens/RestaurantDetails'

export default function Rootnavigation() {

    const stack = createStackNavigator();
    const screenOptions= {
        headerShown : false,
    };
    return (
       <NavigationContainer>
         <stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
             <stack.Screen name='Home' component={Home}/>
             <stack.Screen name='RestaurantDetails' component={RestaurantDetails}/>
         </stack.Navigator>
       </NavigationContainer>
    )
}
