import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { mastercardLogo } from '../../constants/imageLinks'
import Icon from "react-native-vector-icons/Ionicons"
import { borderWidth, gap, marginPosition, padding, paddingPoistion, radius, styles, widthValue,margin, shadow } from '../../styles/Styles'
import { visaCard } from '../../constants/imageLinks'
import { useSelector } from 'react-redux'
import { Colors } from '../../styles/Colors'
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
export const Wallet = ({navigation}) => {
  const Data = useSelector(state => state.user.productInfo.productInfo)
  const transactionHistory = Data.filter(car => car.liked == true)
  //navi
  const navigateToTH = () => {
    navigation.navigate("TransactionHistory")
  }
  const navigateToEReceipt = () => {
    navigation.navigate("TopUpEWallet")
  }
  //component
  const IndivisualChat = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.row, styles.spaceBetween, margin(0, 10, 0)]}>
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
          <View style={[styles.row,gap(5),styles.centerHorizontal]}>
            <TextComponent title={"Orders"} size={15} style={[styles.poppinsMedium]} opacity={0.6}/>
            <Icon2 name='arrow-up-box' color={Colors.red} size={18}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <View style={[{ overflow: "hidden" }, radius(25),shadow(2),marginPosition(10,0,0,0)]}>
        <ImageBackground source={visaCard} style={[paddingPoistion(25, 25, 22, 25)]}>
          <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 20, 0)]}>
            <View>
              <TextComponent title={"Andrew Aisley"} size={20} style={[styles.poppinsMedium, styles.white]} />
              <TextComponent title={".... .... .... 3423"} size={15} style={[styles.poppinsMedium, styles.white]} />
            </View>
            <View style={[styles.row, gap(10), marginPosition(-20, 0, 0, 0)]}>
              <TextComponent title={"VISA"} style={[{ fontStyle: "italic" }, styles.white]} fontWeight={"700"} size={28} />
              <Image source={mastercardLogo} style={[{ height: 45, width: 45 }, marginPosition(-5, 0, 0, 0)]} resizeMode='contain' />
            </View>
          </View>
          <TextComponent title={"Your balance"} size={15} style={[styles.poppinsMedium, styles.white, marginPosition(0, 0, 6, 0)]} />
          <View style={[styles.row, styles.spaceBetween]}>
            <TextComponent title={"$299,677"} size={38} style={[styles.poppinsSemiBold, styles.white]} />
            <TouchableOpacity onPress={navigateToEReceipt} style={[styles.bgWhite, styles.row, { height: 35, width: widthValue(3.4) }, styles.allCenter, gap(10), radius(20)]}>
              <Icon name='download' size={18} style={[marginPosition(-5, 0, 0, 0)]} />
              <TextComponent title={"Top Up"} size={15} style={[styles.poppinsSemiBold]} />
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>
      <View style={[styles.row, styles.spaceBetween, marginPosition(20, 0, 10, 0)]}>
        <TextComponent title={"Transaction History"} size={20} style={[styles.poppinsSemiBold]} />
        <TouchableOpacity onPress={navigateToTH}>
          <TextComponent title={"See All"} style={[styles.poppinsSemiBold]} size={18} />
        </TouchableOpacity>
      </View>
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
