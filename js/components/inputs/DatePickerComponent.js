import { View, Text ,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import { TextInputCompnent } from './TextInputComponent'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { padding, paddingPoistion, radius, styles } from '../../styles/Styles'
import Icon from "react-native-vector-icons/Fontisto"
import { TextComponent } from '../view'
import {format} from "date-fns"

export const DatePickerComponent = ({mainDate,setMainDate,setDateError}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setMainDate(date);
    setDateError("")
    console.log(mainDate.toLocaleDateString())
    hideDatePicker();
  };
  return (
    
    <View>
      <TouchableOpacity style={[styles.bgLightGrey,{height:48},radius(10),paddingPoistion(0,20,0,20),styles.row,styles.centerHorizontal,styles.spaceBetween]}  onPress={showDatePicker}>
        <TextComponent title={mainDate?mainDate.toLocaleDateString():"Date of Birth"} style={[styles.poppinsMedium,{color:mainDate?"#000":"#888"}]} size={16}/>
        <Icon name='date' size={16} color={mainDate?"#000":"#888"} style={[]}/>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        accessibilityValue={mainDate}
      />
    </View>
  )
}

