import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { brandBugatti,brandBwm,brandFord,brandHonda,brandMercedes,brandToyota,brandVolvo } from '../../constants/imageLinks'
import {  gap, margin, padding, radius, styles } from '../../styles/Styles'
import { Colors } from '../../styles/Colors'
export const chatList = [
  {name:"BMW Store",iconName:"arrow-down-box",details:"Wow,This really fast 🔥",iconColor:Colors.blue,brandImage:brandBwm},
  {name:"Bugatti Store",iconName:"arrow-up-box",details:"zing zing Amazing 😍🥰",iconColor:"#29bf12",brandImage:brandBugatti},
  {name:"Ford Store",iconName:"arrow-up-box",details:"zing zing Amazing 😍🥰",iconColor:"#29bf12",brandImage:brandFord},
  {name:"Honda Store",iconName:"arrow-down-box",details:"Wow,This really fast 🔥",iconColor:Colors.blue,brandImage:brandHonda},
  {name:"Mercedes Store",iconName:"close-box",details:"Hello, your are Welcome",iconColor:Colors.red,brandImage:brandMercedes},
  {name:"Toyota Store",iconName:"close-box",details:"Hello, your are Welcome",iconColor:Colors.red,brandImage:brandToyota},
  {name:"Volvo Store",iconName:"arrow-down-box",details:"Wow,This really fast 🔥",iconColor:Colors.blue,brandImage:brandVolvo},
]
export const Chats = ({navigation}) => {
  const IndivisualChat = ({item}) => {
    return (
      <TouchableOpacity style={[styles.row,styles.spaceBetween,margin(0,15,0)]}>
        <View style={[styles.row,gap(20)]}>
          <View style={[{ height: 60, width: 60 }, styles.bgLightGrey, radius(30)]}>
            <Image source={item.brandImage} style={[{ height: 60, width: 60 }]} resizeMode='contain'/>
          </View>
          <View style={[styles.centerVertical]}>
              <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold]} />
              <TextComponent title={item.details} size={14} style={[styles.poppinsReg]} />
          </View>
        </View>
        <View style={[gap(8),styles.centerHorizontal]}>
          <View style={[{height:22,width:22,},radius(11),styles.bgBlack,styles.allCenter]}>
              <TextComponent title={"2"} style={[styles.white]} size={12} fontWeight={"500"}/>
          </View>
          <View>
            <TextComponent title={"09:32"} size={15}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0,0,20)]}>
    <FlatList
    data={chatList}
    key={(_,index)=>index.toString()}
    renderItem={({item})=>(
      <IndivisualChat item={item}/>
    )}
    />
  </ScreenViewComponent>
  )
}
