import { View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../../components'
import { borderWidth, flex, gap, heightValue, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../../styles/Styles'
import { splashScreenImage } from '../../../constants/imageLinks'
import { CheckBoxComponent } from '../../../components'
import { ButtonComponent } from '../../../components/touchables/CommonButton'
import { emailValidator } from '../../../regexExp/emailValidator'
import { Colors } from '../../../styles/Colors'
// logo
import { fbLogo, googleLogo, appleLogo } from '../../../constants/imageLinks'
import { FGAComponent } from '../../../components/FGA/FGAComponent'
export const Signup = ({ navigation }) => {

    // form validation
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({});

    const validateEmail = (value) => {
        if (!value.trim()) {
            return 'email is required';
        }
        else if (!emailValidator(value)) {
            return "enter a valid email"
        }
        return '';
    }

    const handleEmail = (value) => {
        setEmail(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: validateEmail(value),
        }));
    }
    const validatePassword = (value) => {
            if(!value.trim()){
                return "password is required";
            }
            return ''
    }
    const checkPasswordLength = (value) => {
            if(value.length < 6){
                return "Length must be greater than 6"
            }
            else if(value.length > 12){
                return "Length must be equal or less than 12"
            }
            return ""
    }
    const checkUppercase = (value) => {
        if(!/[A-Z]/.test(value)){
            return "Must contain atleast one uppercase"
        }
        return ""
    }

    const checkLowercase = (value) => {
        if(!/[a-z]/.test(value)){
            return "Must contain atleast one lowercase"
        }
        return ""
    }

    const checkDigit = (value) => {
        if(!/\d/.test(value)){
            return "Must contain atleast one digit"
        }
        return ""
    }

    const checkSpecial = (value) => {
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(value)){
            return "Must contain atleast one Special character"
        }
        return ""
    }

    const handlePassword = (value) => {
            setPassword(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                password:validatePassword(value),
                uppercase:checkUppercase(value),
                lowercase:checkLowercase(value),
                passwordLength:checkPasswordLength(value),
                digit:checkDigit(value),
                special:checkSpecial(value),
            }))
    }
    const hasErrors = () => {
        if(email.length === 0 || password.length === 0){
            handleEmail(email)
            handlePassword(password)
            return false
        }
        else{
            let valid =  Object.values(errors).some((error) => error !== '');
            if(!valid){
                console.log("Valid details -- "+email + " "+password)
                navigation.navigate("Registration",{"email":email})
            }
        }  
    };


    const goToLoginpage = () => {
        navigation.navigate("Login");
    }

    return (
        <ScreenViewComponent>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <ScrollView>
                <View style={[flex(1), paddingPoistion(0, 20, 0, 20)]}>
                    <View style={[styles.allCenter]}>
                        <Image style={[{ height: heightValue(4.2), width: widthValue(1.9), resizeMode: "contain" }]} source={splashScreenImage} />
                        <TextComponent title={"Create Your Account"} size={30} myFontFamily={"Poppins-Bold"} style={[marginPosition(0, 0, 15, 0)]} />
                    </View>
                    <View>

                        <View>
                            <TextInputCompnent placeholderValue={"Email"} iconName={"mail"} iconSize={16}  value={email} onChangeText={handleEmail} iconBlack={email?true:false}/>
                            {/* email error */}
                            {errors.email !== '' && <TextComponent title={errors.email} style={[styles.poppinsReg,styles.red]} size={16} />}
                            {errors.email === '' && <View style={[{height:24}]}></View>}
                        </View>

                        <View>
                            <TextInputCompnent placeholderValue={"Password"} iconName={"lock"} iconSize={16} hide={"eye-with-line"} value={password} onChangeText={handlePassword} iconBlack={password?true:false}/>
                            {errors.password !== '' && <TextComponent title={errors.password} style={[styles.poppinsReg,styles.red]} size={16}/>}
                            {errors.password == '' && errors.passwordLength !== '' && <TextComponent title={errors.passwordLength} style={[styles.poppinsReg,styles.red]} size={16}/>}
                            {errors.password == '' && errors.uppercase !== '' && <TextComponent title={errors.uppercase} style={[styles.poppinsReg,styles.red]} size={16} />}
                            {errors.password == '' && errors.lowercase !== '' && <TextComponent title={errors.lowercase} style={[styles.poppinsReg,styles.red]} size={16} />}
                            {errors.password == '' && errors.digit !== '' && <TextComponent title={errors.digit} style={[styles.poppinsReg,styles.red]} size={16} />}
                            {errors.password == '' && errors.special !== '' && <TextComponent title={errors.special} style={[styles.poppinsReg,styles.red]} size={16} />}
                        </View>

                        <View style={[marginPosition(20, 0, 0, 0), styles.row, styles.allCenter, gap(10)]}>
                            <CheckBoxComponent />
                            <TouchableOpacity><TextComponent title={"Remember me"} style={[styles.poppinsBold, marginPosition(2, 0, 0, 0)]} size={15} /></TouchableOpacity>
                        </View>

                        {/* Login Button */}

                        <View style={[marginPosition(15, 0, 0, 0)]} >
                            <ButtonComponent titleName={"Sign up"} bgColor={Colors.black} size={16} onPressEvent={hasErrors} />
                        </View>

                    </View>

                    {/* form ends */}

                    <View style={[styles.borderGrey, borderWidth(0, 0, 0, 1), { position: "relative" }, marginPosition(35, 0, 40, 0)]}>
                        <View style={[{ position: "absolute", top: -10, left: "33%" }, styles.allCenter, styles.bgWhite, padding(0, 0, 5)]}>
                            <TextComponent title={"or continue with"} style={[styles.black, styles.poppinsReg]} size={16} />
                        </View>
                    </View>

                    <View style={[styles.row, gap(15), styles.allCenter]}>
                        <FGAComponent logo={fbLogo} />
                        <FGAComponent logo={googleLogo} />
                        <FGAComponent logo={appleLogo} resizeMode={"contain"} />
                    </View>

                    <View style={[styles.row, gap(5), marginPosition(20, 0, 0, 0), styles.allCenter]}>
                        <TextComponent title={"Already have an account?"} style={[styles.poppinsReg]} opacity={0.4} size={16} />
                        <TouchableOpacity onPress={goToLoginpage}>
                            <TextComponent title={"Sign in"} myFontFamily={"Poppins-Bold"} size={16} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ScreenViewComponent>
    )
}
