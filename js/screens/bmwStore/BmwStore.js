import { View, Text, TouchableOpacity, FlatList,StatusBar } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { borderWidth, flex, margin, marginPosition, padding, paddingPoistion, position, radius, styles, widthValue } from '../../styles/Styles'
export const BmwStore = () => {

  const [messageBox, setMessageBox] = useState(["Hello, Good Morning 🌞",])
  const [inputValue, setInputValue] = useState("")
  const updateMessageBox = () => {
    setMessageBox((pre) => [...pre,inputValue])
    setInputValue("")
  }

   const MessageComponent = ({ message, time }) => {
    return (
      <View style={[styles.row, styles.justifyEnd, margin(0, 6, 0)]}>
        <View style={[{ width: widthValue(1.5) }, styles.bgBlack, paddingPoistion(10, 40, 10, 20), radius(12, 0, 12, 12)]}>
          <TextComponent title={message} size={16} style={[styles.white, styles.poppinsReg, paddingPoistion(0, 10, 0, 0)]} />
          <TextComponent title={time} size={13} style={[styles.white, styles.poppinsReg, styles.positionAbsolute, { right: -20, bottom: -5, }]} opacity={0.9} />
        </View>
      </View>
    )
  }

  const OtherMessageComponent = ({ message, time }) => {
    return (
      <View style={[margin(0, 6, 0)]}>
        <View style={[{ width: widthValue(1.5) }, styles.bgLightGrey, paddingPoistion(10, 40, 10, 20), radius(0, 12, 12, 12)]}>
          <TextComponent title={message} size={16} style={[styles.poppinsReg, paddingPoistion(0, 10, 0, 0)]} />
          <TextComponent title={time} size={13} style={[styles.poppinsReg, styles.positionAbsolute, { right: -20, bottom: -5, }]} opacity={0.9} />
        </View>
      </View>
    )
  }

  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={[styles.allCenter, marginPosition(10, 0, 20, 0)]}>
        <View style={[styles.bgLightGrey, padding(0, 6, 8), radius(5), { width: 60 }]}>
          <TextComponent title={`Today`} fontWeight={"400"} size={14} textCenter={true} />
        </View>
      </View>
      {/* Flat list */}
      <FlatList 
        data={messageBox}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,index})=>(
          <View>
            {index == 0 ? <OtherMessageComponent message={item} time={"09:40"} /> : 
            <MessageComponent message={item} time={"09:40"} />
            }
          </View>
        )}

      />
      {/* Textinput */}
      <View style={[styles.row, styles.spaceBetween, styles.positionAbsolute, { width: widthValue(1), bottom: 0, zIndex: 4 }, paddingPoistion(20, 20, 40, 20), styles.bgWhite]}>
        <TextInputCompnent multiline={true} value={inputValue} onChangeText={setInputValue} placeholderValue={"Message"} hide={"image"} iconSize={18} lengthMax={100} style={[{ width: widthValue(1.35) }, paddingPoistion(0, 40, 0, 0)]} />
        <TouchableOpacity style={[styles.bgBlack, { height: 50, width: 50 }, styles.allCenter, radius(25)]} onPress={updateMessageBox}>
          <Icon name='send' size={22} color={"#fff"} style={[styles.textCenter]} />
        </TouchableOpacity>
      </View>
    </ScreenViewComponent>
  )
}