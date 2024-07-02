import { Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { borderWidth, padding, radius, styles } from '../../styles/Styles'

export const FGAComponent = ({logo,height,width,resizeMode}) => {

    return (
        <TouchableOpacity style={[styles.borderGrey, borderWidth(1), padding(0, 10, 22), radius(10)]}>
            <Image source={logo} style={[{ height: height ? height : 27, width: width ? width : 27, resizeMode: resizeMode ? resizeMode : "cover" }]} />
        </TouchableOpacity>
    )
}
