import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}} >
        <View style={{marginTop:10, padding:15, backgroundColor:"white"}} >
            <RestaurantImage/>
            <RestaurantInfo/>
        </View>
        </TouchableOpacity>
    );
}
 
const RestaurantImage = () => (
    <>
    <Image 
    source= {{
        uri:"https://azcapitoltimes.com/files/2020/10/empty-restaurant.jpg"
    }} 
    style={{height:180, width:"100%" }}
    />
    <TouchableOpacity style={{position:"absolute", right:20, top:20}} >
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View style={{flexDirection:"row", marginTop:10,alignItems:"center",justifyContent:"space-between"}}>
    <View>
    <Text style={{fontSize:15, fontWeight:"bold"}} >Farmhouse Kitchen Thai Cuisine</Text>
    <Text style={{fontSize:13, color:"grey"}} >30-45 * min</Text>
    </View>
     <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:"center", borderRadius:30, justifyContent:"center"}} >
    <Text>4.5</Text>
     </View>
    </View>
);
