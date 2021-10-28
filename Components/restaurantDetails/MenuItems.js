import React from 'react'
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, Image  } from 'react-native'

const foods=[
    {
        title:"Lasagna",
        description:"White butter letuce, tomato and sauce bechamel",
        price:"Ksh 2,500",
        image:"https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800",
    },
    {
        title:"Chicken Pilau",
        description:"White rice in swahili spices with chicken",
        price:"Ksh 700",
        image:"https://i0.wp.com/kaneskitchenaffair.com/wp-content/uploads/2020/02/img_9911.jpg?resize=1200%2C706&ssl=1",
    },
    {
        title:"Fish Ugali",
        description:"Fish dipped in coconut cream",
        price:"Ksh 1,500",
        image:"https://www.kenyanvibe.com/wp-content/uploads/2019/02/ugali-fish.jpg",
    },
    {
        title:"Grilled Chicken",
        description:"Charcoal grilled full chicken",
        price:"Ksh 2,000",
        image:"https://i.ytimg.com/vi/h7XVBCeZV-Y/maxresdefault.jpg",
    },
    {
        title:"Mahamri",
        description:"Mahamri made with milk and coconut cream",
        price:"Ksh 200",
        image:"https://i.ytimg.com/vi/IwKwztK8Yow/maxresdefault.jpg",
    },
    {
        title:"Chips Masala",
        description:"Chips diped ni special sauce",
        price:"Ksh 500",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMoWwVCEQwn4ZJXS0nBj5gz3e9ywKSzBpAw&usqp=CAU",
    },
    {
        title:"Chapati Beef",
        description:"Prantha diped in coconut creamed beef",
        price:"Ksh 2,800",
        image:"https://agiza24.com/upload/1611585787-chapati%20kuku.jpg",
    },
    {
        title:"Shawarma",
        description:"Beef wraped in pranta with some special sauce",
        price:"Ksh 500",
        image:"https://preppykitchen.com/wp-content/uploads/2021/07/Chicken-Shawarma-Recipe.jpg",
    },
    {
        title:"Mahamri",
        description:"Mahamri made with milk and coconut cream",
        price:"Ksh 200",
        image:"https://i.ytimg.com/vi/IwKwztK8Yow/maxresdefault.jpg",
    },
    {
        title:"Lasagna2",
        description:"White butter letuce, tomato and sauce bechamel",
        price:"Ksh 2,500",
        image:"https://i.pinimg.com/originals/ed/52/a6/ed52a6fecc23a803a9e3c0789ce31664.jpg",
    },
]

export default function MenuItems() {
    return (
   < ScrollView showsVerticalScrollIndicator={false} style={{height:"95%"}}>
        {foods.map((food, index)=>( 
        <View key={index}>
        <View style={{flexDirection:"row", justifyContent:"space-evenly", margin:20}}>
           <FoodInfo food={food} />
           <FoodImage food={food}/>
         </View>
        </View>
        ) ) }
      </ScrollView>
    )

}
const FoodInfo =(props) => (
    <View style={{width:220, justifyContent:"space-evenly"}}>
        <Text style={{fontSize:19, fontWeight:"bold"}}>{props.food.title}</Text>
        <Text>{props.food.description} </Text>
        <Text>{props.food.price} </Text>
    </View>
 );
 const FoodImage = (props) => (
     <Image source={{uri:props.food.image}} style={{width:100, height:100, borderRadius:8}}/>
 );
