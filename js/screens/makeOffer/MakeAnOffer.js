import {  StatusBar, } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import {margin, padding,styles } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'

import { Colors } from '../../styles/Colors'
import { SelectPriceComponent } from '../../components/commonComp/SelectPrice'
const prices = [{ id: 1, listPrice: "$174,500" },
{ id: 2, listPrice: "$174,000" },
{ id: 3, listPrice: "$173,500" },
{ id: 4, listPrice: "$173,000" },
{ id: 5, listPrice: "$172,500" },
{ id: 6, listPrice: "$172,000" },
{ id: 7, listPrice: "$171,500" },
{ id: 8, listPrice: "$171,000" },
{ id: 9, listPrice: "$170,500" },
]


export const MakeAnOffer = ({ navigation }) => {
 
  //navigation 
  const navigateToOffer = () => {
    navigation.navigate("OfferAccept")
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <TextComponent title={"Enter your offer amount"} size={15} style={[styles.textCenter, margin(0, 15, 0), styles.poppinsMedium]} />
      <SelectPriceComponent priceList={prices}/>
      {/* send offer button */}
      <ButtonComponent titleName={"Send Offer"} bgColor={Colors.black} size={16} style={[margin(0, 10, 0)]} onPressEvent={navigateToOffer} />
    </ScreenViewComponent>
  )
}
