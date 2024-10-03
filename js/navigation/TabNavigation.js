import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DashboardScreen } from '../screens/dashboard/Dashboard'
import { Orders } from '../screens/orders/Orders'
import TopTabNavigation from './TopTabNavigation'
import { Inbox } from '../screens/inbox/Inbox'
import { Wallet } from '../screens/wallet/Wallet'
import { Profile } from '../screens/profile/Profile'
import Icon from "react-native-vector-icons/AntDesign"
import { gap, marginPosition, styles } from '../styles/Styles'
import { splashScreenImage } from '../constants/imageLinks'
const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == "Dashboard") {
            iconName = "home";
            size = focused ? 23 : 21;
            color = focused ? "#000" : "#888"
          }
          else if (route.name == "Orders") {
            iconName = "shoppingcart";
            size = focused ? 24 : 22;
            color = focused ? "#000" : "#888"
          }
          else if (route.name == "Inbox") {
            iconName = "message1";
            size = focused ? 22 : 20;
            color = focused ? "#000" : "#888"
          }
          else if (route.name == "Wallet") {
            iconName = "wallet";
            size = focused ? 22 : 20;
            color = focused ? "#000" : "#888"
          }
          else {
            iconName = "user";
            size = focused ? 22 : 20;
            color = focused ? "#000" : "#888"
          }
          return (
            <Icon name={iconName} size={size} color={color} />
          )
        },
        tabBarActiveTintColor: "#000",
      })}
      initialRouteName='Dashboard'
    >
      {/* Home */}
      <Tab.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false, title: "Home" }} />
      {/* Orders */}
      <Tab.Screen name='Orders' component={TopTabNavigation} options={{ title: "My Orders" }} />
      {/* Inbox */}
      <Tab.Screen name='Inbox' component={Inbox} options={{
        headerRight: () => (
          <View style={[styles.row, gap(15), marginPosition(10, 20, 0, 0)]}>
            <TouchableOpacity><Icon name='search1' size={22} /></TouchableOpacity>
            <TouchableOpacity><Icon name='message1' size={20} /></TouchableOpacity>
          </View>
        ),
        headerLeft: () => (
          <Image style={[{ height: 28, width: 28 }, marginPosition(5, 0, 0, 20)]} source={splashScreenImage} resizeMode='contain' />
        )
      }} />

      {/* wallet */}
      <Tab.Screen name='Wallet' component={Wallet} options={{
        title: "My E-Wallet",
        headerRight: () => (
          <View style={[styles.row, gap(15), marginPosition(6, 20, 0, 0)]}>
            <TouchableOpacity><Icon name='search1' size={22} /></TouchableOpacity>
            <TouchableOpacity><Icon name='message1' size={20} /></TouchableOpacity>
          </View>
        ),
        headerLeft: () => (
          <Image style={[{ height: 28, width: 28 }, marginPosition(3, 0, 0, 20)]} source={splashScreenImage} resizeMode='contain' />
        )
      }} />
      {/* profile */}
      <Tab.Screen name='Profile' component={Profile} options={{
        headerLeft: () => (
          <Image style={[{ height: 28, width: 28 }, marginPosition(5, 0, 0, 20)]} source={splashScreenImage} resizeMode='contain' />
        ),
        headerRight: () => (
          <TouchableOpacity><Icon name='message1' size={20} style={[marginPosition(10, 20, 0, 0)]} /></TouchableOpacity>
        )
      }} />

    </Tab.Navigator>
  )
}