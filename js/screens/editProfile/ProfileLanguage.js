import { View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { padding, styles, margin, borderWidth, marginPosition, radius } from '../../styles/Styles'
const languageList = [
  { name: "English (US)", value: "option1" },
  { name: "English (UK)", value: "option2" },
  { name: "Telugu", value: "option3" },
  { name: "Hindi", value: "option4" },
  { name: "kannada", value: "option5" },
  { name: "Tamil", value: "option6" },
  { name: "Malayalam", value: "option7" },
  { name: "French", value: "option8" },
  { name: "Bengali", value: "option9" },
  { name: "Spanish", value: "option10" },
  { name: "Arabic", value: "option11" },
  { name: "Russian", value: "option12" },
  { name: "Indonesia", value: "option13" },
  { name: "Japanes", value: "option14" },
]
export const ProfileLanguage = () => {
  const [selected, setSelect] = useState("")
  const LangCom = ({ name, selected, onSelect }) => {
    return (
      <View style={[styles.row, styles.spaceBetween, margin(0, 10, 0)]}>
        <TextComponent title={name} size={18} style={[styles.poppinsMedium]} />
        <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={onSelect}>
          <View style={[{ height: 20, width: 20 }, radius(10), borderWidth(2), styles.borderBlack, styles.allCenter]}>
            <View style={[{ height: 12, width: 12 }, radius(6), selected ? styles.bgBlack : styles.bgWhite]}></View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <TextComponent title={"Suggested"} size={20} style={[styles.poppinsSemiBold]} />
      <FlatList
        data={languageList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            {index == 2 &&
              <View>
                <View style={[styles.borderGrey,borderWidth(0,0,0,1),marginPosition(8,0,16,0)]}/>
                <TextComponent title={"Language"} size={20} style={[styles.poppinsSemiBold]} />
              </View>
            }
            <LangCom name={item.name} selected={selected == item.value} onSelect={() => setSelect(item.value)} />
          </View>
        )}
      />
    </ScreenViewComponent>
  )
}
