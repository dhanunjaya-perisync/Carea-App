import { View, ScrollView, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import { marginPosition, paddingPoistion, borderWidth, radius, styles, padding, gap, margin } from '../../styles/Styles'
import { TextComponent, ScreenViewComponent } from '../../components'
import Icon from "react-native-vector-icons/AntDesign"
import SearchComponent from "../../components/inputs/SearchComponent";
import { ExpandComponent } from '../../components/commonComp/ExpandComponent'
const questions = [
  { title: "What is Carea?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option1" },
  { title: "How to use Carea?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option1" },
  { title: "How do I cancel an orders?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option1" },
  { title: "Can I get a discount at checkout?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option1" },
  { title: "Why can't I make a payment?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option4" },
  { title: "How to delete My Account?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option2" },
  { title: "How to delete My Mail?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option2" },
  { title: "How to change Wallet Card?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option4" },
  { title: "About services?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option3" },
  { title: "How to change Upi Id?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option5" },
  { title: "How to change Profile?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option2" },
  { title: "How to change Security PIN?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", option: "option5" },
]
export const HelpFAQ = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  let filteredData = questions.filter(faq => faq.option == selectedValue)
  // horizantal component
  const HorizontalComponent = ({ title, height, selected, onSelect }) => {
    return (
      <TouchableOpacity onPress={onSelect} style={[{ backgroundColor: selected ? "#000" : "#fff", height: height }, marginPosition(0, 0, 0, 10), borderWidth(3), styles.borderBlack, radius(40), styles.allCenter, padding(0, 0, 15)]}>
        <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={selected ? "#fff" : "#000"} />
      </TouchableOpacity>
    )
  }
  return (
    <ScreenViewComponent>
      <View style={[marginPosition(20, 0, 0, 10)]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HorizontalComponent title={"General"}
            selected={selectedValue === "option1"}
            onSelect={() => setSelectedValue("option1")}
            height={35}
          />
          <HorizontalComponent title={"Account"}
            selected={selectedValue === "option2"}
            onSelect={() => setSelectedValue("option2")}
            height={35}
          />
          <HorizontalComponent title={"Service"}
            selected={selectedValue === "option3"}
            onSelect={() => setSelectedValue("option3")}
            height={35}
          />
          <HorizontalComponent title={"Payment"}
            selected={selectedValue === "option4"}
            onSelect={() => setSelectedValue("option4")}
            height={35}
          />
          <HorizontalComponent title={"Security"}
            selected={selectedValue === "option5"}
            onSelect={() => setSelectedValue("option5")}
            height={35}
          />
          <HorizontalComponent title={"Other"}
            selected={selectedValue === "option6"}
            onSelect={() => setSelectedValue("option6")}
            width={80}
            height={35}
          />
        </ScrollView>
      </View>
      <View style={[marginPosition(15, 20, 15, 20)]}>
        <SearchComponent placeholder={"Search"} height={52} />
      </View>
      <View style={[marginPosition(0, 20, 0, 20)]}>
        <FlatList
        data={filteredData}
        keyExtractor={(_,index)=>index.toString()}
        renderItem={({item})=>(
          <ExpandComponent title={item.title} desc={item.desc}/>
        )}
        />
      </View>
    </ScreenViewComponent>
  )
}
