import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


const items = [
    {
        image: require("../../assets/images/bags.jpg"),
        text: "Pick-up"
    },
    {
        image: require("../../assets/images/softdrinks.jpeg"),
        text: "Soft Drinks"
    },
    {
        image: require("../../assets/images/backery3.jpg"),
        text: "Backery Items"
    },
    {
        image: require("../../assets/images/food.jpg"),
        text: "Fast Food"
    },
    {
        image: require("../../assets/images/coffe.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../../assets/images/deals.jpeg"),
        text: "Todays Deals"
    },
]
export default function Categories() {
    return (
        <View style={{marginTop:5, backgroundColor:"#fff",paddingVertical:10, paddingLeft:20}} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item,index)=>(
            <View key={index} 
                     style={{alignItems:"center", marginRight:20}}>
            <Image source={item.image}
            style={{width:60, height:60, resizeMode:"contain"}} />
            <Text style={{fontWeight:"bold", fontSize:13}}>{item.text} </Text>
            </View>
            ))}
        </ScrollView>
        </View>
    )
}
