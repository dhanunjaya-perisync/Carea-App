import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { carImageOne } from '../../constants/imageLinks'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
export const Checkout = ({ navigation }) => {
    //data 
    const [dataFromAddress, setDataFromAddress] = useState({})
    const [shippingData, setShippingData] = useState({})
    //navigation
    const navigateToShippingType = () => {
        navigation.navigate("ChooseShipping", { onGoBack: (data) => { setShippingData(data) } })
    }
    const navigateToShippingAddress = () => {
        navigation.navigate("ShippingAddress", { onGoBack: (data) => { setDataFromAddress(data) } })
    }
    const navigateToPaymentMenthods = () => {
        navigation.navigate("PaymentMethod")
    }
    console.log(shippingData.name + " " + shippingData.date + " " + shippingData.price + " " + shippingData.icon)
    const ShippingLen = (Object.keys(shippingData)).length
    const AddressLen = (Object.keys(dataFromAddress)).length
    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            {/* Shipping address */}
            <TextComponent title={"Shipping Address"} size={20} style={[styles.poppinsSemiBold, marginPosition(40, 0, 0, 0)]} />
            <View style={[styles.row, styles.spaceBetween, paddingPoistion(15, 20, 15, 20), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                <View style={[styles.row, styles.allCenter, gap(15)]}>
                    <View style={[{ height: 56, width: 56 }, radius(28), styles.bgLightGrey, styles.allCenter]}>
                        <View style={[{ height: 40, width: 40 }, radius(20), styles.bgBlack, styles.allCenter]}>
                            <Icon name='location-dot' size={18} color={"#fff"} />
                        </View>
                    </View>
                    <View>
                        <TextComponent title={AddressLen > 0 ? dataFromAddress.name : "Home"} size={18} style={[styles.poppinsSemiBold]} />
                        <TextComponent title={AddressLen > 0 ? dataFromAddress.address : "61480 SunBrook Park, PC 5679"} size={14} style={[styles.poppinsReg]} opacity={0.8} />
                    </View>
                </View>
                <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={navigateToShippingAddress}>
                    <Icon name='pen' size={18} color={"#000"} />
                </TouchableOpacity>
            </View>

            {/* order */}
            <TextComponent title={"Order"} size={20} style={[styles.poppinsSemiBold]} />
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
                    <TextComponent title={"$170,000"} style={[styles.poppinsSemiBold]} size={18} />
                </View>
            </View>

            {/* Choose shipping */}
            <TextComponent title={"Choose Shipping"} size={20} style={[styles.poppinsSemiBold]} />
            {/* todo */}
            {ShippingLen > 0 ?
                <View  style={[styles.row, styles.spaceBetween, paddingPoistion(18, 20, 18, 20), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                    <View style={[styles.row, styles.allCenter, gap(15)]}>
                        <View style={[{ height: 50, width: 50 }, radius(25), styles.bgBlack, styles.allCenter]}>
                            <Icon name={shippingData.icon} size={16} color={"#fff"} />
                        </View>
                        <View>
                            <TextComponent title={shippingData.name} size={18} style={[styles.poppinsSemiBold]} />
                            <TextComponent title={shippingData.date} size={14} style={[styles.poppinsReg]} opacity={0.8} />
                        </View>
                    </View>
                    <View style={[styles.row, gap(10)]}>
                        <TextComponent title={shippingData.price} size={18} style={[styles.poppinsSemiBold]} />
                        <TouchableOpacity onPress={navigateToShippingType}>
                            <View style={[{ height: 22, width: 22 }, radius(11), borderWidth(2), styles.borderBlack, styles.allCenter]}>
                                <View style={[{ height: 14, width: 14 }, radius(8), styles.bgBlack]}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> :
                <View style={[radius(15), paddingPoistion(15, 20, 15, 20), styles.row, styles.spaceBetween, shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                    <View style={[styles.row, gap(20), styles.centerHorizontal]}>
                        <Icon name='truck' size={18} />
                        <TextComponent title={"Choose Shipping Type"} style={[styles.poppinsSemiBold]} size={18} />
                    </View>
                    <TouchableOpacity hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }} onPress={navigateToShippingType}>
                        <Icon name='arrow-right' size={20} />
                    </TouchableOpacity>
                </View>
            }

            {/* amount */}
            <View style={[padding(20), shadow(1), radius(20), styles.bgWhite, marginPosition(10, 0, 0, 0)]}>
                <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 10, 0)]}>
                    <TextComponent title={"Amount"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
                    <TextComponent title={"$170,000"} size={18} style={[styles.poppinsMedium]} />
                </View>
                <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 10, 0)]} opacity={0.7}>
                    <TextComponent title={"Shipping"} size={16} style={[styles.poppinsReg]} />
                    <TextComponent title={ShippingLen > 0 ?shippingData.price:"-"} size={18} style={[styles.poppinsMedium]} />
                </View>
                <View style={[styles.row, styles.spaceBetween]}>
                    <TextComponent title={"Tax"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
                    <TextComponent title={"$1,000"} size={18} style={[styles.poppinsMedium]} />
                </View>
            </View>

            {/* button */}
            <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0), shadow(2), styles.bgWhite, borderWidth(1, 1, 1, 0), { borderColor: "rgba(0,0,0,0.1)" }]}>
                <ButtonComponent titleName={"Continue to Payment\t\t➭"} bgColor={Colors.black} size={15} onPressEvent={navigateToPaymentMenthods} />
            </View>
        </ScreenViewComponent>
    )
}