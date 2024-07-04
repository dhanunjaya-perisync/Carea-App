import { View, StatusBar, TextInput ,TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, fontSize, margin, padding, radius, styles, marginPosition } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { he } from 'date-fns/locale'
import { Colors } from '../../styles/Colors'
const prices = [  {id:1,listPrice:"$174,500"},
                  {id:2,listPrice:"$174,000"},
                  {id:3,listPrice:"$173,500"},
                  {id:4,listPrice:"$173,000"},
                  {id:5,listPrice:"$172,500"},
                  {id:6,listPrice:"$172,000"},
                  {id:7,listPrice:"$171,500"},
                  {id:8,listPrice:"$171,000"},
                  {id:9,listPrice:"$170,500"},
                ]
                
export const MakeAnOffer = ({navigation}) => {
  
  const [price, setPrice] = useState("$")
  if (price.length < 1) {
    setPrice("$")
  }

   // horizantal component
   const HorizontalComponent = ({ title, width, height,style }) => {
    return (
      <View style={[{ backgroundColor: "#fff", width: width, height: height }, marginPosition(0, 0, 0, 10), borderWidth(2), styles.borderBlack, radius(40), styles.allCenter,style]}>
        <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={"#000"} />
      </View>
    )
  }
  //navigation 
  const navigateToOffer = () => {
    navigation.navigate("OfferProcess")
  }
  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <TextComponent title={"Enter your offer amount"} size={15} style={[styles.textCenter,margin(0,15,0),styles.poppinsMedium]}/>
      <TextInput
        style={[borderWidth(2), styles.borderBlack, styles.textCenter, { height: 110 }, radius(20), fontSize(45), styles.poppinsSemiBold]}
        value={price}
        onChangeText={(value) => setPrice(`${value}`)}
        maxLength={10}
        keyboardType='numeric'
      />
      
    
      <View style={[marginPosition(20,0,0,0)]}>
      <FlatList
      columnWrapperStyle={[styles.spaceBetween]}
      data={prices}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=> setPrice(item.listPrice)}>
            <HorizontalComponent title={item.listPrice}
            width={110}
            height={35}
            style={[marginPosition(0,0,20,0)]}
      />
        </TouchableOpacity>
      )}
      />
      </View>

      {/* send offer button */}
      
        <ButtonComponent titleName={"Send Offer"} bgColor={Colors.black} size={16} style={[margin(0,10,0)]} onPressEvent={navigateToOffer}/>
     
      
    </ScreenViewComponent>
  )
}
