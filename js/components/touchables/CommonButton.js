import { TouchableOpacity,View} from 'react-native'
import React from 'react'
import { styles,radius,fontSize,shadow,} from '../../styles/Styles'
import { TextComponent } from '../view'
export const ButtonComponent = ({titleName,bgColor,style,size,customShadow,color,bold,onPressEvent}) => {
  return (
      <TouchableOpacity style={[{height:48,backgroundColor:bgColor},styles.allCenter,radius(25),shadow(customShadow?customShadow:1),style]} onPress={onPressEvent}>
        <TextComponent title={titleName} style={[color?color:styles.white,fontSize(size?size:14),styles.poppinsMedium,bold?styles.boldWieght:styles.normalWieght]}/>
      </TouchableOpacity>
      
    
  )
}
