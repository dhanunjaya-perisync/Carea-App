import { View, Text, TouchableOpacity,StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from 'react-native/Libraries/NewAppScreen'


export const ChooseShipping = ({navigation}) => {
    const [selected, setSelect] = useState("")

    const RadioComponent = ({ selected, onSelect,iconName,name,date,price }) => {
        return (
            <View style={[styles.row, styles.spaceBetween, paddingPoistion(18, 20, 18, 20), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                <View style={[styles.row, styles.allCenter, gap(15)]}>
                    <View style={[{ height: 50, width: 50 }, radius(25), styles.bgBlack, styles.allCenter]}>
                            <Icon name={iconName} size={16} color={"#fff"} />
                    </View>
                    <View>
                            <TextComponent title={name} size={18} style={[styles.poppinsSemiBold]} />
                        <TextComponent title={date} size={14} style={[styles.poppinsReg]} opacity={0.8} />
                    </View>
                </View>
                <View style={[styles.row,gap(10)]}>
                    <TextComponent title={price} size={18} style={[styles.poppinsSemiBold]}/>
                <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={onSelect}>
                    <View style={[{ height: 22, width: 22 }, radius(11), borderWidth(2), styles.borderBlack, styles.allCenter]}>
                        <View style={[{ height: 14, width: 14 }, radius(8), selected ? styles.bgBlack : styles.bgWhite]}></View>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <RadioComponent selected={selected === "option1"} iconName={"truck"} onSelect={() => { setSelect("option1") }} name={"Truck"} date={"Est. Arrival, Dec 20-23"} price={"$200"}/>
            <RadioComponent selected={selected === "option2"} iconName={"train-subway"} onSelect={() => { setSelect("option2") }}  name={"Train"} date={"Est. Arrival, Dec 20-22"} price={"$250"}/>
            <RadioComponent selected={selected === "option3"} iconName={"ship"} onSelect={() => { setSelect("option3") }}  name={"Container Ship"} date={"Est. Arrival, Dec 19-20"} price={"$300"}/>
            <RadioComponent selected={selected === "option4"} iconName={"plane"} onSelect={() => { setSelect("option4") }}  name={"Plane"} date={"Est. Arrival, Dec 18-19"} price={"$400"}/>
            {/* button */}
            <View style={[styles.positionAbsolute, { bottom: 0, width: widthValue(1), zIndex: 4 }, paddingPoistion(18, 20, 20, 20), radius(20, 20, 0, 0), shadow(2), styles.bgWhite, borderWidth(1, 1, 1, 0), { borderColor: "rgba(0,0,0,0.1)" }]}>
                <ButtonComponent titleName={"Apply"} bgColor={Colors.black} size={15} customShadow={2}/>
            </View>

        </ScreenViewComponent>
    )
}
