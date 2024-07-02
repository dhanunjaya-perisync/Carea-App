import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { marginPosition, paddingPoistion, borderWidth, radius, styles, padding, gap, margin } from '../../styles/Styles'
import { TextComponent, ScreenViewComponent } from '../../components'
import Icon from "react-native-vector-icons/AntDesign"
import { profileImgOne, profileImgTwo ,profileDefault} from '../../constants/imageLinks'
export const Reviews = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  // horizantal component
  const HorizontalComponent = ({ title, width, height, selected, onSelect }) => {
    return (
      <TouchableOpacity onPress={onSelect} style={[{ backgroundColor: selected ? "#000" : "#fff", width: width, height: height }, marginPosition(0, 0, 0, 10), borderWidth(3), styles.borderBlack, radius(40), styles.allCenter]}>
        <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={selected ? "#fff" : "#000"} />
      </TouchableOpacity>
    )
  }

  // reviews component

  const ReviewComponent = ({imageUri,name,rating,comment,likes,heart}) => {
    return (
      <View style={[margin(0, 15, 0)]}>
        <View style={[styles.row, styles.spaceBetween]}>
          <View style={[styles.row, styles.allCenter, gap(15)]}>
            <Image style={[{ height: 50, width: 50 },radius(25)]} source={imageUri} />
            <TextComponent title={name} size={17} style={[styles.poppinsSemiBold]} />
          </View>
          <View style={[styles.row, styles.allCenter, gap(15)]}>
            <HorizontalComponent title={`★ ${rating}`} width={62} height={32} />
            <TouchableOpacity><Icon name='message1' size={20} /></TouchableOpacity>
          </View>
        </View>
        <TextComponent size={15}
          title={comment}
          style={[styles.poppinsReg, margin(0, 8, 0)]}
        />
        <View style={[styles.row, gap(10), styles.centerHorizontal]}>
          <Icon name={heart} size={20} />
          <TextComponent title={likes} fontWeight={"700"} />
          <TextComponent title={"6 days ago"} style={[styles.poppinsReg, marginPosition(0, 0, -4, 0)]} />
        </View>
      </View>
    )
  }

  return (
    <ScreenViewComponent style={[padding(0, 0, 20)]}>
      <View style={[styles.bgWhite,paddingPoistion(5,0,10,0)]}>
        <ScrollView horizontal={true}>
          <HorizontalComponent title={"★ All"}
            selected={selectedValue === "option1"}
            onSelect={() => setSelectedValue("option1")}
            width={75}
            height={35}
          />
          <HorizontalComponent title={"★ 5"}
            selected={selectedValue === "option2"}
            onSelect={() => setSelectedValue("option2")}
            width={75}
            height={35}
          />
          <HorizontalComponent title={"★ 4"}
            selected={selectedValue === "option3"}
            onSelect={() => setSelectedValue("option3")}
            width={75}
            height={35}
          />
          <HorizontalComponent title={"★ 3"}
            selected={selectedValue === "option4"}
            onSelect={() => setSelectedValue("option4")}
            width={75}
            height={35}
          />
          <HorizontalComponent title={"★ 2"}
            selected={selectedValue === "option5"}
            onSelect={() => setSelectedValue("option5")}
            width={75}
            height={35}
          />
          <HorizontalComponent title={"★ 1"}
            selected={selectedValue === "option6"}
            onSelect={() => setSelectedValue("option6")}
            width={80}
            height={35}
          />
        </ScrollView>
      </View>

      {/* reviews */}
      <ScrollView>
      <ReviewComponent imageUri={profileImgOne} name={"Darlene Robertson"} heart={"heart"} rating={5} likes={729} comment={"The Car is awesome and very fast. my family and i realy like it. wow! 💯💯💯"}/>
      <ReviewComponent imageUri={profileImgTwo} name={"Marvin McKinney"} heart={"hearto"} rating={4} likes={347} comment={"The Car is very nice and comfortable to drive . It's just that the price is not friendly 😂😂"}/>
      <ReviewComponent imageUri={profileDefault} name={"Jhon Carter"} heart={"hearto"} rating={4} likes={207} comment={"Really Amazing Car, Great exprerience this car, I really loved it ♥"}/>
      <ReviewComponent imageUri={profileImgOne} name={"Darlene Robertson"} heart={"heart"} rating={5} likes={729} comment={"The Car is awesome and very fast. my family and i realy like it. wow! 💯💯💯"}/>
      <ReviewComponent imageUri={profileImgTwo} name={"Marvin McKinney"} heart={"hearto"} rating={4} likes={347} comment={"The Car is very nice and comfortable to drive . It's just that the price is not friendly 😂😂"}/>
      </ScrollView>

    </ScreenViewComponent>
  )
}
