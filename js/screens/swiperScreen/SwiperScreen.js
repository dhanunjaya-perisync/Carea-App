import { View, Image, StatusBar} from 'react-native'
import React from 'react'
import { swiperOne, swiperTwo, swiperThree } from '../../constants/imageLinks'
import { ScreenViewComponent, TextComponent } from '../../components'
import Swiper from 'react-native-swiper'
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { borderColor, borderWidth, flex,heightValue, radius, styles, widthValue } from '../../styles/Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const SwiperScreen = ({navigation}) => {

    const navigateToOtherPage = () => {
        navigation.navigate("ChooseScreen");
    }

    const SwiperComponent = ({style,imgSource}) => {
        return (
            <View style={[flex(1),styles.allCenter]}>
                <Image
                    source={imgSource}
                    style={[{resizeMode:"contain",position:"absolute",zIndex:4},style]}
                />
                <View style={[{ height: 40, width: 40, position: "absolute", top: 335, zIndex: 2 }, styles.bgBlack, radius(20), styles.allCenter]}><TextComponent title={"360'"} size={14} color={Colors.white} myFontFamily={"Poppins-Meduim"}/></View>
                <View style={[{ height: 320, width: 320, transform: "rotateX(79deg)", position: "absolute", borderRadius: 160, top: 160 }, borderWidth(0, 0, 2, 12, 2), borderColor(styles.black)]}></View>
                <View style={[{height:heightValue(3),width:widthValue(1)}]}></View>
                <TextComponent title={"The best car in your \n hands with Carea"} size={34} color={Colors.black} myFontFamily={"Poppins-Bold"} style={[{ transform: "scaleY(1.05)" }]} />
            </View>
        )
    }


    return (
        <ScreenViewComponent>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>
            <View style={[flex(1)]}>
            <Swiper scrollEnabled={true} autoplay={false} activeDotColor='#000' activeDotStyle={{width:35,height:8}} autoplayTimeout={3} >
                <SwiperComponent imgSource={swiperOne} style={[{ height: heightValue(1.8), width: widthValue(1.8), top: -30}]} />
                <SwiperComponent imgSource={swiperTwo} style={[{ height: heightValue(1.8), width: widthValue(1.8), top: 20}]} />
                <SwiperComponent imgSource={swiperThree} style={[{ height: heightValue(1.45), width: widthValue(1.45), top: -50 }]}/>
            </Swiper>
            </View>
            

            {/* <SwiperCom /> */}

            <View style={[{position:"absolute",bottom:50,width:"85%",marginLeft:"7.5%"}]}>
                <ButtonComponent titleName={"Get Started"} bgColor={Colors.black} size={16} onPressEvent={navigateToOtherPage}/>
            </View>
        </ScreenViewComponent>
    )
}



export default SwiperScreen