import { View, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/authReducer/isLogin'
import { ScreenViewComponent, TextComponent } from '../../components'
import { launchImageLibrary } from 'react-native-image-picker'
import { borderWidth, flex, gap, heightValue, margin, marginPosition, padding, paddingPoistion, radius, shadow, styles, widthValue, } from '../../styles/Styles'
import { profileDefault } from '../../constants/imageLinks'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icon2 from "react-native-vector-icons/FontAwesome6"
import RightArrow from "react-native-vector-icons/MaterialIcons"
import { Colors } from '../../styles/Colors'
import { Modal } from 'react-native'
import { useSelector } from 'react-redux'
import { SwitchComponent } from '../../components/inputs/SwitchComponent'
export const Profile = ({navigation}) => {
  const user = useSelector(state => state.auth.userInfo.userInfo)
  console.log(user)
  //dark mode
  const [mode,setMode] = useState(false)
  //modal
  const [visible,setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  }
  const hideModal = () => {
    setVisible(false)
  }
  const handleLogout = () => {
    dispatch(setIsLoggedIn(false))
    // navigation.replace("Login")
  }
  const dispatch = useDispatch()
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
  // icon option
  const IconOption = ({ iconName, title, iconTwo, size,showSwitch ,lang,onPressEvent}) => {
    return (
      <TouchableOpacity style={[styles.row, styles.spaceBetween, styles.centerHorizontal, margin(0, 8, 0)]} onPress={onPressEvent}>
        <View style={[styles.row, gap(20), styles.centerHorizontal]}>
          {iconTwo ?
            <Icon2 name={iconName} size={size} style={[marginPosition(-5, 0, 0, 0)]} /> :
            <Icon name={iconName} size={size} style={[marginPosition(-5, 0, 0, 0)]} />
          }
          <TextComponent title={title} size={18} style={[styles.poppinsSemiBold]} />
        </View>
        {showSwitch ?
          <SwitchComponent value={mode} onValueChange={()=>setMode(!mode)} size={21} /> :
          <View style={[styles.row,styles.centerHorizontal,gap(10)]}>
            {lang && <TextComponent title={"English (US)"} size={18} style={[styles.poppinsSemiBold]}/>}
            <RightArrow name='arrow-forward-ios' size={17} style={[marginPosition(-3,0,0,0)]}/>
          </View>
        }
      </TouchableOpacity>
    )
  }

  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
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
      <TextComponent title={user.fullName} size={22} style={[styles.poppinsSemiBold, marginPosition(10, 0, 0, 0)]} textCenter={true} />
      <TextComponent title={"+91 "+user.phoneno} textCenter={true} size={15} style={[styles.poppinsSemiBold]} />
      <View style={[styles.borderGrey, borderWidth(0, 0, 0, 1), margin(0, 10, 0)]} />

      <IconOption iconName={"user"} iconTwo={true} title={"Edit Profile"} size={18} onPressEvent={()=>navigation.navigate("EditProfile")}/>
      <IconOption iconName={"location-dot"} iconTwo={true} title={"Address"} size={20} onPressEvent={()=>navigation.navigate("Address")}/>
      <IconOption iconName={"bell-outline"} title={"Notification"} size={22} onPressEvent={()=>navigation.navigate("ProfileNotification")}/>
      <IconOption iconName={"wallet-outline"} title={"Payment"} size={22} onPressEvent={()=>navigation.navigate("ProfilePayment")}/>
      <IconOption iconName={"security"} title={"Security"} size={22} onPressEvent={()=>navigation.navigate("ProfileSecurity")}/>
      <IconOption iconName={"language-xaml"} title={"Language"} lang={true} size={23} onPressEvent={()=>navigation.navigate("ProfileLanguage")}/>
      <IconOption iconName={"eye-outline"} title={"Dark Mode"} showSwitch={true} size={22}/>
      <IconOption iconName={"lock-outline"} title={"Privacy Policy"} size={21} onPressEvent={()=>navigation.navigate("ProfilePrivacyPolicy")}/>
      <IconOption iconName={"help-box"} title={"Help center"} size={22} onPressEvent={()=>navigation.navigate("ProfileHelpCenter")}/>
      <IconOption iconName={"users"} iconTwo={true} title={"Invite Friends"} size={16} onPressEvent={()=>navigation.navigate("PorfileInviteFriends")}/>
      <TouchableOpacity style={[styles.row, gap(20), styles.centerHorizontal]} onPress={showModal}>
        <Icon name={"exit-to-app"} color={Colors.red} size={20} style={[marginPosition(-5, 0, 0, 0)]} />
        <TextComponent title={"Logout"} color={Colors.red} size={18} style={[styles.poppinsSemiBold]} />
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} onRequestClose={hideModal} animationType='fade'>
        <View style={[flex(1),styles.justifyEnd,styles.centerHorizontal,paddingPoistion(0,0,40,0),{backgroundColor:"rgba(0,0,0,0.6)"}]}>
          <View style={[styles.bgWhite,shadow(2),{height:heightValue(6),width:widthValue(1.4)},radius(20),marginPosition(0,0,40,0),paddingPoistion(20,0,0,0)]}>
              <TextComponent title={"Do you want to Logout ?"} size={20} style={[styles.poppinsMedium]} textCenter={true}/>
              <View style={[styles.positionAbsolute,{bottom:3,width:"100%",height:40},styles.row,styles.spaceAroundVertical,styles.centerHorizontal]}>
              <TouchableOpacity style={[{width:'50%',height:'100%'},styles.centerVertical]} onPress={handleLogout}>
                <TextComponent title={"Yes"} size={20} style={[styles.poppinsMedium,styles.green]} textCenter={true}/>
              </TouchableOpacity> 
              <TouchableOpacity style={[{width:'50%',height:'100%'},styles.centerVertical]} onPress={hideModal}>
                <TextComponent title={"No"} size={20} style={[styles.red]} textCenter={true}/>
              </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>



    </ScreenViewComponent>
  )
}
