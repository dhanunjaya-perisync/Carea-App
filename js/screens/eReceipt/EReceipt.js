import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { barCode } from '../../constants/imageLinks'
import { carImageOne } from '../../constants/imageLinks'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { gap, margin, marginPosition, padding, radius, shadow, styles, widthValue, borderWidth, paddingPoistion, position } from '../../styles/Styles'
export const EReceipt = () => {
    const BillPart = ({ title, price }) => {
        return (
            <View style={[styles.row, styles.spaceBetween, marginPosition(0, 0, 15, 0)]}>
                <TextComponent title={title} size={16} style={[styles.poppinsReg]} opacity={0.7} />
                <TextComponent title={price} size={18} style={[styles.poppinsMedium]} />
            </View>
        )
    }
    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            {/* bar code */}
            <View style={[styles.row, styles.allCenter]}>
                <Image source={barCode} style={[{ width: widthValue(2.5), height: 100 }]} resizeMode='contain' />
                <Image source={barCode} style={[{ width: widthValue(2.5), height: 100 }]} resizeMode='contain' />
            </View>

            {/* card */}
            <View style={[styles.row, padding(20), gap(15), radius(25), shadow(1), styles.bgWhite, marginPosition(20,0,15,0)]}>
                <View style={[styles.bgLightGrey, { width: 110, height: 90 }, styles.allCenter, radius(15)]}>
                    <Image source={carImageOne} style={[{ height: 90, width: 110 }]} resizeMode='contain' />
                </View>
                <View style={[styles.centerVertical]}>
                    <TextComponent title={"BMW M5 Series"} size={18} style={[styles.poppinsSemiBold]} />
                    <View style={[styles.row, gap(8), marginPosition(3, 0, 8, 0)]}>
                        <View style={[{ height: 16, width: 16 }, radius(8), styles.bgLightGrey]}></View>
                        <TextComponent title={"Silver"} />
                    </View>
                </View>
            </View>
            {/* bill */}
            <View style={[paddingPoistion(15, 20, 10, 20), shadow(1), radius(20), styles.bgWhite, marginPosition(10, 0, 0, 0)]}>
                <BillPart title={"Amount"} price={"$170,000"} />
                <BillPart title={"Shipping"} price={"$250"} />
                <BillPart title={"Tax"} price={"$1,000"} />
                <View style={[borderWidth(0, 0, 0, 1), styles.borderLightGrey, marginPosition(5, 0, 15, 0)]} />
                <BillPart title={"Total"} price={"$171,250"} />
            </View>

            <View style={[paddingPoistion(15, 20, 10, 20), shadow(1), radius(20), styles.bgWhite, marginPosition(25, 0, 0, 0)]}>
                <BillPart title={"Payment Methods"} price={"E-Wallet"} />
                <BillPart title={"Date"} price={"Dec 15, 2024 | 10:00:12 AM"} />
                <View style={[styles.row, styles.spaceBetween]}>
                    <TextComponent title={"Transaction ID"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
                    <View style={[styles.row, styles.centerHorizontal, gap(10)]}>
                        <TextComponent title={"SK676328909"} size={18} style={[styles.poppinsMedium]} />
                        <TouchableOpacity hitSlop={{top:10,left:10,right:10,bottom:10}}>
                            <Icon name='content-copy' size={16} style={[marginPosition(-5, 0, 0, 0)]} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.row, styles.spaceBetween,marginPosition(15,0,0,0)]}>
                    <TextComponent title={"Status"} size={16} style={[styles.poppinsReg]} opacity={0.7} />
                    <View style={[styles.row, styles.centerHorizontal, gap(10)]}>
                        <TouchableOpacity style={[styles.bgBlack,padding(0,5,12),radius(5)]}>
                            <TextComponent size={12} title={"Paid"} style={[styles.white,styles.poppinsReg]}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScreenViewComponent>
    )
}