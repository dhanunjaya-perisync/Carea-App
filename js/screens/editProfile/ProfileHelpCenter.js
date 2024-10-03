import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { HelpContactUs } from './HelpContactUs'
import { HelpFAQ } from './HelpFAQ'
import { Colors } from '../../styles/Colors'
import { styles } from '../../styles/Styles'

const TopTab = createMaterialTopTabNavigator()
export const ProfileHelpCenter = () => {
  return (
    <TopTab.Navigator initialRouteName='HelpFAQ'
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarIndicatorStyle: { backgroundColor: Colors.black, height: 3 },
        tabBarLabelStyle: { fontFamily: styles.poppinsBold },
      }}

    >
      <TopTab.Screen name='HelpFAQ' component={HelpFAQ} options={{title:"Help FAQ"}}/>
      <TopTab.Screen name='HelpContactUs' component={HelpContactUs} options={{title:"Help Contact Us"}}/>
    </TopTab.Navigator>
  )
}
