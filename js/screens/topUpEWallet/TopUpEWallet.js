import {  StatusBar, } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import {margin, padding,styles } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { Colors } from '../../styles/Colors'
import { SelectPriceComponent } from '../../components/commonComp/SelectPrice'
const prices = [
    { id: 2, listPrice: "$10,000" },
    { id: 3, listPrice: "$50,000" },
    { id: 4, listPrice: "$100,000" },
    { id: 5, listPrice: "$150,000" },
    { id: 6, listPrice: "$200,000" },
    { id: 7, listPrice: "$250,000" },
    { id: 8, listPrice: "$500,000" },
    { id: 9, listPrice: "$750,000" },
    { id: 1, listPrice: "$1,000,000" },
    ]
export const TopUpEWallet = ({navigation}) => {
  //navigate
  const navigateToTopUpPM = () => {
    navigation.navigate("TopUpEWalletPaymentMethod")
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
    <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
    <TextComponent title={"Enter the amount of top up"} size={15} style={[styles.textCenter, margin(0, 15, 0), styles.poppinsMedium]} />
    <SelectPriceComponent priceList={prices}/>
    {/* send offer button */}
    <ButtonComponent titleName={"Send Offer"} bgColor={Colors.black} size={16} style={[margin(0, 10, 0)]} onPressEvent={navigateToTopUpPM}/>
  </ScreenViewComponent>
  )
}
