import { View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { profileDefault } from '../../constants/imageLinks'
import { borderWidth, flex, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { MainDropDown } from '../../components/inputs/MainDropDown'
import Icon from "react-native-vector-icons/Entypo"
import { data } from '../../constants/genderData'
import { countryData } from '../../constants/countryData'
import { launchImageLibrary } from 'react-native-image-picker'
import { DatePickerComponent } from '../../components/inputs/DatePickerComponent'
import { useRoute } from '@react-navigation/native'
export const Registration = ({ navigation }) => {

  const route = useRoute()
  const { email, password } = route.params
  //date
  const [mainDate, setMainDate] = useState("")
  const [dateError, setDateError] = useState("")

  //gender & country drop down
  const [gender, setGender] = useState("")
  const [genderError, setGenderError] = useState("")
  const [country, setCountry] = useState("")
  const [countryError, setCountryError] = useState("")


  // form
  const [fullName, setFullName] = useState("")
  const [nickName, setNickName] = useState("")
  const [phoneno, setphoneno] = useState("")
  const [errors, setErrors] = useState({});

  //full name
  const validateFullName = (value) => {
    if (!value.trim()) {
      return 'Full Name is required';
    }
    else if (!/^[a-zA-Z ]+$/.test(value)) {
      return "Invalid FUllName"
    }
    return '';
  }
  const handleFullName = (value) => {
    setFullName(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      fullName: validateFullName(value),
    }));
  }

  // nick name
  const validateNickName = (value) => {
    if (!value.trim()) {
      return 'Nickname is required';
    }
    else if (!/^[a-zA-Z_]+$/.test(value)) {
      return "Invalid Nickname"
    }
    return '';
  }
  const handleNickName = (value) => {
    setNickName(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      nickName: validateNickName(value),
    }));

  }

  // phone no
  const validatePhoneno = (value) => {
    if (!value.trim()) {
      return 'Phone no is required';
    }
    else if (!/^\d+$/.test(value) || value.length > 12) {
      return "Invalid Phone no";
    }
    return '';
    // /^\d+$/
  }
  const handlePhoneno = (value) => {
    setphoneno(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneno: validatePhoneno(value),
    }));

  }
  // date 
  const handleDate = () => {
    if (!mainDate) {
      setDateError("Date is required")
    }
  }
  // gender
  const handleGender = () => {
    if (!gender) {
      setGenderError("Please select a Gender")
    }
  }
  // country
  const handleCountry = () => {
    if (!country) {
      setCountryError("Please select a Country")
    }
  }

  // continue btn
  const hasErrors = () => {
    if (fullName.length === 0 || nickName.length === 0 || phoneno.length === 0 || phoneno.length < 10 || mainDate.length === 0 || country.length === 0 || gender.length === 0) {
      handleFullName(fullName)
      handleNickName(nickName)
      handlePhoneno(phoneno)
      handleDate()
      handleGender()
      handleCountry()
      return false
    }
    else {
      let valid = Object.values(errors).some((error) => error !== '');
      if (!valid) {
        console.log("Valid details -- ")
        navigation.navigate("CreateNewPin", {
            email: email, password: password,
            fullName: fullName, nickName: nickName,phoneno:phoneno,
            mainDate:mainDate,gender:gender
        })
      }
    }
  };

  // image picker
  const [selectedImage, setSelectedImage] = useState(null);
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
    <ScreenViewComponent>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={[flex(1), paddingPoistion(40, 20, 0, 20)]}>
        <View style={[styles.allCenter]}>
          {selectedImage ? (
            <View>
              <Image source={{ uri: selectedImage }} style={[{ height: 130, width: 130, resizeMode: "cover" }, radius(65)]} />
              <TouchableOpacity style={[styles.bgBlack, radius(5), styles.allCenter, styles.positionAbsolute, { height: 28, width: 28, right: 0, bottom: 0 }]} onPress={openImagePicker}>
                <Icon name='pencil' size={18} style={[styles.white]} />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Image source={profileDefault} style={[{ height: 130, width: 130, resizeMode: "cover" }, radius(65)]} />
              <TouchableOpacity style={[styles.bgBlack, radius(5), styles.allCenter, styles.positionAbsolute, { height: 28, width: 28, right: 0, bottom: 0 }]} onPress={openImagePicker}>
                <Icon name='pencil' size={18} style={[styles.white]} />
              </TouchableOpacity>
            </View>

          )}
        </View>

        <View>
          <View style={[marginPosition(20, 0, 0, 0)]}>
            <TextInputCompnent placeholderValue={"Full Name "} size={15} inputHeight={48} value={fullName} onChangeText={handleFullName} />
            {errors.fullName !== '' && <TextComponent title={errors.fullName} style={[styles.poppinsReg, styles.red]} size={16} />}
            {errors.fullName === '' && <View style={[{ height: 24 }]}></View>}
          </View>
          <View>
            <TextInputCompnent placeholderValue={"Nickname "} size={15} inputHeight={48} value={nickName} onChangeText={handleNickName} />
            {errors.nickName !== '' && <TextComponent title={errors.nickName} style={[styles.poppinsReg, styles.red]} size={16} />}
            {errors.nickName === '' && <View style={[{ height: 24 }]}></View>}
          </View>
          <View>
            <DatePickerComponent mainDate={mainDate} setMainDate={setMainDate} setDateError={setDateError} />
            {dateError && <TextComponent title={dateError} style={[styles.poppinsReg, styles.red]} size={16} />}
            {dateError === '' && <View style={[{ height: 24 }]}></View>}
          </View>
          <View style={[marginPosition(0, 0, 20, 0)]}>
            <TextInputCompnent placeholderValue={"Email "} value={email} size={15} inputHeight={48} hide={"mail"} iconSize={18} type={"email-address"} iconBlack={true} edit={false} />
          </View>

          <View style={[{ height: 50 }, styles.bgLightGrey, radius(10), styles.row]}>
            <MainDropDown setData={countryData} style={[paddingPoistion(0, 5, 0, 20), { width: widthValue(5.5) }]} size={22} labelName={'🇮🇳'} value={country} setValue={setCountry} setDropDownError={setCountryError} />
            <TextInputCompnent placeholderValue={"Phone number "} lengthMax={20} size={15} leftMargin={1}
              inputHeight={48} labelName={"🇮🇳"} type={"number-pad"} style={[{ width: widthValue(1.5) }, borderWidth(0)]}
              value={phoneno} onChangeText={handlePhoneno}
            />
          </View>
          {countryError && <TextComponent title={countryError} style={[styles.poppinsReg, styles.red]} size={16} />}
          {errors.phoneno !== '' && <TextComponent title={errors.phoneno} style={[styles.poppinsReg, styles.red]} size={16} />}
          {countryError || errors.phoneno === '' && <View style={[{ height: 24 }]}></View>}


          {/* drop down */}

          <View>
            <MainDropDown setData={data} labelName={"Gender"} style={[padding(0, 0, 20)]} value={gender} setValue={setGender} setDropDownError={setGenderError} />
            {genderError && <TextComponent title={genderError} style={[styles.poppinsReg, styles.red]} size={16} />}
          </View>

          <View style={[marginPosition(30, 0, 0, 0)]}>
            <ButtonComponent titleName={"Continue"} bgColor={"#000"} size={16} onPressEvent={hasErrors} />
          </View>
        </View>

      </View>
    </ScreenViewComponent>
  )
}
