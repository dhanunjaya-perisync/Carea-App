import { View, Image } from 'react-native'
import React from 'react'
import { acceptImage } from '../../constants/imageLinks'
import { ScreenViewComponent,TextComponent } from '../../components'
import {  heightValue, padding, styles } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'

export const OfferAccept = ({navigation}) => {
  const navigateToCheckout = () => {
    navigation.navigate("Checkout")
  }
  return (
    <ScreenViewComponent style={[padding(0,0,20),styles.centerVertical]}>
        <Image source={acceptImage} resizeMode='contain'
          style={[{width:"100%",height:heightValue(3.2)}]}
        />
        <TextComponent title={"Congrats! Your offer has been accepted!"} size={30} style={[styles.poppinsSemiBold]} textCenter={true}/>
        <TextComponent 
          title={"Your offer has been accepted by the seller for $170,000"}
          size={17}
          style={[styles.poppinsMedium]}
          textCenter={true}
        />
        <View style={[styles.positionAbsolute,{bottom:40,width:"100%",left:20}]}>
          <ButtonComponent titleName={"Proceed to Checkout"} bgColor={Colors.black} size={16} customShadow={2} onPressEvent={navigateToCheckout}/>
        </View>
    </ScreenViewComponent>
  )
}