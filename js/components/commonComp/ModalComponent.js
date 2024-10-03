import {  View} from 'react-native'
import React from 'react'
import {  TextComponent } from '../../components'
import {  marginPosition,  styles, heightValue,  padding, widthValue, flex, opacity, radius } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
import { Modal } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"

export const ModalComponent = ({visible,onRequestClose,iconName,title,desc,buttonOneName,buttonTwoName,buttonOneEvent,buttonTwoEvent}) => {

  return (
    <Modal
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
>
    <View style={[flex(1), styles.allCenter, { backgroundColor: "rgba(0,0,0,0.6)" }]}>
        <View style={[{ height: heightValue(2.1), width: widthValue(1.3) }, styles.bgWhite, radius(25), opacity(1), padding(0, 0, 25), styles.spaceEvenly]}>
            <View style={[styles.allCenter]}>
                <View style={[{ height: 120, width: 120 }, styles.bgBlack, radius(60), styles.allCenter]}>
                    <Icon name={iconName} size={40} color={"#fff"} />
                </View>
            </View>
            <View>
                <TextComponent title={title} size={24} style={[styles.poppinsSemiBold, styles.textCenter]} />
                <TextComponent title={desc} size={16} style={[styles.poppinsMedium, styles.textCenter]} />
            </View>
            <View >
                <ButtonComponent titleName={buttonOneName} style={[styles.bgBlack,marginPosition(0,0,10,0)]} size={15} onPressEvent={buttonOneEvent}/>
                <ButtonComponent titleName={buttonTwoName} style={[styles.bgLightGrey]} size={15} color={Colors.black} onPressEvent={buttonTwoEvent}/>
            </View>
        </View>
    </View>
</Modal>
  )
}