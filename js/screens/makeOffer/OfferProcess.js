import { View, Image,StatusBar } from 'react-native'
import React,{useEffect, useState} from 'react'
import { processImage } from '../../constants/imageLinks'
import { ScreenViewComponent,TextComponent } from '../../components'
import {  heightValue, padding, styles } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
export const OfferProcess = ({navigation}) => {
  const [home,setHome] = useState(false)
  // navigation
    // useEffect(() => {
    //   setTimeout(() => {
    //     navigation.navigate("OfferReject")
    // }, 3000);
    // }, [])

  const navigateToOfferReject = () => {
      navigation.navigate("OfferReject")
  }
  
  const navigateToHome = () => {
    navigation.popToTop()
  }
  return (
    <ScreenViewComponent style={[padding(0,0,20),styles.centerVertical]}>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Image source={processImage} resizeMode='contain'
          style={[{width:"100%",height:heightValue(3.2)}]}
        />
        <TextComponent title={"Your offer is being processed"} size={30} style={[styles.poppinsSemiBold]} textCenter={true}/>
        <TextComponent 
          title={"Please check notifications periodically to see if your offer was accepted or rejected by the seller"}
          size={17}
          style={[styles.poppinsMedium]}
          textCenter={true}
        />
        <View style={[styles.positionAbsolute,{bottom:40,width:"100%",left:20}]}>
          <ButtonComponent titleName={"Back to Home"} bgColor={Colors.black} size={16} customShadow={2} onPressEvent={navigateToHome}/>
        </View>
    </ScreenViewComponent>
  )
}
