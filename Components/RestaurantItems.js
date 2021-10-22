import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const localRestaurant=[
    {
        name:"Mama Ashanti",
        image_url:"https://media-cdn.tripadvisor.com/media/photo-s/1c/33/52/8a/outside-sitting-at-the.jpg",
        categories:["Cafe","Bar"],
        price:"Ksh",
        reviews:"1244",
        ratings:"4.8",
    },
    {
        name:"THE CARNIVORE RESTAURANT",
        image_url:"https://media-cdn.tripadvisor.com/media/photo-s/19/cc/13/65/the-carnivore-restaurant.jpg",
        categories:["Restaurant","Bar"],
        price:"Ksh",
        reviews:"1244",
        ratings:"3.7",
    },
    {
        name:"Nyama Mama Nairobi",
        image_url:"https://1.bp.blogspot.com/-XbZrZ6DEoF4/WLgee56oJZI/AAAAAAAAAG0/qv6p4tRvKsgGbI_kwtNbm8ngAtwQUob5QCLcB/s1600/nyama%2Bmama.jpg",
        categories:["Cocktail","Bar"],
        price:"Ksh",
        reviews:"1244",
        ratings:"4.5",
    },
    {
        name:"Coast Dishes Diani",
        image_url:"https://media-cdn.tripadvisor.com/media/photo-s/1b/b8/d6/15/african-cuisine.jpg",
        categories:["Swahili"],
        price:"Ksh",
        reviews:"1244",
        ratings:"3.5",
    },
];

export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}} >
            {props.restaurantData.map((restaurant, index)=>(
        <View key={index}
                   style={{marginTop:10, padding:15, backgroundColor:"white"}} >
            <RestaurantImage image= {restaurant.image_url}/>
            <RestaurantInfo name={restaurant.name} ratings={restaurant.ratings} />
        </View>
        ))}
        </TouchableOpacity>
    );
}
 
const RestaurantImage = (props) => (
    <>
    <Image 
    source= {{
        uri:props.image,
    }} 
    style={{height:180, width:"100%" }}
    />
    <TouchableOpacity style={{position:"absolute", right:20, top:20}} >
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{flexDirection:"row", marginTop:10,alignItems:"center",justifyContent:"space-between"}}>
    <View>
    <Text style={{fontSize:15, fontWeight:"bold"}} >{props.name}</Text>
    <Text style={{fontSize:13, color:"grey"}} >30-45 * min</Text>
    </View>
     <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:"center", borderRadius:30, justifyContent:"center"}} >
    <Text>{props.ratings}</Text>
     </View>
    </View>
);
