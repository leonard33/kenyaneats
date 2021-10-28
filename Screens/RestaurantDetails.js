import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../Components/restaurantDetails/About'
import MenuItems from '../Components/restaurantDetails/MenuItems'

export default function RestaurantDetails() {
    return (
        <View>
            <About/>
            <Divider width={1.8} style={{marginVertical:20}} />
            <MenuItems/>
        </View>
    )
}
