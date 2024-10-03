import { View,StatusBar} from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth,  marginPosition, padding, paddingPoistion, radius, shadow, styles, widthValue } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { googleLogo, appleLogo,paypalLogo,mastercardLogo } from '../../constants/imageLinks'
import { SelectPaymentMethodComponent } from '../../components/commonComp/SelectPaymentMethod'
export const PaymentMethod = ({navigation}) => {
    const [selected, setSelect] = useState("")
    //navigate
    const navigateToReviewSummary = () => {
        navigation.navigate("ReviewSummary")
    }

    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <TextComponent title={"Select the payment method you want to use"} size={15} style={[styles.poppinsMedium, marginPosition(10, 0, 10, 0)]} />
            <SelectPaymentMethodComponent selected={selected === "option1"} iconName={"wallet"} onSelect={() => { setSelect("option1") }} name={"My Wallet"} price={"$297.89"} showIcon={true} showPrice={true}/>
            <SelectPaymentMethodComponent selected={selected === "option2"} iconName={"train-subway"} onSelect={() => { setSelect("option2") }} name={"Google Pay"} price={"$297.89"} cover={true} logo={googleLogo} showPrice={true}/>
            <SelectPaymentMethodComponent selected={selected === "option3"} iconName={"ship"} onSelect={() => { setSelect("option3") }} name={"Apple Pay"} price={"$297.89"} logo={appleLogo} showPrice={true} />
            <SelectPaymentMethodComponent selected={selected === "option4"} iconName={"plane"} onSelect={() => { setSelect("option4") }} name={"PayPal"} price={"$297.89"} logo={paypalLogo} showPrice={true}/>
            <SelectPaymentMethodComponent selected={selected === "option5"} iconName={"plane"} onSelect={() => { setSelect("option5") }} name={"..... .... .... .... 4679"} price={"$300"} logo={mastercardLogo} showPrice={true}/>
            {/* button */}
            <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0), shadow(2), styles.bgWhite, borderWidth(1, 1, 1, 0), { borderColor: "rgba(0,0,0,0.1)" }]}>
                <ButtonComponent titleName={"Apply"} bgColor={Colors.black} size={15} customShadow={2} onPressEvent={navigateToReviewSummary} />
            </View>

        </ScreenViewComponent>
    )
}