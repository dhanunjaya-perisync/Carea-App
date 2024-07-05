import { View, Text, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { launchImageLibrary } from 'react-native-image-picker'
import { borderWidth, heightValue, margin, marginPosition, padding, paddingPoistion, position, radius, shadow, styles, widthValue } from '../../styles/Styles'

import { carBugatti1, carBugatti2, carBugatti3 } from '../../constants/imageLinks'
import { combineSlices } from '@reduxjs/toolkit'
import { Colors } from '../../styles/Colors'
export const BmwStore = () => {

  const [messageBox, setMessageBox] = useState([{ msg: "Hello goodmorning", time: "2:21", img: null },])
  const [inputValue, setInputValue] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  const updateMessageBox = () => {
    if (inputValue.trim().length > 0) {
      let newObj = { msg: inputValue.trim(), time: "9:12", img: null }
      setMessageBox((pre) => [...pre, newObj])
      setInputValue("")
      setSelectedImage(null)
    }
    else if (selectedImage) {
      let newObj = { msg: "", time: "", img: selectedImage }
      setMessageBox((pre) => [...pre, newObj])
      setSelectedImage(null)
    }
  }
  const removeImage = () => {
    setSelectedImage(null)
  }

  const MessageComponent = ({ message, time, imageSource }) => {
    return (
      <View style={[styles.row, styles.justifyEnd, margin(0, 6, 0)]}>
        {imageSource ?
          <View style={[{ width: widthValue(2.5) }, padding(10)]}>
            <Image source={{ uri: imageSource }} style={[{ height: 100, width: 130 }, radius(10)]} />
          </View> :
          <View style={[{ width: widthValue(1.5) }, styles.bgBlack, paddingPoistion(10, 40, 10, 20), radius(12, 0, 12, 12)]}>
            <TextComponent title={message} size={16} style={[styles.white, styles.poppinsReg, paddingPoistion(0, 10, 0, 0)]} />
            <TextComponent title={time} size={13} style={[styles.white, styles.poppinsReg, styles.positionAbsolute, { right: -20, bottom: -5, }]} opacity={0.9} />
          </View>
        }
      </View>
    )
  }

  const OtherMessageComponent = ({ message, time }) => {
    return (
      <View style={[margin(0, 6, 0)]}>
        <View style={[{ width: widthValue(1.5) }, styles.bgLightGrey, paddingPoistion(10, 40, 10, 20), radius(0, 12, 12, 12)]}>
          <TextComponent title={message} size={16} style={[styles.poppinsReg, paddingPoistion(0, 10, 0, 0)]} />
          <TextComponent title={time} size={13} style={[styles.poppinsReg, styles.positionAbsolute, { right: -20, bottom: -5, }]} opacity={0.9} />
        </View>
      </View>
    )
  }

  // image picker

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={[styles.allCenter, marginPosition(10, 0, 20, 0)]}>
        <View style={[styles.bgLightGrey, padding(0, 6, 8), radius(5), { width: 60 }]}>
          <TextComponent title={`Today`} fontWeight={"400"} size={14} textCenter={true} />
        </View>
      </View>
      {/* Flat list */}
     <View style={[{height:heightValue(1.2)},paddingPoistion(0,0,40,0)]}>
     <FlatList
        data={messageBox}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            {index == 0 ? <OtherMessageComponent message={item.msg} time={item.time} /> :
              <MessageComponent message={item.msg} time={item.time} imageSource={item.img} />
            }
          </View>
        )}

      />
     </View>
      {/* Textinput */}
      <View style={[styles.positionAbsolute, {backgroundColor:"transparent", width: widthValue(1), bottom: 0, zIndex: 4 }, paddingPoistion(20, 20, 10, 20), styles.bgWhite]}>
        {selectedImage &&
          <View style={[{ height: 100, width: 100 }, styles.bgWhite, shadow(2), radius(10)]}>
            <Image source={{ uri: selectedImage }} style={[{ height: 100, width: 100, resizeMode: "contain" }, radius(10)]} />
            <TouchableOpacity onPress={removeImage} hitSlop={{top:10,right:0,bottom:0,left:10}}>
              <Icon name='file-image-remove' size={23} color={Colors.red} style={[{ position: "absolute", bottom: 0, right: 0 }]} />
            </TouchableOpacity>
          </View>
        }
        <View style={[styles.row, styles.spaceBetween]}>
          <TextInputCompnent pickImage={openImagePicker} multiline={true} value={inputValue} onChangeText={setInputValue} placeholderValue={"Message"} hide={"image"} iconSize={18} lengthMax={100} style={[{ width: widthValue(1.35) }, paddingPoistion(0, 40, 0, 0)]} />
          <TouchableOpacity style={[styles.bgBlack, { height: 50, width: 50 }, styles.allCenter, radius(25)]} onPress={updateMessageBox}>
            <Icon name='send' size={22} color={"#fff"} style={[styles.textCenter]} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenViewComponent>
  )
}