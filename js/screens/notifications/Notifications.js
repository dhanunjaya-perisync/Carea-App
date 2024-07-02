import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, radius, shadow, styles } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { Colors } from '../../styles/Colors'
export const Notifications = () => {

  const CommonIcon = ({iconName,iconColor,bgColor}) => {
    return (
      <View style={[styles.bgBlack,{height:60,width:60},styles.allCenter,radius(30)]}>
      <View style={[{backgroundColor:bgColor},{height:25,width:25},styles.allCenter,radius(12.5)]}>
        <Icon name={iconName} size={18} color={iconColor?iconColor:Colors.black} style={[styles.textCenter]}/>
      </View>
    </View>
    )
  }

  return (
    <ScreenViewComponent style={[paddingPoistion(0,20,0,20)]}>
      <ScrollView>
      {/* today */}
      <TextComponent title={"Today"} size={18} style={[styles.poppinsBold,marginPosition(20,0,10,0)]}/>
      <View style={[styles.row,gap(20),paddingPoistion(15,10,15,10),radius(10),shadow(1),styles.bgWhite,marginPosition(0,10,0)]}>
        <CommonIcon iconName={"percent"} bgColor={Colors.white} />
        <View>
          <TextComponent title={"Your offer has been accepted!"} size={18} style={[styles.poppinsSemiBold]}/>
          <TextComponent title={"Congrats! your offer has been accepted \n by the seller for $170.00"} size={14} style={[styles.poppinsSemiBold]} color={"#888"}/>
          <View style={[borderWidth(2),styles.borderBlack,{width:120},styles.allCenter,radius(20),paddingPoistion(5,3,3,3),marginPosition(5,0,0,0),]}>
            <TextComponent title={"View Details"} size={16} style={[styles.poppinsBold]}/>
          </View>
        </View>
      </View>
      {/* yesterday */}
      <TextComponent title={"Yesterday"} size={18} style={[styles.poppinsBold,marginPosition(20,0,0,0)]}/>
      <View style={[styles.row,gap(20),paddingPoistion(15,10,15,10),radius(10),shadow(1),styles.bgWhite,margin(0,15,0)]}>
        <CommonIcon iconName={"location-dot"} bgColor={Colors.white}/>
        <View>
          <TextComponent title={"Your offer has been accepted!"} size={18} style={[styles.poppinsSemiBold]}/>
          <TextComponent title={"Congrats! your offer has been accepted \n by the seller for $170.00"} size={14} style={[styles.poppinsSemiBold]} color={"#888"}/>
        </View>
      </View>

      <View style={[styles.row,gap(20),paddingPoistion(15,10,15,10),radius(10),shadow(1),styles.bgWhite,margin(0,15,0)]}>
        <CommonIcon iconName={"percent"} bgColor={Colors.white}/>
        <View>
          <TextComponent title={"Your offer has been accepted!"} size={18} style={[styles.poppinsSemiBold]}/>
          <TextComponent title={"Congrats! your offer has been accepted \n by the seller for $170.00"} size={14} style={[styles.poppinsSemiBold]} color={"#888"}/>
          <View style={[borderWidth(2),styles.borderBlack,{width:120},styles.allCenter,radius(20),paddingPoistion(5,3,3,3),marginPosition(5,0,0,0),]}>
            <TextComponent title={"View Details"} size={16} style={[styles.poppinsBold]}/>
          </View>
        </View>
      </View>

      <View style={[styles.row,gap(20),paddingPoistion(15,10,15,10),radius(10),shadow(1),styles.bgWhite,margin(0,15,0)]}>
        <CommonIcon iconName={"credit-card"} bgColor={Colors.black} iconColor={Colors.white}/>
        <View>
          <TextComponent title={"Your offer has been accepted!"} size={18} style={[styles.poppinsSemiBold]}/>
          <TextComponent title={"Congrats! your offer has been accepted \n by the seller for $170.00"} size={14} style={[styles.poppinsSemiBold]} color={"#888"}/>
        </View>
      </View>
        {/* December */}
      <TextComponent title={"December 22, 2024"} size={18} style={[styles.poppinsBold,marginPosition(20,0,0,0)]}/>
      <View style={[styles.row,gap(20),paddingPoistion(15,10,15,10),radius(10),shadow(1),styles.bgWhite,margin(0,15,0)]}>
        <CommonIcon iconName={"user-large"} iconColor={Colors.white}/>
        <View>
          <TextComponent title={"Your offer has been accepted!"} size={18} style={[styles.poppinsSemiBold]}/>
          <TextComponent title={"Congrats! your offer has been accepted \n by the seller for $170.00"} size={14} style={[styles.poppinsSemiBold]} color={"#888"}/>
        </View>
      </View>
      </ScrollView>
    </ScreenViewComponent>
  )
}
