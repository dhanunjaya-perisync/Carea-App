import { View,Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { padding, styles, margin, borderWidth, marginPosition, radius } from '../../styles/Styles'
import { privacyPolicy } from '../../constants/privacyPolicy'
export const ProfilePrivacyPolicy = () => {
  const ContentCom = ({title,desc}) => {
    return (
      <View>
          <TextComponent title={title} size={20} style={[styles.poppinsSemiBold,marginPosition(0,0,10,0)]} />
          <TextComponent size={15} style={[styles.poppinsReg,marginPosition(0,0,10,0)]} title={desc}/>
      </View>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0,0,20)]}>
       <FlatList
       data={privacyPolicy}
       keyExtractor={(_,index)=>index.toString()}
       renderItem={({item})=>(
          <ContentCom title={item.title} desc={item.description}/>
       )}
       />
     
    </ScreenViewComponent>
  )
}