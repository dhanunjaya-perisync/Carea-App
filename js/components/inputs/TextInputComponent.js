
import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { borderWidth, flex, fontSize, gap, marginPosition, paddingPoistion, radius, styles, } from '../../styles/Styles'
import Icon from "react-native-vector-icons/Entypo"
import { TextComponent } from '../view'
import { Colors } from '../../styles/Colors'

export const TextInputCompnent = ({noSecure,pickImage,multiline,iconBlack,value,onChangeText,errorMessage,placeholderValue, iconName, iconSize, hide, size, inputHeight, inputWidth, iconColor, leftMargin, style, type, lengthMax, shadow, inputLeft,edit}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const buttonPressed = () => {
    setShowPassword(!showPassword)
  }
  useEffect(() => {
    if(hide=="image"){
      setShowPassword(true)
    }
  }, [])
  

  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <View>
      <View style={[styles.bgLightGrey, radius(10), styles.row, styles.centerHorizontal, gap(8), { height: inputHeight ? inputHeight : 50, width: inputWidth, position: "relative", borderColor: isFocus ? "black" : "#F6F5F2", elevation: shadow }, borderWidth(2), style]}>
      {iconName &&
        <Icon name={iconName} style={[marginPosition(0, 0, 0, leftMargin ? leftMargin : 20)]} size={iconSize} color={iconBlack ? "#000" : "#888888"} />
      }
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={lengthMax ? lengthMax : 25}
        placeholder={placeholderValue}
        style={[fontSize(size ? size : 15), styles.poppinsSemiBold, styles.black, flex(1), paddingPoistion(0,0,0,0), { height: "100%" }, marginPosition(0,0,0,inputLeft?inputLeft:15),style]}
        secureTextEntry={noSecure ? false:(hide?!showPassword:false)}
        keyboardType={type ? type : "default"}
        editable={!edit ? edit:true}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
      />
      { hide == "eye" || hide == "eye-with-line" &&
        <TouchableOpacity hitSlop={{top:20,left:20,bottom:20,right:20}} onPress={buttonPressed} style={[{ position: "absolute", right: 15 }]}>
          <Icon name={showPassword?"eye":"eye-with-line"}  size={iconSize} color={iconBlack ? "#000" : "#888888"} />
        </TouchableOpacity>
      }
      {
        hide != null && hide!="image" && hide!="location" && hide != "eye" && hide!="eye-with-line" && (
          <Icon name={hide}  size={iconSize} color={iconBlack ? "#000" : "#888888"} style={[{ position: "absolute", right: 15 }]}/>
        )
      }
      {
        hide == "image" &&
        <TouchableOpacity style={[{ position: "absolute", right: 15 }]} onPress={pickImage}>
          <Icon name={hide}  size={iconSize} color={iconBlack ? "#000" : "#888888"}/>
        </TouchableOpacity>
      }

    </View>
    {errorMessage ? <TextComponent title={errorMessage} size={16} style={[styles.poppinsMedium,marginPosition(0,0,0,5)]} color={Colors.red}/> : null }
    </View>
  )
}