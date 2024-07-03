import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { googleLogo, appleLogo,paypalLogo,mastercardLogo } from '../../constants/imageLinks'

export const PaymentMethod = ({navigation}) => {
    const [selected, setSelect] = useState("")
    const RadioComponent = ({ selected, onSelect, iconName, name, price, showIcon ,cover,logo}) => {
        return (
            <View style={[styles.row, styles.spaceBetween, paddingPoistion(18, 20, 18, 20), radius(15), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                <View style={[styles.row, styles.allCenter, gap(15)]}>
                    {showIcon ? <Icon name={iconName} size={20} color={"#000"} /> : (
                        <Image source={logo} style={[{width:25,height:25}]} resizeMode={cover?"cover":"contain"}/>
                    )}
                        <TextComponent title={name} size={18} style={[styles.poppinsSemiBold]} />
                </View>
                <View style={[styles.row, gap(10)]}>
                    <TextComponent title={selected?price:null} size={18} style={[styles.poppinsSemiBold]} />
                    <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={onSelect}>
                        <View style={[{ height: 22, width: 22 }, radius(11), borderWidth(2), styles.borderBlack, styles.allCenter]}>
                            <View style={[{ height: 14, width: 14 }, radius(8), selected ? styles.bgBlack : styles.bgWhite]}></View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    //navigate
    const navigateToReviewSummary = () => {
        navigation.navigate("ReviewSummary")
    }

    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <TextComponent title={"Select the payment method you want to use"} size={15} style={[styles.poppinsMedium, marginPosition(10, 0, 0, 0)]} />
            <RadioComponent selected={selected === "option1"} iconName={"wallet"} onSelect={() => { setSelect("option1") }} name={"My Wallet"} price={"$297.89"} showIcon={true} />
            <RadioComponent selected={selected === "option2"} iconName={"train-subway"} onSelect={() => { setSelect("option2") }} name={"Google Pay"} price={"$297.89"} cover={true} logo={googleLogo}/>
            <RadioComponent selected={selected === "option3"} iconName={"ship"} onSelect={() => { setSelect("option3") }} name={"Apple Pay"} price={"$297.89"} logo={appleLogo}/>
            <RadioComponent selected={selected === "option4"} iconName={"plane"} onSelect={() => { setSelect("option4") }} name={"PayPal"} price={"$297.89"} logo={paypalLogo}/>
            <RadioComponent selected={selected === "option5"} iconName={"plane"} onSelect={() => { setSelect("option5") }} name={"..... .... .... .... 4679"} price={"$300"} logo={mastercardLogo}/>
            {/* button */}
            <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0), shadow(2), styles.bgWhite, borderWidth(1, 1, 1, 0), { borderColor: "rgba(0,0,0,0.1)" }]}>
                <ButtonComponent titleName={"Apply"} bgColor={Colors.black} size={15} customShadow={2} onPressEvent={navigateToReviewSummary} />
            </View>

        </ScreenViewComponent>
    )
}