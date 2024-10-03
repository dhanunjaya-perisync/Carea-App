import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { brandBugatti,brandBwm,brandFord,brandHonda,brandMercedes,brandToyota,brandToyota2,brandVolvo } from '../../constants/imageLinks'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { borderColor, borderWidth, gap, margin, padding, radius, styles } from '../../styles/Styles'
import { Colors } from '../../styles/Colors'
export const chatList = [
  {name:"BMW Store",iconName:"arrow-down-box",details:"Incoming | Nov 14, 2024",iconColor:Colors.blue,brandImage:brandBwm},
  {name:"Bugatti Store",iconName:"arrow-up-box",details:"Outgoing | Nov 14, 2024",iconColor:"#29bf12",brandImage:brandBugatti},
  {name:"Ford Store",iconName:"arrow-up-box",details:"Outgoing | Nov 14, 2024",iconColor:"#29bf12",brandImage:brandFord},
  {name:"Honda Store",iconName:"arrow-down-box",details:"Incoming | Nov 14, 2024",iconColor:Colors.blue,brandImage:brandHonda},
  {name:"Mercedes Store",iconName:"close-box",details:"Missed | Nov 14, 2024",iconColor:Colors.red,brandImage:brandMercedes},
  {name:"Toyota Store",iconName:"close-box",details:"Missed | Nov 14, 2024",iconColor:Colors.red,brandImage:brandToyota},
  {name:"Volvo Store",iconName:"arrow-down-box",details:"Incoming | Nov 14, 2024",iconColor:Colors.blue,brandImage:brandVolvo},
]

export const Calls = ({navigation}) => {

  const IndivisualChat = ({item,onPressEvent}) => {
    return (
      <TouchableOpacity style={[styles.row,styles.spaceBetween,margin(0,15,0)]} onPress={onPressEvent}>
        <View style={[styles.row,gap(20)]}>
          <View style={[{ height: 60, width: 60 }, styles.bgLightGrey, radius(30)]}>
            <Image source={item.brandImage} style={[{ height: 60, width: 60 }]} resizeMode='contain'/>
          </View>
          <View style={[styles.centerVertical]}>
            <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold]} />
            <View style={[styles.row,gap(5),]}>
              <Icon name={item.iconName} size={16} color={item.iconColor} />
              <TextComponent title={item.details} size={14} style={[styles.poppinsReg]} />
            </View>
          </View>
        </View>
        <View>
          <Icon name='phone' size={30} />
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
        <IndivisualChat item={item} onPressEvent={()=>navigation.navigate("DoCall",{product:item})}/>
      )}
      />
    </ScreenViewComponent>
  )
}