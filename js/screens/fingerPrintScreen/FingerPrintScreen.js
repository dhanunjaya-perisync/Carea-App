import { View, Image, ActivityIndicator, StatusBar} from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import {  heightValue, margin, padding, styles, widthValue ,flex, opacity, radius} from '../../styles/Styles'
import { boimetricIcon } from '../../constants/imageLinks'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
import { Modal } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/authReducer/isLogin'
//redux 
 export const FingerPrintScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [visible,setVisible] = useState(false)
    const show = () => {
        setVisible(true)
        setTimeout(() => {
          hide()
          goToDashboard()
        }, 2000);
    }
    const hide = () => {
        setVisible(false)
    }
    const goToDashboard = () => {
      dispatch(setIsLoggedIn(true))
    }
  return (
    <ScreenViewComponent style={[padding(0,0,20),styles.spaceEvenly]}>
       <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>
      <Modal
      transparent={true}
      visible={visible}
      onRequestClose={hide}
      >
        <View style={[flex(1),styles.allCenter,{backgroundColor:"rgba(0,0,0,0.7)"}]}>
          <View style={[{height:heightValue(2.1),width:widthValue(1.3)},styles.bgWhite,radius(25),opacity(1),padding(0,0,25),styles.centerHorizontal,styles.spaceEvenly]}>
            <View style={[{height:120,width:120},styles.bgBlack,radius(60),styles.allCenter]}>
                <Icon name='user-alt' size={40} color={"#fff"}/>
            </View>
           <View>
            <TextComponent title={"Congratulation!"} size={24} style={[styles.poppinsSemiBold,styles.textCenter]}/>
            <TextComponent title={"Your account is ready to use, You willl be reduced redirected to the Home page in a few seconds."} size={16} style={[styles.poppinsReg,styles.textCenter]}/>
           </View>
            <View>
                <ActivityIndicator size={70} color={"#000"}/>
            </View>
          </View>
        </View>
      </Modal>
        <View>
        <TextComponent title={"Add a fingerprint to make your account \n more secure."} size={16} textCenter={true} style={[margin(0,40,0)]} myFontFamily={"Poppins-Medium"}/>
        </View>
        <View style={[styles.allCenter]}>
            <Image
            style={[{height:heightValue(3),width:widthValue(1.2)}]}
            source={boimetricIcon}
            resizeMode='contain'
            />
        </View>
        <View>
        <TextComponent title={"Please put your finger on the fingerprint \n scanner to get started."} size={16} textCenter={true} style={[margin(0,40,0)]} myFontFamily={"Poppins-Medium"}/>
        </View>

        <View>
            <View style={[styles.row,styles.spaceBetween]}>
                <ButtonComponent titleName={"Skip"} bgColor={Colors.grey} size={16} customShadow={1} style={[{width:widthValue(2.3)}]} color={Colors.black} bold={true} onPressEvent={goToDashboard}/>
                <ButtonComponent titleName={"Continue"} bgColor={Colors.black} size={16} customShadow={1} style={[{width:widthValue(2.3)}]} onPressEvent={show}/>
            </View>
        </View>


    </ScreenViewComponent>
  )
}