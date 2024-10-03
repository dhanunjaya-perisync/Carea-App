import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextComponent } from '../../components'
import { borderWidth, gap, margin, paddingPoistion, radius, shadow, styles } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"

export const SelectPaymentMethodComponent = ({ selected, onSelect, iconName, name, price, showIcon, cover, logo, showPrice, showText }) => {
    return (
        <View style={[styles.row, styles.spaceBetween, paddingPoistion(18, 20, 18, 20), radius(15), shadow(1), styles.bgWhite, margin(0, 10, 0)]}>
            <View style={[styles.row, styles.allCenter, gap(15)]}>
                {showIcon ? <Icon name={iconName} size={20} color={"#000"} /> : (
                    <Image source={logo} style={[{ width: 25, height: 25 }]} resizeMode={cover ? "cover" : "contain"} />
                )}
                <TextComponent title={name} size={18} style={[styles.poppinsSemiBold]} />
            </View>
            <View style={[styles.row, gap(10)]}>
                <TextComponent title={showPrice && selected ? price : null} size={18} style={[styles.poppinsSemiBold]} />
                {showText ?
                    <TextComponent title={"Connected"} size={17} style={[styles.poppinsSemiBold]} /> :
                    <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={onSelect}>
                        <View style={[{ height: 22, width: 22 }, radius(11), borderWidth(2), styles.borderBlack, styles.allCenter]}>
                            <View style={[{ height: 14, width: 14 }, radius(8), selected ? styles.bgBlack : styles.bgWhite]}></View>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
