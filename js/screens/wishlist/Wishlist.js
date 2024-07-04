import { FlatList, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent } from '../../components'
import { wishlistInfo } from '../../constants/carCardsInfo'
import { paddingPoistion, styles, marginPosition } from '../../styles/Styles'
import { CarCardComponent } from '../../components/dashboardCom/CarCardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { CarProductInfo } from '../../constants/productInfo'
import { setProductInfo } from "../../redux/userReducer/productInfoReducer";
export const Wishlist = ({ navigation }) => {

  const dispatch = useDispatch()
  const Data = useSelector(state => state.user.productInfo.productInfo)
  let data = Data.filter(car => car.liked == true)
  const likeToggle = (id) => {
    let modifiedData = Data.map(item => {
      if (item.id == id) {
        return { ...item, liked: !item.liked }
      }
      return item
    })
    dispatch(setProductInfo(modifiedData))
  }

  return (
    <ScreenViewComponent style={[paddingPoistion(30, 20, 0, 20)]}>
      <View>
      <FlatList
        columnWrapperStyle={[styles.spaceBetweenVertical]}
        numColumns={2}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("CarInfo", { product: item })
          }}>
              <CarCardComponent item={item} onPressLike={() => likeToggle(item.id)}/>
          </TouchableOpacity>
        )}
      />
      </View>


    </ScreenViewComponent>
  )
}
