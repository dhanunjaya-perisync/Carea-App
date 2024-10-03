import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Calls } from './Calls'
import { Chats } from './Chats'
import { Colors } from '../../styles/Colors'
import { styles } from '../../styles/Styles'
const TopTab = createMaterialTopTabNavigator()
export const Inbox = () => {
  return (
    <TopTab.Navigator initialRouteName='Chats'
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarIndicatorStyle: { backgroundColor: Colors.black, height: 3 },
        tabBarLabelStyle: { fontFamily: styles.poppinsBold },
      }}

    >
      <TopTab.Screen name='Chats' component={Chats} />
      <TopTab.Screen name='Calls' component={Calls} />
    </TopTab.Navigator>
  )
}
