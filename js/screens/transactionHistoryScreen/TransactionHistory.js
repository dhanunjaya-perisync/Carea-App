import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { mastercardLogo } from '../../constants/imageLinks'
import Icon from "react-native-vector-icons/Ionicons"
import { borderWidth, gap, marginPosition, padding, paddingPoistion, radius, styles, widthValue, margin, shadow } from '../../styles/Styles'
import { visaCard } from '../../constants/imageLinks'
import { useSelector } from 'react-redux'
import { Colors } from '../../styles/Colors'
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"

export const TransactionHistory = () => {
  const Data = useSelector(state => state.user.productInfo.productInfo)
  const transactionHistory = Data.filter(car => car.liked == true)
  console.log(transactionHistory)

  const IndivisualChat = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.row, styles.spaceBetween, margin(0, 15, 0)]}>
        <View style={[styles.row, gap(20)]}>
          <View style={[{ height: 60, width: 60 }, styles.bgLightGrey, radius(30)]}>
            <Image source={item.imageUrl} style={[{ height: 60, width: 60 }]} resizeMode='contain' />
          </View>
          <View style={[styles.centerVertical]}>
            <TextComponent title={item.name} size={19} style={[styles.poppinsSemiBold]} />
            <TextComponent title={"Dec 15, 2024 | 10:00 AM"} size={15} style={[styles.poppinsMedium]} opacity={0.6} />
          </View>
        </View>
        <View>
          <View>
            <TextComponent title={`$${item.price}`} size={18} style={[styles.poppinsSemiBold]} />
          </View>
          <View style={[styles.row, gap(5), styles.centerHorizontal]}>
            <TextComponent title={"Orders"} size={15} style={[styles.poppinsMedium]} opacity={0.6} />
            <Icon2 name='arrow-up-box' color={Colors.red} size={18} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      
      {/* list */}
      <FlatList
        data={transactionHistory}
        key={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <IndivisualChat item={item} />
        )}
      />

    </ScreenViewComponent>
  )
}