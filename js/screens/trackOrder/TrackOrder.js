import { View, Text, Image, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, flex, gap, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome6"
import Icon2 from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { carImageOne } from '../../constants/imageLinks'
import { Colors } from '../../styles/Colors'

const orderTrackingDetails = [
    { date: "Order .. Delivery (Train) - Dec 17", address: "32 Manchestar Ave. Ronggold Ga 30736", time: "15:29 PM" },
    { date: "Order .. Customs Port - Dec 16", address: "4 Evergreen Street lake Zurich IL 80923", time: "14:40 PM" },
    { date: "Order are ... Tain - Dec 15", address: "9177 Hillcrest Street Wheeling Wv 20032", time: "2:00 PM" },
    { date: "Order is in Packing - Dec 15", address: "32 Ridge Ave. Ronggold Ga 30736", time: "3:29 PM" },
    { date: "Order Payments - Dec 17", address: "Users", time: "10:00 PM" },
]

const TrackOrder = () => {

    const TrackIcon = ({ iconName, iconColor }) => {
        return (
            <View style={[styles.centerHorizontal, styles.spaceAroundVertical, { height: 80, width: 50 }, gap(10)]}>
                <Icon name={iconName} size={26} color={iconColor} />
                <Icon2 name='checkcircle' size={18} color={iconColor} />
            </View>
        )
    }
    const DashedLine = ({ color }) => {
        return (
            <View style={[{ height: 80, width: 50 }, styles.justifyEnd]}>
                <TextComponent title={"- -- -"} size={16} textCenter={true} color={color} style={[marginPosition(0, 0, 2, 0), styles.poppinsMedium]} />
            </View>
        )
    }
    const DotSeperator = () => {
        return (
            <View >
                <TextComponent title={"|\n|"} color={Colors.grey} style={[styles.poppinsBold, marginPosition(0, 0, 0, 13)]} />
            </View>
        )
    }
    const OrderTrackingComp = ({item}) => {
        return (
            <View style={[styles.row, styles.centerHorizontal, styles.spaceBetween]}>
                <FontAwesome name='dot-circle-o' size={32} />
                <View style={[flex(1),marginPosition(0,0,0,20)]}>
                    <TextComponent title={item.date} size={18} style={[styles.poppinsSemiBold]} />
                    <TextComponent title={item.address} size={14} style={[styles.poppinsReg]} />
                </View>
                <View style={[styles.selfStart]}>
                    <TextComponent title={item.time} style={[styles.poppinsReg, marginPosition(5, 0, 0, 0)]} size={12} />
                </View>
            </View>
        )
    }
    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <View style={[styles.row, padding(20), gap(15), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
                <View style={[styles.bgLightGrey, { width: 110, height: 90 }, styles.allCenter, radius(15)]}>
                    <Image source={carImageOne} style={[{ height: 90, width: 110 }]} resizeMode='contain' />
                </View>
                <View style={[styles.centerVertical]}>
                    <TextComponent title={"BMW M5 Series"} size={18} style={[styles.poppinsSemiBold]} />
                    <View style={[styles.row, gap(8), marginPosition(3, 0, 8, 0)]}>
                        <View style={[{ height: 16, width: 16 }, radius(8), styles.bgLightGrey]}></View>
                        <TextComponent title={"Silver"} />
                    </View>
                    <TextComponent title={"$170,000"} style={[styles.poppinsSemiBold]} size={18} />
                </View>
            </View>
            {/* Tracking */}
            <View style={[styles.row, styles.spaceEvenly]}>
                <TrackIcon iconName={"box"} />
                <DashedLine />
                <TrackIcon iconName={"train-subway"} />
                <DashedLine color={Colors.grey} />
                <TrackIcon iconName={"people-carry-box"} iconColor={Colors.grey} />
                <DashedLine color={Colors.grey} />
                <TrackIcon iconName={"box-open"} iconColor={Colors.grey} />
            </View>
            <TextComponent title={"Car In Delivery (Train)"} textCenter={true} size={19} style={[styles.poppinsSemiBold, margin(0, 10, 0)]} />
            <View style={[borderWidth(0, 0, 0, 1), styles.borderGrey, marginPosition(5, 0, 10, 0)]} />
            <TextComponent title={"Order Status Details"} size={20} style={[styles.poppinsSemiBold,margin(0,10,0)]} />
            <FlatList
            data={orderTrackingDetails}
            key={(_,index)=>index.toString()}
            ItemSeparatorComponent={()=>(<DotSeperator/>)}
            renderItem={({item})=>(
                <OrderTrackingComp item={item} />
            )}
            />
        </ScreenViewComponent>
    )
}

export default TrackOrder