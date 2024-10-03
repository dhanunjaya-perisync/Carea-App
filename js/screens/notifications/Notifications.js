import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, gap, margin, marginPosition, padding, paddingPoistion, radius, shadow, styles } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import { Colors } from '../../styles/Colors'
// notifications
import { notifications } from '../../constants/Notifications'
export const Notifications = () => {

  const CommonComponent = ({ showButton, iconName, title, description, iconWhite, iconBgBlack }) => {
    return (
      <View style={[styles.row, gap(20), paddingPoistion(15, 10, 15, 10), radius(10), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
        <View style={[styles.bgBlack, { height: 60, width: 60 }, styles.allCenter, radius(30)]}>
          <View style={[iconBgBlack ? styles.bgBlack : styles.bgWhite, { height: 25, width: 25 }, styles.allCenter, radius(12.5)]}>
            <Icon name={iconName} size={18} color={iconWhite ? Colors.white : Colors.black} style={[styles.textCenter]} />
          </View>
        </View>
        <View>
          <TextComponent title={title} size={18} style={[styles.poppinsSemiBold]} />
          <TextComponent title={description} size={14} style={[styles.poppinsSemiBold]} color={"#888"} />
          {showButton && <TouchableOpacity style={[borderWidth(2), styles.borderBlack, { width: 120 }, styles.allCenter, radius(20), paddingPoistion(5, 3, 3, 3), marginPosition(5, 0, 0, 0),]}>
            <TextComponent title={"View Details"} size={16} style={[styles.poppinsBold]} />
          </TouchableOpacity>}
        </View>
      </View>
    )
  }


  return (
    <ScreenViewComponent style={[paddingPoistion(0, 20, 0, 20)]}>
      <View>
        <FlatList
          data={notifications}
          key={item => item.id.toString()}
          renderItem={({ item }) => (
            <CommonComponent iconName={item.iconName} showButton={item.showButton} iconWhite={item.iconWhite}
              iconBgBlack={item.iconBgBlack} title={item.title} description={item.description} />
          )}

        />
      </View>
    </ScreenViewComponent>
  )
}
