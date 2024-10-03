import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Active } from '../screens/myOrders/Active'
import { Completed } from '../screens/myOrders/Completed'
import { Colors } from '../styles/Colors'
import { styles } from '../styles/Styles'
const TopTab = createMaterialTopTabNavigator()
const TopTabNavigation = () => {
    return (
        <TopTab.Navigator initialRouteName='Active'
            screenOptions={{
                tabBarActiveTintColor: Colors.black,
                tabBarIndicatorStyle: { backgroundColor: Colors.black, height: 3 },
                tabBarLabelStyle: { fontFamily:styles.poppinsBold},
            }}
            >
            <TopTab.Screen name='Active' component={Active} />
            <TopTab.Screen name='Completed' component={Completed} />
        </TopTab.Navigator>
    )
}

export default TopTabNavigation