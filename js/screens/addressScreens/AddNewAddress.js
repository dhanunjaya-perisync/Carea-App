import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { mapImage } from '../../constants/imageLinks'
import { borderWidth, flex, heightValue, gap, margin, marginPosition, padding, paddingPoistion, radius, shadow, styles, widthValue } from '../../styles/Styles'
import { CheckBoxComponent } from '../../components'
import { ButtonComponent } from '../../components/touchables/CommonButton'
export const AddNewAddress = () => {
    return (
        <ScreenViewComponent>
            <Image source={mapImage} resizeMode='cover' style={[{ width: widthValue(1), height: heightValue(2.8) }]} />
            <View style={[styles.bgWhite, flex(1), radius(30, 30, 0, 0), paddingPoistion(15, 20, 0, 20), shadow(2), marginPosition(-15, 0, 0, 0)]}>
                <TextComponent title={"Address Details"} size={22} style={[styles.poppinsSemiBold]} textCenter={true} />
                <View style={[styles.borderGrey, borderWidth(0, 0, 0, 1), marginPosition(10, 0, 10, 0)]} />
                <TextComponent title={"Name Address"} size={18} style={[styles.poppinsSemiBold, marginPosition(10, 0, 5, 0)]} />
                <TextInputCompnent placeholderValue={"Hotel"} />
                <TextComponent title={"Address Details"} size={18} style={[styles.poppinsSemiBold, marginPosition(10, 0, 5, 0)]} />
                <TextInputCompnent placeholderValue={"2899 Summer Drive Tayler, PC 3432"} hide={"location"} iconBlack={true} iconSize={18} noSecure={true} />
                <View style={[marginPosition(20, 0, 0, 0), styles.row, gap(10)]}>
                    <CheckBoxComponent />
                    <TouchableOpacity><TextComponent title={"Make thisas the deafult address"} style={[styles.poppinsBold, marginPosition(2, 0, 0, 0)]} size={15} /></TouchableOpacity>
                </View>
                <ButtonComponent titleName={"Add"} style={[styles.bgBlack,marginPosition(20,0,0,0)]} size={16} />
            </View>
        </ScreenViewComponent>
    )
}