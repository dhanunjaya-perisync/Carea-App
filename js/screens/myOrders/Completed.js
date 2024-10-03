import { View, Text, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { borderWidth, flex, gap, margin, marginPosition, padding, position, heightValue, paddingPoistion, radius, shadow, styles, widthValue, zIndex } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { useSelector } from 'react-redux'
import { Modal } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { launchImageLibrary } from 'react-native-image-picker'
import { Colors } from '../../styles/Colors'
import { notFoundImage } from '../../constants/imageLinks'
export const Completed = () => {
  // modal 
  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(true)
  }
  const hideModal = () => {
    setModal(false)
  }
  const [selectedImage, setSelectedImage] = useState(null);

  const Data = useSelector(state => state.user.productInfo.productInfo)
  const wishList = Data.filter(car => car.liked == true)
  const CardCompo = ({ item, showReviewBtn }) => {
    return (
      <View style={[styles.row, padding(20), gap(15), radius(20), shadow(1), styles.bgWhite, margin(0, 15, 0)]}>
        <View style={[styles.bgLightGrey, { width: 110, height: 90 }, styles.allCenter, radius(15)]}>
          <Image source={item.imageUrl} style={[{ height: 90, width: 110 }]} resizeMode='contain' />
        </View>
        <View style={[styles.centerVertical]}>
          <TextComponent title={item.name} size={18} style={[styles.poppinsSemiBold]} />
          <View style={[styles.row, gap(8), marginPosition(3, 0, 8, 0), styles.centerHorizontal]}>
            <View style={[{ height: 16, width: 16 }, radius(8), { backgroundColor: item.color.code }]}></View>
            <TextComponent title={item.color.name} size={13} style={[styles.poppinsReg]} />
            <View style={[styles.bgLightGrey, radius(5), { height: 25 }, styles.allCenter, padding(0, 0, 10)]}>
              <TextComponent title={`Completed`} style={[styles.poppinsMedium]} size={13} textCenter={true} />
            </View>
          </View>

          <View style={[styles.row, styles.spaceBetween, { width: widthValue(1.95) }]}>
            <TextComponent title={`$${item.price}`} style={[styles.poppinsSemiBold]} size={18} />
            {showReviewBtn && <ButtonComponent onPressEvent={showModal} titleName={"Leave Review"} style={[styles.bgBlack, { height: 30, width: widthValue(3.5) }]} size={15} />}
          </View>
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
      {
        wishList.length > 0 ?
          <View>
            <FlatList
              data={wishList}
              key={item => item.id.toString()}
              renderItem={({ item }) => (
                <CardCompo item={item} showReviewBtn={true} />
              )}
            />

            <Modal
              visible={modal}
              onRequestClose={hideModal}
              animationType='slide'
              transparent={true}
            >
              <View style={[flex(1), { backgroundColor: "rgba(0,0,0,0.6)" }, styles.justifyEnd]}>
                <View style={[{ height: heightValue(1.3) }, styles.bgWhite, radius(35, 35, 0, 0), padding(0, 0, 20)]}>
                  <TextComponent title={"Leave a Review"} size={20} style={[styles.poppinsSemiBold, marginPosition(20, 0, 0, 0)]} textCenter={true} />
                  <View style={[borderWidth(0, 0, 0, 1), styles.borderGrey, margin(0, 10, 0)]} />
                  <CardCompo item={wishList[0]} />
                  <View style={[borderWidth(0, 0, 0, 1), styles.borderGrey, margin(0, 10, 0)]} />
                  <TextComponent title={"How is your car?"} size={20} style={[styles.poppinsSemiBold, marginPosition(10, 0, 0, 0)]} textCenter={true} />
                  <TextComponent title={"Please give your rating & also you review..."} size={16} style={[styles.poppinsReg]} textCenter={true} />
                  <View style={[styles.row, styles.allCenter, gap(20), margin(0, 10, 0)]}>
                    <Icon name="star" size={33} />
                    <Icon name="star" size={33} />
                    <Icon name="star" size={33} />
                    <Icon name="star" size={33} />
                    <Icon name="star-outline" size={33} />
                  </View>

                  <View >
                    {selectedImage &&
                      <View style={[{ height: 100, width: 100 }, styles.bgWhite, shadow(2), radius(10)]}>
                        <Image source={{ uri: selectedImage }} style={[{ height: 100, width: 100, resizeMode: "contain" }, radius(10)]} />
                        <TouchableOpacity onPress={removeImage} hitSlop={{ top: 10, right: 0, bottom: 0, left: 10 }}>
                          <Icon name='file-image-remove' size={23} color={Colors.red} style={[{ position: "absolute", bottom: 0, right: 0 }]} />
                        </TouchableOpacity>
                      </View>
                    }
                    <View style={[marginPosition(10, 0, 0, 0)]}>
                      <TextInputCompnent pickImage={openImagePicker} multiline={true} placeholderValue={"Message"} hide={"image"} iconSize={18} lengthMax={100} style={[paddingPoistion(0, 40, 0, 0)]} />
                    </View>
                  </View>
                  <View style={[borderWidth(0, 0, 0, 1), styles.borderGrey, margin(0, 25, 0)]} />
                  <View style={[styles.row, styles.spaceBetweenVertical]}>
                    <ButtonComponent titleName={"Cancel"} size={15} style={[styles.bgLightGrey, { width: widthValue(2.35) }]} color={Colors.black} customShadow={1} />
                    <ButtonComponent onPressEvent={hideModal} titleName={"Submit"} size={15} style={[styles.bgBlack, { width: widthValue(2.35) }]} customShadow={2} />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          :
          <View style={[flex(1), styles.centerVertical, styles.centerHorizontal]}>
            <Image
              style={[{ height: heightValue(2.8), width: widthValue(1.4) }]}
              source={notFoundImage}
              resizeMethod='contain'
            />
            <TextComponent title={"You don't have an any order yet"} textCenter={true} size={18} style={[styles.poppinsSemiBold]} />
            <TextComponent title={"You don't have an ongoing orders at this time"}
              textCenter={true} size={16} style={[styles.poppinsMedium, marginPosition(5, 0, 0, 0)]}
            />
          </View>
      }
    </ScreenViewComponent>
  )
}