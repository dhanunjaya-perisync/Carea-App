import { StatusBar, View, TextInput, } from 'react-native'
import React, { useState, useRef } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import {
  flex, margin, borderWidth,
  fontSize, gap, marginPosition, paddingPoistion, radius, styles, shadow
} from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
// redux 
import { useSelector } from 'react-redux'
export const CreateNewPin = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => {
    setIsFocus(true)
    
  }
  const handleBlur = () => {
    setIsFocus(false)
  }

  const [otp, setOtp] = useState(['', '', '', '']);
  const refs = useRef([]);
  const handleOtpInputChange = (text, index) => {
    if(index == 3 && text.length !=1){
        refs.current[index-1].focus();
    }
    if(index == 2 && text.length !=1){
      refs.current[index-1].focus();
    }
    if(index == 1 && text.length !=1){
      refs.current[index-1].focus();
    }
    
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text.length === 1 && index < 3) {
      refs.current[index + 1].focus();
    }
  };
  const goToFingerPrintpage = () => {
    navigation.navigate("FingerPrintScreen")
  }

  return (

    <ScreenViewComponent style={[flex(1), paddingPoistion(40,20,0,20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <TextComponent title={"Add a PIN number to make your account \n more secure."} size={16} textCenter={true} style={[margin(0, 40, 0)]} myFontFamily={"Poppins-Medium"} />
      <View style={[styles.row, marginPosition(0, 0,40, 0),gap(20),styles.spaceEvenly]}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={1}
            style={[fontSize(20), styles.poppinsSemiBold, styles.black, flex(1), borderWidth(2),
            { borderColor: isFocus ? "black" : "#F6F5F2", backgroundColor: "#F6F5F2" ,elevation:2}, radius(10),styles.textCenter]}
            secureTextEntry={true}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleOtpInputChange(text, index)}
            ref={(ref) => (refs.current[index] = ref)}
          />

        ))}

      </View>
      <ButtonComponent bgColor={Colors.black} titleName={"Continue"} size={16} customShadow={4} style={[marginPosition(40, 0, 0, 0)]} onPressEvent={goToFingerPrintpage} />

    </ScreenViewComponent>
  )
}