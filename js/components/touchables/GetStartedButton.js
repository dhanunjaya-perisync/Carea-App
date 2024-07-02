import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { TextComponent } from '../view'
import { fontSize, marginPosition, radius, shadow, styles } from '../../styles/Styles'
const GetStartedButton = ({titleName}) => {
  return (
        <Pressable style={[{height:48},styles.bgBlack,styles.allCenter,marginPosition(0,0,0,"7.5%"),radius(25)]}>
            <TextComponent title={titleName} style={[styles.white,fontSize(16),styles.poppinsReg,shadow(4)]}/>
        </Pressable>
  )
}

export default GetStartedButton
