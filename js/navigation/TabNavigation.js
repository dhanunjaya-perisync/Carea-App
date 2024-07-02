import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DashboardScreen } from '../screens/dashboard/Dashboard'
import { Orders } from '../screens/orders/Orders'
import { Inbox } from '../screens/inbox/Inbox'
import { Wallet } from '../screens/wallet/Wallet'
import { Profile } from '../screens/profile/Profile'
import Icon from "react-native-vector-icons/AntDesign"
const Tab = createBottomTabNavigator()
export const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon:({focused,size,color}) =>{
          let iconName;
          if(route.name == "Dashboard"){
            iconName = "home";
            size = focused ? 23: 21;
            color = focused ? "#000" : "#888"
          }
          else if(route.name == "Orders"){
            iconName = "shoppingcart";
            size = focused ? 24: 22;
            color = focused ? "#000" : "#888"
          }
          else if(route.name == "Inbox"){
            iconName = "message1";
            size = focused ? 22: 20;
            color = focused ? "#000" : "#888"
          }
          else if(route.name == "Wallet"){
            iconName = "wallet";
            size = focused ? 22: 20;
            color = focused ? "#000" : "#888"
          }
          else{
            iconName = "user";
            size = focused ? 22: 20;
            color = focused ? "#000" : "#888"
          }
          return (
            <Icon name={iconName} size={size} color={color}/>
          )
        },
        tabBarActiveTintColor:"#000",
    })}
    initialRouteName='Dashboard'
    >
        <Tab.Screen name='Dashboard' component={DashboardScreen} options={{headerShown:false,title:"Home"}} />
        <Tab.Screen name='Orders' component={Orders} />
        <Tab.Screen name='Inbox' component={Inbox} />        
        <Tab.Screen name='Wallet' component={Wallet} />
        <Tab.Screen name='Profile' component={Profile} />
        
    </Tab.Navigator>
  )
}