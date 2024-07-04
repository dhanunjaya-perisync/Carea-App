import { View, Image,StatusBar } from 'react-native'
import React from 'react'
import { rejectImage } from '../../constants/imageLinks'
import { ScreenViewComponent, TextComponent } from '../../components'
import { heightValue, marginPosition, padding, paddingPoistion, styles } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
export const OfferReject = ({ navigation }) => {
  //navigation
  const navigateToOfferAccept = () => {
    navigation.navigate("OfferAccept")
  }
  const navigateToHome = () => {
    navigation.replace("TabNavigation")
  }
  return (
    <ScreenViewComponent style={[paddingPoistion(40, 20, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Image source={rejectImage} resizeMode='contain'
        style={[{ width: "100%", height: heightValue(3.2) },marginPosition(30,0,0,0)]}
      />
      <TextComponent title={"We're sorry, your offer has been rejected"} size={30} style={[styles.poppinsSemiBold]} textCenter={true} />
      <TextComponent
        title={"Don't worry, you will always be able to make another offer that is more suitable, so that your offer is accepted"}
        size={17}
        style={[styles.poppinsMedium]}
        textCenter={true}
      />
      <View style={[styles.positionAbsolute, { bottom: 110, width: "100%", left: 20 }]}>
        <ButtonComponent titleName={"Make an Offer Again"} style={[styles.bgBlack]} size={16} customShadow={2} onPressEvent={navigateToOfferAccept}/>
      </View>

      <View style={[styles.positionAbsolute, { bottom: 40, width: "100%", left: 20 }]}>
        <ButtonComponent titleName={"Back to Home"} style={[styles.bgLightGrey]} color={Colors.black} size={16} customShadow={2} onPressEvent={navigateToHome}/>
      </View>
    </ScreenViewComponent>
  )
}
