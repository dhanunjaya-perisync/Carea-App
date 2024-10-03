import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-switch'
import { ScreenViewComponent,TextComponent } from '../../components'
import { padding, styles } from '../../styles/Styles'
import { Colors } from '../../styles/Colors'

export const SwitchComponent = ({value,onValueChange,size}) => {

  return (
    <Switch
    value={value}
    onValueChange={onValueChange}
    activeText=''
    inActiveText=''
    circleSize={size}
    backgroundInactive={Colors.grey}
    backgroundActive={Colors.black}
    switchLeftPx={4}
    switchRightPx={4}
    circleBorderInactiveColor={Colors.white}

  />
  )
}