import { View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { fbLogo, googleLogo, appleLogo, splashScreenImage } from '../../constants/imageLinks'
import { borderWidth, flex, fontSize, gap, heightValue, margin, marginPosition, padding, radius, styles, widthValue } from '../../styles/Styles'
import { ButtonComponent } from '../../components/touchables/CommonButton'
const ChooseScreen = ({navigation}) => {

    const goToLoginpage = () =>{
        navigation.navigate("Login")
    }

    const goToSignuppage = () =>{
        navigation.navigate("Signup")
    }


    const FGAComponent = ({imgSource,resizeMode,title}) => {
        return (
            <View style={[styles.row, styles.allCenter, { gap: 10 }, borderWidth(1), styles.borderGrey, padding(0, 12, 0), radius(15), margin(0, 8, 0)]}>
                <Image source={imgSource} style={[{ height: 27, width: 27, resizeMode: resizeMode?resizeMode:"cover" }]}/>
                <TextComponent title={title} style={[styles.black, fontSize(16), styles.normalWieght]}/>
            </View>
        )
    }
    return (
        <ScreenViewComponent>
             <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>
            <View style={[flex(1), styles.justifyEnd,padding(0,0,20)]}>
                <View style={[styles.centerHorizontal]}>
                <Image
                    source={splashScreenImage}
                    style={[{ height: heightValue(4), width: widthValue(1.8), resizeMode: 'contain'}]}
                />
                </View>
                <TextComponent title="Let's you in" size={48} textCenter={true} style={[styles.black, styles.poppinsBold]} />

                {/* Choose option components */}
                <View style={[marginPosition(15, 0, 0, 0)]}>
                    <FGAComponent title={"Continue with Facebook"} imgSource={fbLogo}/>
                    <FGAComponent title={"Continue with Google"} imgSource={googleLogo} />
                    <FGAComponent title={"Continue with Apple"} imgSource={appleLogo} resizeMode={"contain"}/>
                </View>

                <View style={[styles.borderGrey, borderWidth(0, 0, 0, 1), { position: "relative" }, marginPosition(35, 0, 40, 0)]}>
                    <View style={[{ height: 25, width: 25, position: "absolute", top: -10, left: "48%" }, styles.allCenter, styles.bgWhite, radius(25)]}>
                        <TextComponent title="Or" />
                    </View>
                </View>

                <View>
                    <ButtonComponent titleName={"Sign in with password"} size={16} style={[styles.bgBlack]} customShadow={3} onPressEvent={goToLoginpage}/>
                </View>

                <View style={[marginPosition(25, 0, 50, 0),styles.row,styles.allCenter,gap(5)]}>
                    <TextComponent title={"Don't have an account?"} size={15} myFontFamily={"Poppins-Medium"} opacity={0.6}/>
                    <TouchableOpacity onPress={goToSignuppage}>
                    <TextComponent title={"Sign up"} size={15} myFontFamily={"Poppins-Bold"}/>
                    </TouchableOpacity>
                </View>

            </View>
        </ScreenViewComponent>
    )
}

export default ChooseScreen
