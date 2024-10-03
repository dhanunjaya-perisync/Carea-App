import { View } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { padding, styles, margin } from '../../styles/Styles'

import { SwitchComponent } from '../../components/inputs/SwitchComponent'
export const ProfileNotification = () => {
  const [toggs,setToggs] = useState({gn:false,so:false,vi:false,sp:false,pr:false,pa:false,ca:false,app:false,nsa:false,nta:false})
  const Toggle = ({name,enable,setEnable}) => {
    return (
      <View style={[styles.row, styles.spaceBetween, margin(0, 13, 0)]}>
        <TextComponent title={name} size={18} style={[styles.poppinsMedium]} />
        <SwitchComponent value={enable} onValueChange={setEnable} size={23} />
      </View>
    )
  }
  
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
        <Toggle name={"General Notification"} enable={toggs.gn} setEnable={()=>setToggs(pre => ({...pre,gn:!toggs.gn}))}/>
        <Toggle name={"Sound"} enable={toggs.so} setEnable={()=>setToggs(pre => ({...pre,so:!toggs.so}))}/>
        <Toggle name={"Vibrate"} enable={toggs.vi} setEnable={()=>setToggs(pre => ({...pre,vi:!toggs.vi}))}/>
        <Toggle name={"Special Offers"} enable={toggs.sp} setEnable={()=>setToggs(pre => ({...pre,sp:!toggs.sp}))}/>
        <Toggle name={"Promo & Discount"} enable={toggs.pr} setEnable={()=>setToggs(pre => ({...pre,pr:!toggs.pr}))}/>
        <Toggle name={"Payment"} enable={toggs.pa} setEnable={()=>setToggs(pre => ({...pre,pa:!toggs.pa}))}/>
        <Toggle name={"Cashback"} enable={toggs.ca} setEnable={()=>setToggs(pre => ({...pre,ca:!toggs.ca}))}/>
        <Toggle name={"App Updates"} enable={toggs.app} setEnable={()=>setToggs(pre => ({...pre,app:!toggs.app}))}/>
        <Toggle name={"New Service Available"} enable={toggs.nsa} setEnable={()=>setToggs(pre => ({...pre,nsa:!toggs.nsa}))}/>
        <Toggle name={"New Tips Available"} enable={toggs.nta} setEnable={()=>setToggs(pre => ({...pre,nta:!toggs.nta}))}/>
    </ScreenViewComponent>
  )
}
