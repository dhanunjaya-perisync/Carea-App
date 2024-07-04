import { StatusBar, View, TextInput} from 'react-native'
import React, { useState, useRef } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, fontSize, gap, marginPosition, paddingPoistion, styles, heightValue, margin, padding, widthValue, flex, opacity, radius } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
import { Modal } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"

export const EnterYourPin = () => {
    //otp
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
        if (index == 3 && text.length != 1) {
            refs.current[index - 1].focus();
        }
        if (index == 2 && text.length != 1) {
            refs.current[index - 1].focus();
        }
        if (index == 1 && text.length != 1) {
            refs.current[index - 1].focus();
        }

        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        if (text.length === 1 && index < 3) {
            refs.current[index + 1].focus();
        }
    };
    //modal
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
            <View style={[styles.row, marginPosition(0, 0, 40, 0), gap(20), styles.spaceEvenly]}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        maxLength={1}
                        style={[fontSize(20), styles.poppinsSemiBold, styles.black, flex(1), borderWidth(2),
                        { borderColor: isFocus ? "black" : "#F6F5F2", backgroundColor: "#F6F5F2", elevation: 2 }, radius(10), styles.textCenter]}
                        secureTextEntry={true}
                        keyboardType="numeric"
                        value={value}
                        onChangeText={(text) => handleOtpInputChange(text, index)}
                        ref={(ref) => (refs.current[index] = ref)}
                    />

                ))}

            </View>
            <Modal
                transparent={true}
                visible={visible}
                onRequestClose={hide}
            >
                <View style={[flex(1), styles.allCenter, { backgroundColor: "rgba(0,0,0,0.6)" }]}>
                    <View style={[{ height: heightValue(2.1), width: widthValue(1.3) }, styles.bgWhite, radius(25), opacity(1), padding(0, 0, 25), styles.spaceEvenly]}>
                        <View style={[styles.allCenter]}>
                            <View style={[{ height: 120, width: 120 }, styles.bgBlack, radius(60), styles.allCenter]}>
                                <Icon name='shopping-cart' size={40} color={"#fff"} />
                            </View>
                        </View>
                        <View>
                            <TextComponent title={"Order Successful!"} size={24} style={[styles.poppinsSemiBold, styles.textCenter]} />
                            <TextComponent title={"You have successfully made order"} size={16} style={[styles.poppinsMedium, styles.textCenter]} />
                        </View>
                        <View >
                            <ButtonComponent titleName={"View Order"} style={[styles.bgBlack,marginPosition(0,0,10,0)]} size={15}/>
                            <ButtonComponent titleName={"View E-Receipt"} style={[styles.bgLightGrey]} size={15} color={Colors.black}/>
                        </View>
                    </View>
                </View>
            </Modal>
            <ButtonComponent bgColor={Colors.black} titleName={"Continue"} size={16} customShadow={4} style={[marginPosition(40, 0, 0, 0)]} onPressEvent={show} />

        </ScreenViewComponent>
    )
}