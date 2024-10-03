import { View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import Icon from "react-native-vector-icons/Octicons"
import { gap, marginPosition, padding, paddingPoistion, radius, styles, widthValue, shadow, margin, borderColor, borderWidth, flex } from '../../styles/Styles'
import { visaCard } from '../../constants/imageLinks'
import { amazonLogo } from '../../constants/imageLinks'
import { Colors } from '../../styles/Colors'
import { mastercardLogo } from '../../constants/imageLinks'
import { DatePickerComponent } from '../../components/inputs/DatePickerComponent'
import { ButtonComponent } from '../../components/touchables/CommonButton'
export const ProfileAddNewCard = ({navigation}) => {
  //date
  const [mainDate, setMainDate] = useState("")
  const [dateError, setDateError] = useState("")

  const DotIcon = ({ size }) => {
    return (
      <View style={[styles.row, gap(5)]}>
        <Icon name='dot-fill' color={Colors.white} size={size ? size : 15} />
        <Icon name='dot-fill' color={Colors.white} size={size ? size : 15} />
        <Icon name='dot-fill' color={Colors.white} size={size ? size : 15} />
        <Icon name='dot-fill' color={Colors.white} size={size ? size : 15} />
      </View>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <View style={[{ overflow: "hidden" }, radius(25), shadow(2), marginPosition(10, 0, 0, 0)]}>
        <ImageBackground source={visaCard} style={[paddingPoistion(25, 25, 22, 25)]}>
          <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 20, 0)]}>
            <View>
              <TextComponent title={"Mocard"} size={18} style={[styles.poppinsMedium, styles.white]} />
            </View>
            <View>
              <Image source={amazonLogo} style={[{ height: 50, width: 60 }]} resizeMode='contain' />
            </View>
          </View>
          <View style={[styles.row, gap(20), marginPosition(10, 0, 30, 0)]}>
            <DotIcon />
            <DotIcon />
            <DotIcon />
            <DotIcon />
          </View>
          <View style={[styles.row, styles.spaceBetween, styles.centerHorizontal]}>
            <View style={[marginPosition(-5, 0, 0, 0)]}>
              <TextComponent title={"Card Holder name"} size={13} style={[styles.poppinsMedium, marginPosition(0, 0, 10, 0)]} color={Colors.white} />
              <View style={[styles.row, styles.centerHorizontal, gap(10)]}>
                <DotIcon size={5} />
                <DotIcon size={5} />
              </View>

            </View>
            <View>
              <TextComponent title={"Expiry date"} size={13} style={[styles.poppinsMedium, marginPosition(0, 0, 4, 0)]} color={Colors.white} />
              <View style={[styles.row, styles.centerHorizontal, gap(2)]}>
                <DotIcon size={5} />
                <TextComponent title={"/"} color={Colors.white} style={[styles.poppinsSemiBold]} size={12} />
                <DotIcon size={5} />
              </View>
            </View>
            <Image source={mastercardLogo} style={[{ height: 55, width: 65 }]} resizeMode='contain' />
          </View>

        </ImageBackground>
      </View>
      <View style={[marginPosition(20, 0, 10, 0)]}>
        <TextComponent title={"Card Name"} size={19} style={[styles.poppinsSemiBold]} />
        <TextInputCompnent placeholderValue={"Card Name"} />
      </View>
      <View style={[marginPosition(10, 0, 10, 0)]}>
        <TextComponent title={"Card Number"} size={19} style={[styles.poppinsSemiBold]} />
        <TextInputCompnent placeholderValue={"Card Number"} type={"numeric"} lengthMax={19}/>
      </View>
      <View style={[marginPosition(10, 0, 10, 0),styles.row,styles.spaceBetween]}>
        <View style={[{width:widthValue(2.35)}]}>
          <TextComponent title={"Expiry Date"} size={19} style={[styles.poppinsSemiBold]} />
          <DatePickerComponent mainDate={mainDate} setMainDate={setMainDate} setDateError={setDateError} />
        </View>
        <View style={[{width:widthValue(2.35)}]}>
          <TextComponent title={"CVV"} size={19} style={[styles.poppinsSemiBold]} />
          <TextInputCompnent placeholderValue={"Card Number"} type={"numeric"} lengthMax={3}/>
        </View>
      </View>
      {/* button */}
      <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0),styles.bgWhite, { borderColor: "rgba(0,0,0,0.1)" }]}>
        <ButtonComponent titleName={"Add New Card"} bgColor={Colors.black} size={15} customShadow={2} onPressEvent={()=>navigation.goBack()} />
      </View>
    </ScreenViewComponent>
  )
}
