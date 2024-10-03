import { View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { profileDefault } from '../../constants/imageLinks'
import { borderWidth, flex, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { MainDropDown } from '../../components/inputs/MainDropDown'
import Icon from "react-native-vector-icons/Entypo"
import { data } from '../../constants/genderData'
import { List } from '../../constants/countryDropDownList'
import { countryData } from '../../constants/countryData'
import { DatePickerComponent } from '../../components/inputs/DatePickerComponent'
import { useRoute } from '@react-navigation/native'
import { emailValidator } from '../../regexExp/emailValidator'
import { useSelector,useDispatch } from 'react-redux'
import { setUserInfo } from '../../redux/authReducer/userInfoRedux'
export const EditProfile = ({navigation}) => {
    // const route = useRoute()
    // const {email} = route.params
    const user = useSelector(state => state.auth.userInfo.userInfo)
    const dispatch = useDispatch()

    //date
    const [mainDate, setMainDate] = useState(user?.mainDate?new Date(user.mainDate):"")
    const [dateError, setDateError] = useState("")
  
    //gender & country drop down
    const [gender, setGender] = useState(user.gender)
    const [genderError, setGenderError] = useState("")
    const [countryName, setCountryName] = useState(user?.countryName?user.countryName:0)
    const [countryNameError, setCountryNameError] = useState("")

    const [country,setCountry] = useState(user.country?user.country:0)
    const [countryError, setCountryError] = useState("")
  
  
    // form
    const [fullName, setFullName] = useState(user.fullName)
    const [nickName, setNickName] = useState(user.nickName)
    const [phoneno, setphoneno] = useState(user.phoneno)
    const [email, setEmail] = useState(user.email)
    const [errors, setErrors] = useState({});
  
    //full name
    const validateFullName = (value) => {
        if (!value.trim()) {
          return 'Full Name is required';
        }
        else if(!/^[a-zA-Z ]+$/.test(value)){
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
        else if(!/^[a-zA-Z_]+$/.test(value)){
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

    //email
    const validateEmail = (value) => {
        if (!value) {
            return 'email is required';
        }
        else if (!emailValidator(value)) {
            return "enter a valid email"
        }
        return '';
    }

    const handleEmail = (value) => {
        setEmail(value)
        setErrors((prevErrors) => ({
            ...prevErrors,
            email:validateEmail(value)
        }))
    }
  
    // phone no
    const validatePhoneno = (value) => {
      if (!value.trim()) {
        return 'Phone no is required';
      }
      else if(!/^\d+$/.test(value) || value.length > 12){
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
      if(!mainDate){
        setDateError("Date is required")
      }
    }
    // gender
    const handleGender = () => {
      if(!gender){
        setGenderError("Please select a Gender")
      }
    }
    // country name
    const handleCountryName = () => {
        if(!countryName){
            setCountryNameError("Please select a Country Name")
        }
    }
    // country
    const handleCountry = () => {
      if(!country){
        setCountryError("Please select a Country")
      }
    }
  
    // continue btn
    const hasErrors = () => {
      if(fullName.length === 0 || nickName.length === 0 || phoneno.length === 0 || phoneno.length < 10 || mainDate == "" || country == 0 || countryName == 0){
          handleFullName(fullName)
          handleNickName(nickName)
          handlePhoneno(phoneno)
          handleEmail(email)
          handleDate()
          handleGender()
          handleCountryName()
          handleCountry()
          return false
      }
      else{
          let valid =  Object.values(errors).some((error) => error !== '');
          if(!valid){
              console.log("Valid details -- ")
              dispatch(setUserInfo({ email:email,fullName:fullName,country:country,
            nickName:nickName,phoneno:phoneno,mainDate:mainDate,gender:gender,countryName:countryName,password:user.password}))
            navigation.goBack()
          }
      } 
  };
  return (
    <ScreenViewComponent>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={[flex(1), paddingPoistion(40, 20, 0, 20)]}>

        <View>
          <View style={[marginPosition(20, 0, 0, 0)]}>
            <TextInputCompnent placeholderValue={"Full Name "} size={15} inputHeight={48} value={fullName} onChangeText={handleFullName} />
            {errors.fullName !== '' && <TextComponent title={errors.fullName} style={[styles.poppinsReg,styles.red]} size={16} />}
            {errors.fullName === '' && <View style={[{height:24}]}/>}
          </View>
          <View>
            <TextInputCompnent placeholderValue={"Nickname "} size={15} inputHeight={48} value={nickName} onChangeText={handleNickName}/>
            {errors.nickName !== '' && <TextComponent title={errors.nickName} style={[styles.poppinsReg,styles.red]} size={16} />}
            {errors.nickName === '' && <View style={[{height:24}]}/>}
          </View>
          <View>
            <DatePickerComponent mainDate={mainDate} setMainDate={setMainDate} setDateError={setDateError}/>
            {dateError && <TextComponent title={dateError} style={[styles.poppinsReg,styles.red]} size={16} />}
            {dateError === '' && <View style={[{height:24}]}/>}
          </View>
          <View>
            <TextInputCompnent placeholderValue={"Email "} value={email} onChangeText={handleEmail} size={15} inputHeight={48} hide={"mail"} iconSize={18} type={"email-address"} iconBlack={email && true} />
            {errors.email !== '' && <TextComponent title={errors.email} style={[styles.poppinsReg,styles.red]} size={16} />}
            {errors.email === '' && <View style={[{height:24}]}/>}
          </View>
          <View>
            <MainDropDown setData={List} labelName={"Select Country"} style={[padding(0, 0, 20)]} value={countryName} setValue={setCountryName} setDropDownError={setCountryNameError}/>
            {countryNameError && <TextComponent title={countryNameError} style={[styles.poppinsReg,styles.red]} size={16} />}
            {countryNameError === '' && <View style={[{height:24}]}/>}
          </View>

          <View style={[{ height: 50 }, styles.bgLightGrey, radius(10), styles.row]}>
            <MainDropDown setData={countryData} style={[paddingPoistion(0, 5, 0, 20), { width: widthValue(5.5) }]} size={22} labelName={'🇮🇳'} value={country} setValue={setCountry} setDropDownError={setCountryError}/>
            <TextInputCompnent placeholderValue={"Phone number "} lengthMax={20} size={15} leftMargin={1}
             inputHeight={48} labelName={"🇮🇳"} type={"number-pad"} style={[{ width: widthValue(1.5) }, borderWidth(0)]} 
             value={phoneno} onChangeText={handlePhoneno}
             />
          </View>
          {countryError && <TextComponent title={countryError} style={[styles.poppinsReg,styles.red]} size={16} />}
          {errors.phoneno !== '' && <TextComponent title={errors.phoneno} style={[styles.poppinsReg,styles.red]} size={16} />}
          {countryError || errors.phoneno === '' && <View style={[{height:24}]}/>}
          

          {/* drop down */}

          <View>
            <MainDropDown setData={data} labelName={"Gender"} style={[padding(0, 0, 20)]} value={gender} setValue={setGender} setDropDownError={setGenderError}/>
            {genderError && <TextComponent title={genderError} style={[styles.poppinsReg,styles.red]} size={16} />}
          </View>

          <View style={[marginPosition(30, 0, 0, 0)]}>
            <ButtonComponent titleName={"Continue"} bgColor={"#000"} size={16} onPressEvent={hasErrors} />
          </View>
        </View>

      </View>
    </ScreenViewComponent>
  )
}