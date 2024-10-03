import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Colors } from '../../styles/Colors'
import { TextComponent } from '../../components'
import Swiper from 'react-native-swiper'
import { swiperOne } from '../../constants/imageLinks'
import { borderColor, borderWidth, flex,heightValue, radius, styles, widthValue } from '../../styles/Styles'
export const SwiperCom = () => {

    const SwiperComponent = ({style,imgSource}) => {
        return (
            <View style={[flex(1),styles.allCenter,style.bgBlack]}>
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
    <View>
        <Swiper style={[borderWidth(4),styles.borderBlack,styles.bgLightBlue,flex(1)]}>
        {/* <SwiperComponent imgSource={swiperOne} style={[{ height: heightValue(1.8), width: widthValue(1.8), top: -30}]} />
        <SwiperComponent imgSource={swiperOne} style={[{ height: heightValue(1.8), width: widthValue(1.8), top: -30}]} />
        <SwiperComponent imgSource={swiperOne} style={[{ height: heightValue(1.8), width: widthValue(1.8), top: -30}]} /> */}
        <View>
            <Text>One</Text>
        </View>
        <View>
            <Text>Two</Text>
        </View>
        <View>
            <Text>Three</Text>
        </View>
        </Swiper>
    </View>
  )
}
