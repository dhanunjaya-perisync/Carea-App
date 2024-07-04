import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { carImageOne } from '../../constants/imageLinks'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'

export const ReviewSummary = ({navigation}) => {
  //navigate
  const navigateToEnterYourPin = () => {
      navigation.navigate("EnterYourPin")
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={[styles.row, padding(20), gap(15), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
        <View style={[styles.bgLightGrey, { width: 110, height: 90 }, styles.allCenter, radius(15)]}>
          <Image source={carImageOne} style={[{ height: 90, width: 110 }]} resizeMode='contain' />
        </View>
        <View style={[styles.centerVertical]}>
          <TextComponent title={"BMW M5 Series"} size={18} style={[styles.poppinsSemiBold]} />
          <View style={[styles.row, gap(8), marginPosition(3, 0, 8, 0)]}>
            <View style={[{ height: 16, width: 16 }, radius(8), styles.bgLightGrey]}></View>
            <TextComponent title={"Silver"} />
          </View>
        </View>
      </View>

      <View style={[paddingPoistion(15, 20, 10, 20), shadow(1), radius(20), styles.bgWhite, marginPosition(10, 0, 0, 0)]}>
        <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 15, 0)]}>
          <TextComponent title={"Amount"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
          <TextComponent title={"$170,000"} size={18} style={[styles.poppinsMedium]} />
        </View>
        <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 15, 0)]} opacity={0.7}>
          <TextComponent title={"Shipping"} size={16} style={[styles.poppinsReg]} />
          <TextComponent title={"$250"} size={18} style={[styles.poppinsMedium]} />
        </View>
        <View style={[styles.row, styles.spaceBetween]}>
          <TextComponent title={"Tax"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
          <TextComponent title={"$1,000"} size={18} style={[styles.poppinsMedium]} />
        </View>
        <View style={[borderWidth(0, 0, 0, 1), styles.borderLightGrey, margin(0, 15, 0)]} />
        <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 10, 0)]}>
          <TextComponent title={"Total"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
          <TextComponent title={"$171,250"} size={18} style={[styles.poppinsMedium]} />
        </View>
      </View>
      {/* address */}
      <View style={[styles.row, styles.spaceBetween, paddingPoistion(15, 20, 15, 20), radius(20), shadow(1), styles.bgWhite, margin(0, 20, 0)]}>
        <View style={[styles.row, styles.allCenter, gap(15)]}>
          <View style={[{ height: 56, width: 56 }, radius(28), styles.bgLightGrey, styles.allCenter]}>
            <View style={[{ height: 40, width: 40 }, radius(20), styles.bgBlack, styles.allCenter]}>
              <Icon name='location-dot' size={18} color={"#fff"} />
            </View>
          </View>
          <View>
            <TextComponent title={"Home"} size={18} style={[styles.poppinsSemiBold]} />
            <TextComponent title={"61480 SunBrook Park, PC 5679"} size={14} style={[styles.poppinsReg]} opacity={0.8} />
          </View>
        </View>
        <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <Icon name='pen' size={18} color={"#000"} />
        </TouchableOpacity>
      </View>

      {/* payment option */}
      <View style={[styles.row, styles.spaceBetween, paddingPoistion(18, 20, 18, 20), radius(15), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
        <View style={[styles.row, styles.allCenter, gap(15)]}>
          <Icon name={"wallet"} size={20} color={"#000"} /> 
          <TextComponent title={"My wallet"} size={18} style={[styles.poppinsSemiBold]} />
        </View>
        <View style={[styles.row, gap(10)]}>
          <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <TextComponent title={"change"} size={16} style={[styles.poppinsSemiBold]}/>
          </TouchableOpacity>
        </View>
      </View>
      {/* button */}
      <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0), shadow(2), styles.bgWhite, borderWidth(1, 1, 1, 0), { borderColor: "rgba(0,0,0,0.1)" }]}>
        <ButtonComponent titleName={"Confirm Payment"} bgColor={Colors.black} size={15} onPressEvent={navigateToEnterYourPin}/>
      </View>
    </ScreenViewComponent>
  )
}
