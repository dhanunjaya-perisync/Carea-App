import React, { useState } from "react";
import { View, Text, Platform, TextInput, Keyboard, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { borderColor, borderWidth, flex, fontSize, marginPosition, opacity, padding, paddingPoistion, radius, styles, textColor } from "../../styles/Styles";
import Icon from "react-native-vector-icons/Entypo"
// import { styles } from "../../styles/Styles";
export const CheckBoxComponent = ({ style, size, onPress }) => {

    const { darkMode } = useSelector(state => state.system)
    const [check, setCheck] = useState(false)

    // console.log("asdfasdf", check);
    const checkFun = () => {
        setCheck(!check)
    }
    return(
        <TouchableOpacity onPress={checkFun} style={[borderWidth(2.5), radius(6), {width: size ? size*22 : 22, height: size ? size*22 : 22},check?styles.bgBlack:styles.bgWhite,styles.allCenter]}>
            <Icon size={14} name={check ? "check" : ""} style={[styles.white]}/>
        </TouchableOpacity>
    )
}