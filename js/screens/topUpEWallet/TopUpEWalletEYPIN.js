import { StatusBar} from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import {  marginPosition, paddingPoistion, margin, flex } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
import { OtpComponent } from '../../components/commonComp/OtpComponent'
import { ModalComponent } from '../../components/commonComp/ModalComponent'
export const TopUpEWalletEYPIN = ({navigation}) => {
    const [visible, setVisible] = useState(false)
    const show = () => {
        setVisible(true)
        setTimeout(() => {
            hide()
        }, 10000);
    }
    const hide = () => {
        setVisible(false)
    }
    
  return (
    <ScreenViewComponent style={[flex(1), paddingPoistion(40, 20, 0, 20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <TextComponent title={"Enter your PIN to Confirm Payment"} size={16} textCenter={true} style={[margin(0, 40, 0)]} myFontFamily={"Poppins-Medium"} />
            <OtpComponent/>
            <ModalComponent visible={visible} onRequestClose={()=>setVisible(false)} 
            iconName={"wallet"}
            title={"Top up Successful!"}
            desc={"You have successfully top up e-wallet for $10,000"}
            buttonOneName={"View E-Receipt"}
            buttonTwoName={"Cancel"}
            buttonOneEvent={()=>navigation.navigate("EReceipt")}
            buttonTwoEvent={()=>setVisible(false)}

                />
            <ButtonComponent bgColor={Colors.black} titleName={"Continue"} size={16} customShadow={4} style={[marginPosition(40, 0, 0, 0)]} onPressEvent={show}/>
        </ScreenViewComponent>
  )
}
