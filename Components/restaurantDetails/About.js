import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';

const image = "https://www.amaica.co.ke/wp-content/uploads/2020/04/homepeponi.jpg";
const title ="Peponi Restaurant Island Cuisine";
const description = "Peponi . Comfort Food .  Ksh. 4* (2912+)"

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}/>
            {<RestaurantTitle title={title}/>}
           { <RestaurantDescription description={description} />}
        </View>
    )
}
const RestaurantImage =(props)=>(
    <Image source={{uri:props.image}} style={{width:'100%', height:180}}/>
);
const RestaurantTitle = (props) => (
     <Text style={{fontSize:25, fontWeight:"bold", marginTop:10, marginHorizontal:15}}>{props.title} </Text>
);
const RestaurantDescription = (props) =>(
      <Text style={{fontWeight:"400", fontSize:15.5, marginHorizontal:15, marginTop:10}}>{props.description} </Text>
);
