import React, { useEffect, useState } from "react";
import {  Image, ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import { profileImgOne, swiperOne } from "../../constants/imageLinks";
import Icon from "react-native-vector-icons/FontAwesome"
import { swiperTwo } from "../../constants/imageLinks";
// - - - - - COMPONENTS - - - - - //
import { ScreenViewComponent, TextComponent } from "../../components";
import SearchComponent from "../../components/inputs/SearchComponent";
import { CarSwiperComponent } from "../../components/dashboardCom/CarSwiperComponent";
import HorizantalView from "../../components/dashboardCom/HorizantalView";
// - - - - - CONSTANTS - - - - - //
import { carBrandsData } from "../../constants/carBrands";

// - - - - - HELPERS - - - - - //

// - - - - - LIBRARY - - - - - //
    import { useDispatch, useSelector } from "react-redux";
// - - - - - REDUX, ACTIONS & API CALLS - - - - - //

// - - - - - STYLES & COLORS - - - - - //
import { borderWidth, gap, margin, marginPosition, paddingPoistion, radius, styles} from "../../styles/Styles";
import { Tuple } from "@reduxjs/toolkit";
import { Colors } from "../../styles/Colors";

export const DashboardScreen = ({navigation}) => {

    const navigateToNotification = () => {
        navigation.navigate("Notifications")
    }
    const navigateToWishlist = () => {
        navigation.navigate("Wishlist")
    }
    const navigateToSearch = () => {
        navigation.navigate("SearchScreen")
    }
    const navigateToTopDeals = () => {
        navigation.navigate("TopDeals")
    }
    const navigateToSpecialOffers = () => {
        navigation.navigate("SpecialOffers")
    }


    // - - - - - * * DECLARATIONS * * - - - - - //
    const dispatch = useDispatch()
    // Route Params

    // Selectors
    const { data } = useSelector(state => state.user)
    // Re-Selectors

    // States
    const [state, setState] = useState("")
    // - - - - - * * FUNCTIONS * *  - - - - - //

    // - - - - - * * API CALLS * *  - - - - - //

    // - - - - - * * USE EFFECT * *  - - - - - //
    useEffect(() => {

    },[])

    return(
        <ScreenViewComponent style={[paddingPoistion(20,20,0,20)]}>
             <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>
            <ScrollView>
            <View style={[styles.row,styles.spaceBetween]}>
            <View style={[styles.row,gap(15)]}>
                <View style={[styles.allCenter]}>
                    <Image source={profileImgOne} style={[{height:50,width:50,}]}/>
                </View>
                <View>
                    <TextComponent title={"Good morning 👋"} size={17} style={[styles.poppinsMedium,styles.black]} opacity={0.6}/>
                    <TextComponent title={"Andrew Ainsley"} size={20} style={[styles.poppinsSemiBold]}/>
                </View>
            </View>
            <View style={[styles.row,gap(20),styles.centerHorizontal]}>
                <TouchableOpacity onPress={navigateToNotification}>
                    <Icon name="bell-o" size={20}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToWishlist}>
                    <Icon name="heart-o" size={20} />
                </TouchableOpacity>
            </View>
            </View>
            <View style={[margin(0,15,0)]}>
                <SearchComponent placeholder={"Search"} height={52} onPressEvent={navigateToSearch}/>
                
            </View>

            {/* Special Offers */}
            <View style={[styles.row,styles.spaceBetween,marginPosition(0,0,15,0)]}>
                <TextComponent title={"Special Offers"} size={22} style={[styles.poppinsSemiBold]}/>
                <TouchableOpacity onPress={navigateToSpecialOffers}>
                <TextComponent title={"See All"} size={18} style={[styles.poppinsSemiBold]}/>
                </TouchableOpacity>
            </View>

            {/* Swiper component */}
            <CarSwiperComponent imageUri={swiperTwo} 
            percentage={"20%"} 
            deals={"Week Deals!"}
            description={"Get a new car discount,\n only valid this week"}
            contain={false}
            />

           <View style={[styles.rowWrap,styles.spaceBetween,marginPosition(20,0,5,0),gap(20)]}>
            {
                carBrandsData.map(({id,name,imageUri})=>(
                <View key={id} style={[styles.allCenter]}>
                    <View style={[styles.bgLightGrey,{height:60,width:60},styles.allCenter,radius(30),marginPosition(0,0,10,0)]}>
                        <Image style={[{height:40,width:40,resizeMode:"contain"}]} source={{uri:imageUri}}/>
                    </View>
                    <TextComponent title={name} size={16} style={[styles.poppinsSemiBold]}/>
                </View>
                ))
            }
           </View>

           {/* Top Deals */}
           <View style={[styles.row,styles.spaceBetween,margin(0,15,0)]}>
                <TextComponent title={"Top Deals"} size={22} style={[styles.poppinsSemiBold]}/>
                <TouchableOpacity onPress={navigateToTopDeals}>
                     <TextComponent title={"See All"} size={18} style={[styles.poppinsSemiBold]}/>
                </TouchableOpacity>
            </View>
            {/* Horizantal view com */}
            <HorizantalView/>

            
 
            </ScrollView>
       </ScreenViewComponent>
    )
}