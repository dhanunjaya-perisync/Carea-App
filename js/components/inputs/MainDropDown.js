import { View, Text } from 'react-native'
import React ,{useState}from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { borderWidth, fontSize, marginPosition, radius, styles } from '../../styles/Styles';
import { TextComponent } from '../view';
import { Colors } from '../../styles/Colors';
export const MainDropDown = ({value,setValue,setData,labelName,style,size,onChangeText,setDropDownError}) => {
    const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[{height:50},radius(10),styles.bgLightGrey]}>
    <Dropdown
      data={setData}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={isFocus ? '...' : labelName}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
        setDropDownError("")
      }}
      onChangeText={onChangeText}
      itemTextStyle={[fontSize(size?size:15),styles.normalWieght]}
      selectedTextStyle={[fontSize(size?size:16),styles.normalWieght,styles.black]}
      placeholderStyle={[fontSize(size?size:16),styles.poppinsMedium,{color:"#888"}]}
      style={[{height:"100%"},fontSize(12),style]}
      dropdownPosition="top"
    />
    </View>
  )
}