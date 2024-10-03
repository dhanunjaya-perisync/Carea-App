import React, {  useState } from "react";
import { FlatList,ScrollView, StatusBar, TouchableOpacity, View } from "react-native";

// - - - - - COMPONENTS - - - - - //
import { ScreenViewComponent, TextComponent } from "../../components";
// import HorizantalView from "../../components/dashboardCom/HorizantalView";W
// - - - - - CONSTANTS - - - - - //

import { CarProductInfo } from "../../constants/productInfo";
// - - - - - HELPERS - - - - - //

// - - - - - LIBRARY - - - - - //
import { useDispatch, useSelector } from "react-redux";
// - - - - - REDUX, ACTIONS & API CALLS - - - - - //

// - - - - - STYLES & COLORS - - - - - //
import { marginPosition, paddingPoistion, borderWidth, radius, styles, padding, gap, margin, widthValue } from "../../styles/Styles";

import { CarCardComponent } from "../../components/dashboardCom/CarCardComponent";
import { setProductInfo } from "../../redux/userReducer/productInfoReducer";
export const TopDeals = () => {
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
   // horizantal component
   const [selectedValue, setSelectedValue] = useState("option1");
   const HorizontalComponent = ({ title, selected, onSelect }) => {
       return (
           <TouchableOpacity onPress={onSelect} style={[{ backgroundColor: selected ? "#000" : "#fff" }, , padding(0, 4, 20), marginPosition(0, 0, 0, 10), borderWidth(3), styles.borderBlack, radius(40), styles.allCenter]}>
               <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={selected ? "#fff" : "#000"} />
           </TouchableOpacity>
       )
   }

  return (
    <ScreenViewComponent style={[paddingPoistion(0, 0, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        {/* Horizantal view com */}
        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
      </View>
      <View style={[marginPosition(15, 20, 0, 0)]}>
                    <FlatList
                        columnWrapperStyle={[styles.spaceBetweenVertical]}
                        numColumns={2}
                        data={products.length == 0 ? Data : products}
                        initialNumToRender={4}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("CarInfo", { product: item })
                            }}>
                                <CarCardComponent item={item} onPressLike={() => likeToggle(item.id, item.brandId)} />
                            </TouchableOpacity>
                        )}
                    />
                </View>


    </ScreenViewComponent>
  )
}
