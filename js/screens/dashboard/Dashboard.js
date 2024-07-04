import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import { profileImgOne, swiperOne } from "../../constants/imageLinks";
import Icon from "react-native-vector-icons/FontAwesome"
import { swiperTwo } from "../../constants/imageLinks";
// - - - - - COMPONENTS - - - - - //
import { ScreenViewComponent, TextComponent } from "../../components";
import SearchComponent from "../../components/inputs/SearchComponent";
import { CarSwiperComponent } from "../../components/dashboardCom/CarSwiperComponent";
// import HorizantalView from "../../components/dashboardCom/HorizantalView";
// - - - - - CONSTANTS - - - - - //
import { carBrandsData } from "../../constants/carBrands";
import { CarProductInfo } from "../../constants/productInfo";
// - - - - - HELPERS - - - - - //

// - - - - - LIBRARY - - - - - //
import { useDispatch, useSelector } from "react-redux";
// - - - - - REDUX, ACTIONS & API CALLS - - - - - //

// - - - - - STYLES & COLORS - - - - - //
import { marginPosition, paddingPoistion, borderWidth, radius, styles, padding, gap, margin, widthValue } from "../../styles/Styles";
import { Tuple } from "@reduxjs/toolkit";
import { Colors } from "../../styles/Colors";
import { CarCardComponent } from "../../components/dashboardCom/CarCardComponent";
import { setProductInfo } from "../../redux/userReducer/productInfoReducer";

export const DashboardScreen = ({ navigation }) => {

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
    const [products, setProducts] = useState([])
    const [current, setCurrent] = useState(false)
    // Route Params
    // dispatch(setProductInfo(CarProductInfo))
    const Data = useSelector(state => state.user.productInfo.productInfo)
    const postData = () => {
        if (!Data) {
            dispatch(setProductInfo(CarProductInfo))
        }
    }
    postData()

    const filterFunction = (data, brandId) => {
        setCurrent(true)
        let filteredData = data.filter(car => car.brandId === brandId)
        setProducts(filteredData)
    }
    const displayAll = (newData) => {
        setProducts(newData)
        setCurrent(false)
    }
    const likeToggle = (id, brandId) => {
        let modifiedData = Data.map(item => {
            if (item.id == id) {
                return { ...item, liked: !item.liked }
            }
            return item
        })
        dispatch(setProductInfo(modifiedData))
        if (current) {
            filterFunction(modifiedData, brandId)
        }
        else {
            displayAll(modifiedData)
        }

    }

    //dispatch
    // useEffect(() => {
    //   dispatch(setProductInfo([{name:"car1"},{name:"Car2"}]))
    // }, [])

    // dispatch(setProductInfo([{name:"car"},{name:"car2"}]))

    // Selectors


    // Re-Selectors

    // States
    const [state, setState] = useState("")
    // - - - - - * * FUNCTIONS * *  - - - - - //

    // - - - - - * * API CALLS * *  - - - - - //

    // - - - - - * * USE EFFECT * *  - - - - - //

    // horizantal component
    const [selectedValue, setSelectedValue] = useState("");
    const HorizontalComponent = ({ title, selected, onSelect }) => {
        return (
            <TouchableOpacity onPress={onSelect} style={[{ backgroundColor: selected ? "#000" : "#fff" }, , padding(0, 4, 20), marginPosition(0, 0, 0, 10), borderWidth(3), styles.borderBlack, radius(40), styles.allCenter]}>
                <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={selected ? "#fff" : "#000"} />
            </TouchableOpacity>
        )
    }

    return (
        <ScreenViewComponent style={[paddingPoistion(20, 0, 0, 20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <ScrollView>
                <View style={[styles.row, styles.spaceBetween, marginPosition(0, 20, 0, 0)]}>
                    <View style={[styles.row, gap(15)]}>
                        <View style={[styles.allCenter]}>
                            <Image source={profileImgOne} style={[{ height: 50, width: 50, }]} />
                        </View>
                        <View>
                            <TextComponent title={"Good morning 👋"} size={17} style={[styles.poppinsMedium, styles.black]} opacity={0.6} />
                            <TextComponent title={"Andrew Ainsley"} size={20} style={[styles.poppinsSemiBold]} />
                        </View>
                    </View>
                    <View style={[styles.row, gap(20), styles.centerHorizontal]}>
                        <TouchableOpacity onPress={navigateToNotification}>
                            <Icon name="bell-o" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateToWishlist}>
                            <Icon name="heart-o" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[marginPosition(15, 20, 15, 0)]}>
                    <SearchComponent placeholder={"Search"} height={52} onPressEvent={navigateToSearch} />

                </View>

                {/* Special Offers */}
                <View style={[styles.row, styles.spaceBetween, marginPosition(0, 20, 15, 0)]}>
                    <TextComponent title={"Special Offers"} size={22} style={[styles.poppinsSemiBold]} />
                    <TouchableOpacity onPress={navigateToSpecialOffers}>
                        <TextComponent title={"See All"} size={18} style={[styles.poppinsSemiBold]} />
                    </TouchableOpacity>
                </View>

                {/* Swiper component */}
                <CarSwiperComponent imageUri={swiperTwo}
                    percentage={"20%"}
                    deals={"Week Deals!"}
                    description={"Get a new car discount,\n only valid this week"}
                    contain={false}
                    style={[marginPosition(0, 20, 0, 0)]}
                />

                <View style={[marginPosition(10,20,0,0)]}>
                    <FlatList
                        data={carBrandsData}
                        numColumns={4}
                        columnWrapperStyle={[styles.spaceBetween]}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.allCenter]} onPress={()=> navigation.navigate("CarBrandFilter",{brandId:item.brandId})}>
                                <View style={[styles.bgLightGrey, { height: 60, width: 60 }, styles.allCenter, radius(30), marginPosition(0, 0, 10, 0)]}>
                                    <Image style={[{ height: 40, width: 40, resizeMode: "contain" }]} source={{ uri: item.imageUri }} />
                                </View>
                                <TextComponent title={item.name} size={16} style={[styles.poppinsSemiBold]} />
                            </TouchableOpacity>
                        )}
                    />
                </View>


                {/* Top Deals */}
                <View style={[styles.row, styles.spaceBetween, marginPosition(0, 20, 15, 0)]}>
                    <TextComponent title={"Top Deals"} size={22} style={[styles.poppinsSemiBold]} />
                    <TouchableOpacity onPress={navigateToTopDeals}>
                        <TextComponent title={"See All"} size={18} style={[styles.poppinsSemiBold]} />
                    </TouchableOpacity>
                </View>
                {/* Horizantal view com */}

                <ScrollView horizontal={true}>
                    <HorizontalComponent title={"All"}
                        selected={selectedValue === "option1"}
                        onSelect={() => { setSelectedValue("option1"); displayAll(Data) }}
                    />
                    <HorizontalComponent title={"Mercedes"}
                        selected={selectedValue === "option2"}
                        onSelect={() => { setSelectedValue("option2"); filterFunction(Data, 1) }}
                    />
                    <HorizontalComponent title={"Tesla"}
                        selected={selectedValue === "option3"}
                        onSelect={() => { setSelectedValue("option3"); filterFunction(Data, 3) }}
                    />
                    <HorizontalComponent title={"BMW"}
                        selected={selectedValue === "option4"}
                        onSelect={() => { setSelectedValue("option4"); filterFunction(Data, 2) }}
                    />
                    <HorizontalComponent title={"Bugatti"}
                        selected={selectedValue === "option5"}
                        onSelect={() => { setSelectedValue("option5"); filterFunction(Data, 6) }}
                    />
                    <HorizontalComponent title={"Toyota"}
                        selected={selectedValue === "option6"}
                        onSelect={() => { setSelectedValue("option6"); filterFunction(Data, 5) }}

                    />
                </ScrollView>

                <View style={[marginPosition(15, 20, 0, 0)]}>
                    <FlatList
                        columnWrapperStyle={[styles.spaceBetweenVertical]}
                        numColumns={2}
                        data={products == [] ? Data : products}
                        initialNumToRender={4}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("CarInfo", { product: item })
                            }}>
                               {index < 4 && 
                                <CarCardComponent item={item} onPressLike={() => likeToggle(item.id, item.brandId)} />
                               }
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </ScreenViewComponent>
    )
}