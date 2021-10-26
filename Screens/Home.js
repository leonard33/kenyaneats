import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import BottomTabs from '../Components/BottomTabs';
import Categories from '../Components/Categories';
import HeaderTabs from '../Components/HeaderTabs'
import RestaurantItems, { localRestaurant } from '../Components/RestaurantItems';
import SearchBar from '../Components/SearchBar';

export default function Home() {
     const [restaurantData , setrestaurantData] = React.useState(localRestaurant);

    return (
     <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
         <View  style={{backgroundColor:"white", padding:15}}>
           <HeaderTabs/>
           <SearchBar/>
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Categories/>
           <RestaurantItems restaurantData={restaurantData}/>
           </ScrollView>
           <BottomTabs/>
     </SafeAreaView>

    );
}
