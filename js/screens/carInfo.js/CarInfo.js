import { View, Text,Image, ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../styles/Colors'
import { carImageOne,carImage2,carImage3,carImage5,carImage1,checkBadge} from '../../constants/imageLinks'
import { ScreenViewComponent,TextComponent } from '../../components'
import { borderColor, borderWidth,gap,heightValue, marginPosition, padding, radius, styles, widthValue } from '../../styles/Styles'
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/AntDesign"
import { ButtonComponent } from '../../components/touchables/CommonButton'
import { useRoute } from '@react-navigation/native'

export const CarInfo = ({navigation}) => {

  const route = useRoute()
  const {product} = route.params

    const GalleryPhotos = ({imageUri}) => {
      return (
        <View style={[styles.bgLightGrey,{height:80},styles.allCenter,marginPosition(0,10,0,0),radius(10),{height:80,width:80,overflow:"hidden"}]}>
            <Image style={[{height:80,width:100}]} source={imageUri} resizeMode='cover'/>
        </View>
      )
    }
    //navigation
    const navigateToMakeAnOffer = () => {
      navigation.navigate("MakeAnOffer")
    }

  return (
    <ScreenViewComponent style={[padding(0,0,20)]}>
        {/* image */}
        <View style={[styles.centerHorizontal,{height:270}]}>
            <Image
                source={product.imageUrl}
                style={[{resizeMode:"contain",zIndex:4,marginTop:-40,height:280, width:widthValue(1.2)}]}
            />
            <View style={[{ height: 40, width: 40, position: "absolute", top: 195, zIndex: 2 }, styles.bgBlack, radius(20), styles.allCenter]}><TextComponent title={"360'"} size={14} color={Colors.white} myFontFamily={"Poppins-Meduim"}/></View>
            <View style={[{ height: 320, width: widthValue(1.2), transform: "rotateX(79deg)", position: "absolute", borderRadius: 160, top: 20 }, borderWidth(0, 0, 2, 12, 2), borderColor(styles.black)]}></View>
            <View style={[{height:heightValue(3),width:widthValue(1)}]}></View>
        </View>
        {/* content */}

        <View style={[styles.allCenter,styles.row,gap(15)]}>
          <View style={[{height:28,width:28,},radius(14),styles.bgLightGrey,styles.allCenter]}>
            <TextComponent title={"✔"}/>
          </View>
          <View style={[{height:28,width:28,},radius(14),styles.bgBlack]}></View>
          <View style={[{height:28,width:28,},radius(14),styles.bgBlue]}></View>
          <View style={[{height:28,width:28,backgroundColor:"#CA8787"},radius(14)]}></View>
          <View style={[{height:28,width:28,backgroundColor:"brown"},radius(14)]}></View>
        </View>
        {/* name */}
        <View style={[marginPosition(10,0,0,0)]}>
          <TextComponent title={`${product.name}`} size={30} style={[styles.poppinsSemiBold]}/>
          <View style={[styles.row,gap(10),styles.centerHorizontal]}>
          <View style={[styles.bgLightGrey,padding(0,5,10),radius(5)]}>
          <TextComponent title={`${product.status}`} fontWeight={"600"} size={14}/>
          </View>
          <Icon name='star-half-full' size={17}/>
          <TouchableOpacity onPress={()=>{navigation.navigate("Reviews",{title:product.rating})}}>
              <TextComponent title={`${product.rating} (86 reviews)`} size={15} fontWeight={"600"} style={[styles.black]} opacity={0.9}/>
          </TouchableOpacity>
        </View>
        </View>
        {/* description */}
        <View style={[marginPosition(15,0,0,0)]}>
          <TextComponent title={"Description"} size={19} style={[styles.poppinsSemiBold]}/>
          <TextComponent numberOfLines={2} size={15} style={[styles.poppinsReg]} title={"DescriLorem ipsum dolor jks klsne j nslkk,m sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}/>
        </View>
        
        {/* gallery */}
        <View style={[marginPosition(10,0,0,0)]}>
        <TextComponent title={"Gallery Photos"} size={19} style={[styles.poppinsSemiBold,marginPosition(0,0,5,0)]}/>
        <ScrollView horizontal={true}>
          <GalleryPhotos imageUri={carImageOne}/>
          <GalleryPhotos imageUri={carImage2}/>
          <GalleryPhotos imageUri={carImage1}/>
          <GalleryPhotos imageUri={carImage3}/>
          <GalleryPhotos imageUri={carImage5}/>
        </ScrollView>
        </View>
        {/* store */}
        <View style={[styles.row,styles.spaceBetween,marginPosition(20,0,0,0)]}>
          <View style={[styles.row,gap(15),styles.allCenter]}>
            <Image style={[{height:55,width:55}]} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/768px-BMW.svg.png"}}/>
            <View style={[styles.centerVertical]}>
              <View style={[styles.row,styles.centerHorizontal,gap(6)]}>
                  <TextComponent title={"BMW Store"} size={19} style={[styles.poppinsSemiBold]}/>
                  <Image style={{height:16,width:16,marginTop:-3}} source={checkBadge}/>
              </View>
              <TextComponent title={"Official Account of BMW"} size={15} style={[styles.poppinsReg,marginPosition(-6,0,0,0)]}/>
            </View>
          </View>
          <View style={[styles.row,gap(20)]}>
              <TouchableOpacity>
                <Icon2 name='message1' size={23}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon2 name='phone' size={23}/>
              </TouchableOpacity>
          </View>
        </View>

        {/* price */}
        <View style={[styles.row,styles.spaceBetween,marginPosition(20,0,0,0),]}>
          <View>
            <TextComponent title={"Price"} style={[styles.poppinsMedium,styles.black]} opacity={0.8}/>
            <TextComponent title={`${product.price}`} size={24} style={[styles.poppinsSemiBold]}/>
          </View>
          <ButtonComponent titleName={"Make an Offer"} bgColor={Colors.black} size={15} customShadow={2} style={[{width:widthValue(1.7)}]} onPressEvent={navigateToMakeAnOffer}/>
        </View>
        

    </ScreenViewComponent>
  )
}
