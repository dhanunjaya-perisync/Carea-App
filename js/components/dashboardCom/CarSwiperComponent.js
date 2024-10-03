import { View, Text,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { TextComponent } from '../view';
import { radius,paddingPoistion, styles, marginPosition} from "../../styles/Styles";
export const CarSwiperComponent = ({percentage,deals,description,imageUri,contain,height,bottom,marginBottom,style}) => {

  const EachSwiper = ({percentage,deals,description,imageUri,contain}) => {
    return (
      <View style={[styles.row,styles.centerHorizontal,styles.bgLightGrey,radius(25),paddingPoistion(0,20,0,20),style]}>
    <View>
        <TextComponent title={percentage} size={40} style={[styles.poppinsSemiBold]}/>
        <TextComponent title={deals} size={18} style={[styles.poppinsSemiBold]}/>
        <TextComponent title={description} size={14} style={[styles.poppinsMedium]}/>
    </View>
    <View>
        <Image
        source={imageUri}
        style={[{height:180,width:180,resizeMode:contain?"contain":"cover"}]}
        />
    </View>
    </View>
    )
  }
  return(
    <Swiper style={[{height:height?height:180,},marginPosition(0,0,marginBottom?marginBottom:0,0)]} paginationStyle={{bottom:bottom?bottom:10}} activeDotColor="#000" activeDotStyle={{width:25,height:5}} dotStyle={{width:5,height:5,}} autoplay={true} autoplayTimeout={8}>
    <EachSwiper percentage={percentage} deals={deals} description={description} imageUri={imageUri} contain={contain}/>
    <EachSwiper percentage={percentage} deals={deals} description={description} imageUri={imageUri} contain={contain}/>
    <EachSwiper percentage={percentage} deals={deals} description={description} imageUri={imageUri} contain={contain}/>
    <EachSwiper percentage={percentage} deals={deals} description={description} imageUri={imageUri} contain={contain}/>
    </Swiper>
)
}