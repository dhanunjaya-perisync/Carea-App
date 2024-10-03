import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { useRoute } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons"
import { borderWidth, flex, gap, marginPosition, radius, styles } from '../../styles/Styles'
import { Colors } from '../../styles/Colors'
export const DoCall = ({ navigation }) => {
    const route = useRoute()
    const { product } = route.params
    const PhoneIcon = ({iconName}) => {
        return (
            <TouchableOpacity style={[{ height: 64, width: 64 }, styles.bgBlack, radius(32), styles.allCenter]}>
                <Icon name={iconName} size={28} color={Colors.white} />
            </TouchableOpacity>
        )
    }
    return (
        <ScreenViewComponent>
            <View style={[styles.allCenter, gap(10), flex(1)]}>
                <Image source={product.brandImage} style={[{ height: 170, width: 170 }, marginPosition(-40, 0, 25, 0)]} resizeMode='contain' />
                <TextComponent title={"BMW Store"} textCenter={true} style={[styles.poppinsSemiBold]} size={26} />
                <TextComponent title={"01:22 minutes"} textCenter={true} style={[styles.poppinsMedium]} opacity={0.7} size={16} />
                <View style={[styles.row, styles.positionAbsolute, { bottom: 40 }, gap(20)]}>
                    <PhoneIcon iconName={"close"}/>
                    <PhoneIcon iconName={"videocam-off"}/>
                    <PhoneIcon iconName={"volume-medium"}/>
                </View>
            </View>
        </ScreenViewComponent>
    )
}