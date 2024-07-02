import { FlatList, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenViewComponent } from '../../components'
import { wishlistInfo } from '../../constants/carCardsInfo'
import { paddingPoistion, styles } from '../../styles/Styles'
import { CarCardComponent } from '../../components/dashboardCom/CarCardComponent'
export const Wishlist = ({ navigation }) => {

  return (
    <ScreenViewComponent style={[paddingPoistion(30, 20, 0, 20)]}>
      <FlatList
        columnWrapperStyle={[styles.spaceBetweenVertical]}
        numColumns={2}
        data={wishlistInfo}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("CarInfo", { product: item })
          }}>
            {item.liked && (
              <CarCardComponent item={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </ScreenViewComponent>
  )
}
