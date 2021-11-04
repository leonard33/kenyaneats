import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';

const localRestaurant  =
      { 
        image : "https://www.amaica.co.ke/wp-content/uploads/2020/04/homepeponi.jpg",
        name :"Peponi Restaurant Island Cuisine",
           /*description : "Peponi . Comfort Food .  Ksh. 4* (2912+)"*/ 
        categories:[{title:"Peponi"},{title:" Comfort Food "}],
        price:"Ksh",
        reviews:"1244",
        ratings:"4.8"
};
const {name, image, price, reviews, ratings, categories} = localRestaurant;

const formattedCategories = categories.map((cat)=> cat.title).join(".");

const description = `${formattedCategories} ${price ? "." + price : ""} ${ratings} (${reviews}+) `;

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantTitle name={name}/>
            <RestaurantDescription description={description} />
        </View>
    )
}
const RestaurantImage =(props)=>(
    <Image source={{uri:props.image}} style={{width:'100%', height:180}}/>
);
const RestaurantTitle = (props) => (
     <Text style={{fontSize:25, fontWeight:"bold", marginTop:10, marginHorizontal:15}}>{props.name} </Text>
);
const RestaurantDescription = (props) =>(
      <Text style={{fontWeight:"bold", fontSize:15.5, marginHorizontal:15, marginTop:10, color:"orange"}}>{props.description} </Text>
);
