import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextComponent } from '../../components'
import { gap, marginPosition, padding, radius, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome"

export const CarCardComponent = ({item,onPressLike}) => {
  const [like,setLike] = useState(false)
  return (
    <View style={[{position:"relative",width:widthValue(2.32)},marginPosition(0,0,20,0)]}>
        <View style={[,styles.bgLightGrey,radius(20),styles.allCenter]}>
          <Image
          source={item.imageUrl}
          style={[{height:130,width:140,}]}
          resizeMode='contain'
          />
          <TouchableOpacity style={[styles.positionAbsolute,{right:15,top:15}]} onPress={onPressLike}>
              <Icon name={item.liked?"heart":"heart-o"} size={17}/>
          </TouchableOpacity>
        </View>
        <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold,marginPosition(8,0,0,0)]}/>
        <View style={[styles.row,gap(10),styles.centerHorizontal]}>
          <Icon name='star-half-full' size={17}/>
          <TextComponent title={item.rating+"  | "} fontWeight={"600"} color={"#888"}/>
          <View style={[styles.bgLightGrey,padding(0,5,10),radius(5)]}>
          <TextComponent title={item.status} fontWeight={"600"} size={14}/>
          </View>
        </View>
        <TextComponent title={"$"+item.price} style={[styles.poppinsSemiBold]} size={18} />
       </View>
  )
}
