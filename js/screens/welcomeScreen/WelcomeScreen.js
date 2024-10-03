import { View, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { TextComponent,ScreenViewComponent } from '../../components'
import { homeBgCar } from '../../constants/imageLinks'
import { flex, fontSize, marginPosition, styles } from '../../styles/Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const WelcomeScreen = ({navigation}) => {
 
    useEffect(()=>{
      setTimeout(() => {
        navigation.replace("SwiperScreen")
      }, 3000);
    },[])
  
  return (
    <ScreenViewComponent>
        <StatusBar translucent backgroundColor="transparent"/>
        <ImageBackground source={homeBgCar} style={[flex(1),styles.justifyEnd]}>
        <View style={[marginPosition(0,0,25,35)]}>
        <TextComponent title={"Welcome to 👋"} size={40} color={Colors.white}/>
        <TextComponent title={"Carea"} style={[fontSize(90),{fontFamily:"Poppins-Bold"}]} color={Colors.white}/>
        <TextComponent title={"The best car marketplace app of the \n century for your transportation needs!"} size={18} myFontFamily={"Poppins-Regular"} color={Colors.white}/>
        </View>
        </ImageBackground>
    </ScreenViewComponent>
  )
}
export default WelcomeScreen