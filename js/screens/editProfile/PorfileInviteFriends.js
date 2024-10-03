import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { profileImgOne, profileDefault, profileImgTwo } from '../../constants/imageLinks'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, marginPosition, padding, radius, styles } from '../../styles/Styles'
const inviteList = [
  { name: "Jhon wick", no: "+1 342-234-2342", value: false, img: profileImgOne },
  { name: "Benny", no: "+1 342-234-2342", value: true, img: profileDefault },
  { name: "Butcher", no: "+1 342-234-2342", value: false, img: profileImgTwo },
  { name: "Hughi", no: "+1 342-234-2342", value: true, img: profileImgOne },
  { name: "Jamel  Dhilon", no: "+1 342-234-2342", value: false, img: profileDefault },
  { name: "Pedro Eusebio", no: "+1 342-234-2342", value: true, img: profileImgOne },
  { name: "Clinton Mcclure", no: "+1 342-234-2342", value: true, img: profileImgTwo },
]
const PorfileInviteFriends = () => {
  const CardCom = ({ item }) => {
    return (
      <View style={[styles.row, styles.spaceBetween, marginPosition(10, 0, 15, 0)]}>
        <View style={[styles.row, styles.centerHorizontal, gap(15)]}>
          <Image style={[{ height: 56, width: 56 }, radius(28)]} source={item.img} />
          <View>
            <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold]} />
            <TextComponent title={item.no} size={16} style={[styles.poppinsReg]} />
          </View>
        </View>
        {item.value ?
          <TouchableOpacity style={[borderWidth(2), styles.borderBlack, { height: 35 }, styles.allCenter, padding(0, 0, 20), radius(20)]}>
            <TextComponent title={"Invited"} size={16} style={[styles.poppinsMedium]} />
          </TouchableOpacity> :
          <TouchableOpacity style={[borderWidth(2),styles.borderBlack,styles.bgBlack, { height: 35 }, styles.allCenter, padding(0, 0, 20), radius(20)]}>
            <TextComponent title={"Invite"} size={16} style={[styles.poppinsMedium, styles.white]} />
          </TouchableOpacity>
        }
      </View>
    )
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <FlatList
        data={inviteList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CardCom item={item} />
        )}

      />
    </ScreenViewComponent>
  )
}

export default PorfileInviteFriends