import { View, Text, Image, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { heightValue, flex, gap, margin, marginPosition, padding, radius, shadow, styles, widthValue } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { useSelector } from 'react-redux'
import { notFoundImage } from '../../constants/imageLinks'

export const Active = ({ navigation }) => {
  //nav
  const navigateToTrackOrder = () => {
    navigation.navigate("TrackOrder")
  }
  const Data = useSelector(state => state.user.productInfo.productInfo)
  const wishList = Data.filter(car => car.liked == true)
  const CardCompo = ({ item }) => {
    return (
      <View style={[styles.row, padding(20), gap(15), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
        <View style={[styles.bgLightGrey, { width: 110, height: 90 }, styles.allCenter, radius(15)]}>
          <Image source={item.imageUrl} style={[{ height: 90, width: 110 }]} resizeMode='contain' />
        </View>
        <View style={[styles.centerVertical]}>
          <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold]} />
          <View style={[styles.row, gap(8), marginPosition(3, 0, 8, 0), styles.centerHorizontal]}>
            <View style={[{ height: 16, width: 16 }, radius(8), { backgroundColor: item.color.code }]}></View>
            <TextComponent title={item.color.name} size={13} style={[styles.poppinsReg]} />
            <View style={[styles.bgLightGrey, radius(5), { height: 25 }, styles.allCenter, padding(0, 0, 10)]}>
              <TextComponent title={`In Delivery`} style={[styles.poppinsMedium]} size={13} textCenter={true} />
            </View>
          </View>

          <View style={[styles.row, styles.spaceBetween, { width: widthValue(1.95) }]}>
            <TextComponent title={`$${item.price}`} style={[styles.poppinsSemiBold]} size={18} />
            <ButtonComponent titleName={"Track Order"} style={[styles.bgBlack, { height: 30, width: widthValue(3.5) }]} size={15} onPressEvent={navigateToTrackOrder} />
          </View>
        </View>
      </View>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      {
        wishList.length > 0 ?
          <View>
            <FlatList
              data={wishList}
              key={item => item.id.toString()}
              renderItem={({ item }) => (
                <CardCompo item={item} />
              )}
            />
          </View> :
          <View style={[flex(1), styles.centerVertical, styles.centerHorizontal]}>
            <Image
              style={[{ height: heightValue(2.8), width: widthValue(1.4) }]}
              source={notFoundImage}
              resizeMethod='contain'
            />
            <TextComponent title={"You don't have an any order yet"} textCenter={true} size={18} style={[styles.poppinsSemiBold]} />
            <TextComponent title={"You don't have an ongoing orders at this time"}
              textCenter={true} size={16} style={[styles.poppinsMedium, marginPosition(5, 0, 0, 0)]}
            />
          </View>

      }

    </ScreenViewComponent>
  )
}
