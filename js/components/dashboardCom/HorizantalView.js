import { View,ScrollView} from 'react-native'
import React from 'react'
import { TextComponent } from '../view'
import { Colors } from '../../styles/Colors'
import { styles,paddingPoistion,borderWidth,radius ,marginPosition} from '../../styles/Styles'
const HorizantalView = () => {

    const HorizontalComponent = ({ title, color, bgColor, height }) => {
        return (
            <View style={[{ backgroundColor: bgColor }, marginPosition(0, 0, 0, 10), paddingPoistion(4, 20, 4, 20), borderWidth(3), styles.borderBlack, radius(40)]}>
                <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={color} />
            </View>
        )
    }
    return (
        <ScrollView horizontal={true}>
            <HorizontalComponent title={"All"} bgColor={Colors.black} color={Colors.white} />
            <HorizontalComponent title={"Mercedes"} />
            <HorizontalComponent title={"Tesla"} />
            <HorizontalComponent title={"BMW"} />
            <HorizontalComponent title={"Mercedes"} />
        </ScrollView>
    )
}

export default HorizantalView