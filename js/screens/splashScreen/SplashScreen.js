import { ActivityIndicator, Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { ScreenViewComponent } from '../../components'
import { flex, heightValue, styles, widthValue } from '../../styles/Styles'
import { splashScreenImage } from '../../constants/imageLinks'
import { useSelector } from 'react-redux'

const SplashScreen = ({navigation}) => {
    const {isLoggedIn} = useSelector((state)=>state.auth.isLoggedIn)
    useEffect(()=>{
      setTimeout(() => {
        {isLoggedIn ? navigation.replace("TabNavigation") : navigation.replace("WelcomeScreen")}
      }, 3000);
    },[])
  
  return (
    <ScreenViewComponent>
        <View style={[flex(1),styles.allCenter]}>
        <Image source={splashScreenImage} style={{height:heightValue(1.8),width:widthValue(1.8),marginTop:-40,resizeMode:"contain"}}/>
            <ActivityIndicator size={75} color={"#000"} style={{position:"absolute",bottom:100}}/>
        </View>
    </ScreenViewComponent>
  )
}

export default SplashScreen
