import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { padding, styles, margin, marginPosition } from '../../styles/Styles'
import { SwitchComponent } from '../../components/inputs/SwitchComponent'
import Icon from "react-native-vector-icons/MaterialIcons"
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
export const ProfileSecurity = () => {
  const [toggs, setToggs] = useState({ rem: false, face: false, bio: false })
  const Toggle = ({ name, enable, setEnable, rightArrow }) => {
    return (
      <View style={[styles.row, styles.spaceBetween, margin(0, 13, 0)]}>
        <TextComponent title={name} size={18} style={[styles.poppinsMedium]} />
        {rightArrow ?
          <Icon name='keyboard-arrow-right' size={25} /> :
          <SwitchComponent value={enable} onValueChange={setEnable} size={23} />}
      </View>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <Toggle name={"Remember me"} enable={toggs.rem} setEnable={() => setToggs(pre => ({ ...pre, rem: !toggs.rem }))} />
      <Toggle name={"Face ID"} enable={toggs.face} setEnable={() => setToggs(pre => ({ ...pre, face: !toggs.face }))} />
      <Toggle name={"Biometric ID"} enable={toggs.bio} setEnable={() => setToggs(pre => ({ ...pre, bio: !toggs.bio }))} />
      <TouchableOpacity>
      <Toggle name={"Google Authenticator"} rightArrow={true} />
      </TouchableOpacity>
      <ButtonComponent titleName={"Change PIN"} size={15} style={[styles.bgLightGrey,marginPosition(10,0,20,0)]} color={Colors.black}/>
      <ButtonComponent titleName={"Change Password"} size={15} style={[styles.bgLightGrey]} color={Colors.black}/>


    </ScreenViewComponent>
  )
}