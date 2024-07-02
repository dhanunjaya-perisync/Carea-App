import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/FontAwesome"
import { borderColor, borderWidth, flex, paddingPoistion, radius, styles } from '../../styles/Styles'
const SearchComponent = ({placeholder,height,onPressEvent,filterEvent,autoFocus,onChangeText,value}) => {
  const [focus,setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }
  return (
    <View style={[{height:height?height:48},styles.bgLightGrey,styles.row,styles.centerHorizontal,paddingPoistion(0,20,0,15),radius(10),borderWidth(2),focus?styles.borderBlack:{borderColor:"#F6F5F2"}]}>
    <Icon name='search1' size={20} color={"#888"} style={[]}/>
    <TextInput
      placeholder={placeholder}
      maxLength={20}
      style={[flex(1),styles.poppinsReg,paddingPoistion(0,5,0,12),{height:"100%"}]}
      onPress={onPressEvent}
      autoFocus={autoFocus}
      value={value}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      />
    <TouchableOpacity onPress={filterEvent} hitSlop={{top:20,left:20,bottom:20,right:20}}>
    <Icon2 name='exchange' size={18} color={"#888"}  />
    </TouchableOpacity>
    </View>
  )
}

export default SearchComponent