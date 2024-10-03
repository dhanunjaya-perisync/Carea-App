import { View, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, fontSize, margin, padding, radius, styles, marginPosition } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { he } from 'date-fns/locale'
import { Colors } from '../../styles/Colors'

export const SelectPriceComponent = ({priceList}) => {
    const [selected, setSelected] = useState("")
  const [price, setPrice] = useState("$")
  if (price.length < 1) {
    setPrice("$")
  }

  // horizantal component
  const HorizontalComponent = ({ title, width, height, style, onPressEvent, selected }) => {
    return (
      <TouchableOpacity onPress={onPressEvent} style={[{ width: width, height: height }, marginPosition(0, 0, 0, 10), borderWidth(2), styles.borderBlack, radius(40), styles.allCenter, selected ? styles.bgBlack : styles.bgWhite, style]}>
        <TextComponent title={title} size={16} style={[styles.poppinsSemiBold, selected ? styles.white : styles.black]} />
      </TouchableOpacity>
    )
  }
  return (
    <View>
        <TextInput
        style={[borderWidth(2), styles.borderBlack, styles.textCenter, { height: 110 }, radius(20), fontSize(45), styles.poppinsSemiBold]}
        value={price}
        onChangeText={(value) => setPrice(`${value}`)}
        maxLength={10}
        keyboardType='numeric'
      />


      <View style={[marginPosition(20, 0, 0, 0)]}>
        <FlatList
          columnWrapperStyle={[styles.spaceBetween]}
          data={priceList}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          renderItem={({ item,index }) => (
            <TouchableOpacity>
              <HorizontalComponent title={item.listPrice}
                width={110}
                height={35}
                style={[marginPosition(0, 0, 20, 0)]}
                onPressEvent={() => { setPrice(item.listPrice);setSelected(item.id.toString())}}
                selected={selected == item.id.toString()}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      </View>
  )
}