import { View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { gap, marginPosition, padding, paddingPoistion, radius, shadow, styles } from '../../styles/Styles'
import { ScreenViewComponent, TextComponent } from '../../components'
import Icon from "react-native-vector-icons/FontAwesome"
const services = [
  {name:"Customer Service",icon:"headphones"},
  {name:"WhatsApp",icon:"whatsapp"},
  {name:"Website",icon:"globe"},
  {name:"Facebook",icon:"facebook-square"},
  {name:"Twitter",icon:"twitter"},
  {name:"Instagram",icon:"instagram"},
]
export const HelpContactUs = ({navigation}) => {
  const ServiceCom = ({item,onPressEvent}) => {
    return (
      <View style={[styles.bgWhite, shadow(2), paddingPoistion(18, 25, 18, 25), radius(10), marginPosition(13, 0, 13, 0)]}>
        <TouchableOpacity onPress={onPressEvent} style={[styles.row, styles.centerHorizontal, gap(15)]} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
          <Icon name={item.icon} size={20} style={[marginPosition(-2, 0, 0, 0)]} />
          <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold]} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <FlatList
      data={services}
      keyExtractor={(_,index)=>index.toString()}
      renderItem={({item})=>(
        <ServiceCom item={item} onPressEvent={()=>navigation.navigate("CustomerService")}/>
      )}
      />
    </ScreenViewComponent>
  )
}