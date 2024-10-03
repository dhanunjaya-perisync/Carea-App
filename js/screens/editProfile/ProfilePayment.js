import { StatusBar ,View} from 'react-native'
import React from 'react'
import { ScreenViewComponent } from '../../components'
import { borderWidth, marginPosition, padding, paddingPoistion, radius, shadow, styles, widthValue } from '../../styles/Styles'
import { googleLogo, appleLogo, paypalLogo, mastercardLogo } from '../../constants/imageLinks'
import { SelectPaymentMethodComponent } from '../../components/commonComp/SelectPaymentMethod'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
export const ProfilePayment = ({ navigation }) => {
  //navigate
  const navigateToAddNewCard = () => {
    navigation.navigate("ProfileAddNewCard")
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <SelectPaymentMethodComponent iconName={"wallet"} name={"My Wallet"} price={"$297.89"} showText={true} />
      <SelectPaymentMethodComponent iconName={"train-subway"} name={"Google Pay"} price={"$297.89"} cover={true} logo={googleLogo} showText={true} />
      <SelectPaymentMethodComponent iconName={"ship"} name={"Apple Pay"} price={"$297.89"} logo={appleLogo} showText={true} />
      <SelectPaymentMethodComponent iconName={"plane"} name={"PayPal"} price={"$297.89"} logo={paypalLogo} showText={true} />
      <SelectPaymentMethodComponent iconName={"plane"} name={"..... .... .... .... 4679"} price={"$300"} logo={mastercardLogo} showText={true} />
      {/* button */}
      <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0),styles.bgWhite, { borderColor: "rgba(0,0,0,0.1)" }]}>
        <ButtonComponent titleName={"Add New Card"} bgColor={Colors.black} size={15} customShadow={2} onPressEvent={navigateToAddNewCard} />
      </View>
    </ScreenViewComponent>
  )
}
