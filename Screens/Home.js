import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../Components/Home/BottomTabs';
import Categories from '../Components/Home/Categories';
import HeaderTabs from '../Components/Home/HeaderTabs'
import RestaurantItems, { localRestaurant } from '../Components/Home/RestaurantItems';
import SearchBar from '../Components/Home/SearchBar';


export default function Home({navigation}) {
     const [restaurantData , setrestaurantData] = React.useState(localRestaurant);

    return (
     <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
         <View  style={{backgroundColor:"white", padding:15}}>
           <HeaderTabs/>
           <SearchBar/>
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Categories/>
           <RestaurantItems restaurantData={restaurantData} navigation = {navigation}/>
           </ScrollView>
           <Divider width={2}/>
           <BottomTabs/>
     </SafeAreaView>

    );
}
