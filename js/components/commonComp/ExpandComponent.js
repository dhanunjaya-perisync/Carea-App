import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { borderWidth, marginPosition, paddingPoistion, radius, shadow, styles } from '../../styles/Styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TextComponent } from '../view'

export const ExpandComponent = ({title,desc}) => {
    const [show, setShow] = useState(false)
    const toggleSwitch = () => {
        setShow(!show)
    }
    return (
        <View style={[styles.bgWhite, shadow(2), paddingPoistion(18, 25, 18, 25), radius(10), marginPosition(10, 0, 10, 0)]}>
            <TouchableOpacity hitSlop={{top:20,left:20,bottom:20,right:20}} style={[styles.row, styles.spaceBetween]} onPress={toggleSwitch}>
                <TextComponent title={title} size={18} style={[styles.poppinsSemiBold]} />
                {show ?
                    <Icon name='arrow-down-drop-circle' size={20} />
                    :
                    <Icon name='arrow-right-drop-circle' size={20} />
                }
            </TouchableOpacity>
            {show &&
                <View>
                    <View style={[borderWidth(0, 0, 0, 1), styles.borderGrey, marginPosition(10, 0, 15, 0)]} />
                    <View>
                        <TextComponent size={15} style={[styles.poppinsReg]} title={desc} />
                    </View>
                </View>
            }
        </View>
    )
}
