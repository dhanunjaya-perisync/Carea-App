import { View, Text, TouchableOpacity ,StatusBar} from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useRoute } from '@react-navigation/native'

export const ShippingAddress = ({navigation}) => {
    const [selected, setSelect] = useState("option1")
    const [currentAddress, setCurrentAddress] = useState({})
    const route = useRoute()
    const address = (home,add) => {
        setCurrentAddress({name:home,address:add})
        console.log(currentAddress)
    }
    //navigate
    const navigateToBack = () => {
        route.params.onGoBack(currentAddress)
        navigation.goBack()
    }
    

    const RadioComponent = ({ selected, onSelect, show,name,address}) => {
        return (
            <View style={[styles.row, styles.spaceBetween, paddingPoistion(15, 20, 15, 20), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                <View style={[styles.row, styles.allCenter, gap(15)]}>
                    <View style={[{ height: 56, width: 56 }, radius(28), styles.bgLightGrey, styles.allCenter]}>
                        <View style={[{ height: 40, width: 40 }, radius(20), styles.bgBlack, styles.allCenter]}>
                            <Icon name='location-dot' size={18} color={"#fff"} />
                        </View>
                    </View>
                    <View>
                        <View style={[styles.row, gap(10)]}>
                            <TextComponent title={name} size={18} style={[styles.poppinsSemiBold]} />
                            {show &&
                                <View style={[styles.bgLightGrey, radius(5), { width: 60, height: 25 }, styles.allCenter]}>
                                    <TextComponent title={`Default`} fontWeight={"400"} size={13} />
                                </View>
                            }
                        </View>
                        <TextComponent title={address} size={14} style={[styles.poppinsReg]} opacity={0.8} />
                    </View>
                </View>
                <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={onSelect}>
                    <View style={[{ height: 22, width: 22 }, radius(11), borderWidth(2), styles.borderBlack, styles.allCenter]}>
                        <View style={[{ height: 14, width: 14 }, radius(8), selected ? styles.bgBlack : styles.bgWhite]}></View>
                    </View>
                </TouchableOpacity>
                {/* storing address */}
            </View>
        )
    }

    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <RadioComponent selected={selected === "option1"} onSelect={() => { setSelect("option1"); address("Home","61480 Subbrook Park, PC 5679")}} show={true} name={"Home"} address={"61480 Subbrook Park, PC 5679"}/>
            <RadioComponent selected={selected === "option2"} onSelect={() => { setSelect("option2");address("Office","6993 Meadow valley Terra, PC 3637") }} name={"Office"} address={"6993 Meadow valley Terra, PC 3637"}/>
            <RadioComponent selected={selected === "option3"} onSelect={() => { setSelect("option3");address("Apartment","21833 Clyde Gallagher, PC 4662") }} name={"Apartment"} address={"21833 Clyde Gallagher, PC 4662"}/>
            <RadioComponent selected={selected === "option4"} onSelect={() => { setSelect("option4");address("Parent's House","5259 Blue Bill Park, PC 4627") }} name={"Parent's House"} address={"5259 Blue Bill Park, PC 4627"}/>

            <View style={[marginPosition(10,0,0,0)]}>
                <ButtonComponent titleName={"Add New Address"} color={"#000"} style={[styles.bgLightGrey]} customShadow={2}/>
            </View>
            {/* button */}
            <View style={[styles.positionAbsolute,{bottom:0,width:widthValue(1),zIndex:4},paddingPoistion(18,20,20,20),radius(20,20,0,0),shadow(2),styles.bgWhite,borderWidth(1,1,1,0),{borderColor:"rgba(0,0,0,0.1)"}]}>
                <ButtonComponent titleName={"Apply"} bgColor={Colors.black} size={15} onPressEvent={navigateToBack}/>
            </View>

        </ScreenViewComponent>
    )
}
