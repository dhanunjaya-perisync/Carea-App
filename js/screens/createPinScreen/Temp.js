import { View, Text ,TextInput} from 'react-native'
import React,{useRef} from 'react'
import { borderWidth, padding, styles } from '../../styles/Styles'
export const Temp = () => {
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()
  return (
    <View style={[styles.row,padding(40),styles.spaceBetween]}>
      <TextInput maxLength={1} style={[{height:50,width:50},styles.borderBlack,borderWidth(2)]}
      ref={input1}
      onChangeText={(txt) => {
        if(txt.length == 1){
            input2.current.focus()
        }
      }}
      
      
      />
      <TextInput maxLength={1} style={[{height:50,width:50},styles.borderBlack,borderWidth(2)]}
      ref={input2}
      onChangeText={(txt) => {
        if(txt.length == 1){
            input3.current.focus()
        }
        else{
            input1.current.focus()
        }
      }}
      
      />
      <TextInput maxLength={1} style={[{height:50,width:50},styles.borderBlack,borderWidth(2)]}
      ref={input3}
      onChangeText={(txt) => {
        if(txt.length == 1){
            input4.current.focus()
        }
        else{
            input2.current.focus()
        }
      }}
      />
      <TextInput maxLength={1} style={[{height:50,width:50},styles.borderBlack,borderWidth(2)]}
      ref={input4}
      onChangeText={(txt) => {
        if(txt.length == 1){
        }
        else{
            input3.current.focus()
        }
      }}
      />
    </View>
  )
}