import { View, Text,FlatList, Image ,TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import React,{useState} from 'react'
import { ScreenViewComponent,TextComponent } from '../../components'
import SearchComponent from '../../components/inputs/SearchComponent'
import {  borderWidth, flex, heightValue, marginPosition, paddingPoistion, radius, styles, widthValue,margin} from "../../styles/Styles";
import { wishlistInfo } from '../../constants/carCardsInfo'
import { CarCardComponent } from '../../components/dashboardCom/CarCardComponent';
import { notFoundImage } from '../../constants/imageLinks';
import { Modal } from 'react-native';
import HorizantalView from '../../components/dashboardCom/HorizantalView';
import { Colors } from '../../styles/Colors';
import { ButtonComponent } from '../../components/touchables/CommonButton';

export const SearchScreen = ({navigation}) => {
    // modal 
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
    }
    const hideModal = () => {
        setModal(false)
    }
    const [item,setItem] = useState("")
    const [data, setData] = useState([])

    

    const filterData = (value) => {
        let tempData = wishlistInfo.filter((car) => car.name.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()))
        if(value.length === 0){
            setData([])
        }
        else{
            setData(tempData)
        }
    }
    const handleSearch = (value) => {
        setItem(value)
        filterData(value)
    }

    // horizantal component
    const HorizontalComponent = ({ title, color, bgColor, height }) => {
        return (
            <View style={[{ backgroundColor: bgColor }, marginPosition(0, 0, 0, 10), paddingPoistion(4, 20, 4, 20), borderWidth(3), styles.borderBlack, radius(40)]}>
                <TextComponent title={title} size={16} style={[styles.poppinsSemiBold]} color={color} />
            </View>
        )
    }

    return (
        <ScreenViewComponent style={[paddingPoistion(20,20,0,20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <SearchComponent placeholder={"Search"} autoFocus={true} onChangeText={handleSearch} value={item} filterEvent={showModal}/>
            { item.length > 0 ? 
                <View style={[styles.row,styles.spaceBetween,marginPosition(20,0,15,0)]}>
                <TextComponent title={`Results for "${item.trim()}"`} size={22} style={[styles.poppinsSemiBold]}/>
                <TextComponent title={data.length > 1 ?`${data.length} founds`:`${data.length} found`} size={18} style={[styles.poppinsSemiBold]}/>
                </View> :
                <View style={[styles.row,styles.spaceBetween,marginPosition(20,0,15,0)]}>
                <TextComponent title={`Recent`} size={22} style={[styles.poppinsSemiBold]}/>
                <TextComponent title={`Clear All`} size={18} style={[styles.poppinsSemiBold]}/>
                </View>
            }
            { data.length == 0 && item.length > 0 ?
            <View style={[flex(1),styles.centerVertical,styles.centerHorizontal]}>
                <Image
                style={[{height:heightValue(2.8),width:widthValue(1.4)}]}
                source={notFoundImage}
                resizeMethod='contain'
                />
                <TextComponent title={"Not Found"} textCenter={true} size={22} style={[styles.poppinsSemiBold]}/>
                <TextComponent title={"Sorry, the keyboard you entered cannot be found, please check again or search with another keyboard"}
                textCenter={true} size={17} style={[styles.poppinsMedium,marginPosition(5,0,0,0)]} 
                />
            </View> :
            <FlatList
            columnWrapperStyle={[styles.spaceBetweenVertical]}
            numColumns={2}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("CarInfo",{product:item})
                }}>
                    <CarCardComponent item={item}/>
                </TouchableOpacity>
            )}
        />
            }

            {/* Modal */}

            <Modal 
            visible={modal}
            onRequestClose={hideModal}
            animationType='slide'
            transparent={true}
            >
                <View style={[flex(1),{backgroundColor:"rgba(0,0,0,0.4)"},styles.justifyEnd]}>
                    <View style={[{height:heightValue(1.1)},styles.bgWhite,radius(35,35,0,0),paddingPoistion(0,0,0,20)]}>
                        <TextComponent title={"Sort & Filter"} size={22} style={[styles.poppinsSemiBold,marginPosition(20,0,0,0)]} textCenter={true}/>

                        {/* line */}
                        <View style={[borderWidth(0,0,0,1,0),styles.borderGrey,marginPosition(10,20,0,0)]}></View>
                        {/* car brands */}
                        <TextComponent title={"Car Brands"} size={18} style={[styles.poppinsSemiBold,margin(0,15,0)]}/>
                        <View>
                            <HorizantalView/>
                        </View>
                        {/* Car condition */}
                        <TextComponent title={"Car Condition"} size={18} style={[styles.poppinsSemiBold,margin(0,18,0)]}/>
                        <View>
                            <ScrollView horizontal={true}>
                                <HorizontalComponent title={"All"} bgColor={Colors.black} color={Colors.white}/>
                                <HorizontalComponent title={"New"}/>
                                <HorizontalComponent title={"Used"}/>
                            </ScrollView>
                        </View>
                        {/* Price Range */}
                        <TextComponent title={"Price Range"} size={18} style={[styles.poppinsSemiBold,margin(0,18,0)]}/>
                        <View style={[marginPosition(30,0,0,0)]}>
                            <View style={[borderWidth(0,0,0,3,0),styles.borderGrey,marginPosition(10,20,0,0)]}>
                                <View style={[borderWidth(0,0,0,3,0),marginPosition(0,0,-3,40),{width:'40%'},styles.row,styles.spaceBetween]}>
                                    <View style={[{height:24,width:24},radius(20),styles.bgBlack,styles.allCenter,marginPosition(0,0,-15,0)]}>
                                        <View style={[{height:12,width:12},radius(12),styles.bgWhite,]}></View>
                                    </View>
                                    <View style={[{height:24,width:24},radius(20),styles.bgBlack,styles.allCenter,marginPosition(0,0,-15,0)]}>
                                        <View style={[{height:12,width:12},radius(12),styles.bgWhite,]}></View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[marginPosition(15,20,0,0)]}>
                            <View style={[marginPosition(0,0,-3,40),{width:'42%'},styles.row,styles.spaceBetween]}>
                                <TextComponent title={"$80K"} style={[styles.poppinsSemiBold]}/>
                                <TextComponent title={"$200K"} style={[styles.poppinsSemiBold]}/>
                            </View>
                        </View>

                        {/* Sort by */}
                        <TextComponent title={"Sort by"} size={18} style={[styles.poppinsSemiBold,margin(0,18,0)]}/>
                        <View>
                            <ScrollView horizontal={true}>
                                <HorizontalComponent title={"Popular"}/>
                                <HorizontalComponent title={"Most Recent"} bgColor={Colors.black} color={Colors.white}/>
                                <HorizontalComponent title={"Price High"}/>
                                <HorizontalComponent title={"Price Low"}/>
                            </ScrollView>
                        </View>

                         {/*Rating */}
                         <TextComponent title={"Rating"} size={18} style={[styles.poppinsSemiBold,margin(0,18,0)]}/>
                        <View>
                            <ScrollView horizontal={true}>
                                <HorizontalComponent title={"★ All"}/>
                                <HorizontalComponent title={"★  5"} bgColor={Colors.black} color={Colors.white}/>
                                <HorizontalComponent title={"★  4"}/>
                                <HorizontalComponent title={"★  3"}/>
                                <HorizontalComponent title={"★  2"}/>
                                <HorizontalComponent title={"★  1"}/>
                            </ScrollView>
                        </View>

                        {/* line */}
                        <View style={[borderWidth(0,0,0,1,0),styles.borderGrey,marginPosition(30,20,0,0)]}></View>

                        {/* Buttons */}
                        <View style={[marginPosition(25,20,0,0),styles.row,styles.spaceBetween]}>
                            <ButtonComponent titleName={"Reset"} customShadow={1} size={16} bgColor={Colors.lightGrey}
                             color={Colors.black} bold={"600"} style={[{width:widthValue(2.4)}]}/>
                            <ButtonComponent titleName={"Apply"} customShadow={1} size={16} bgColor={Colors.black}
                             bold={"600"} style={[{width:widthValue(2.4)}]} onPressEvent={hideModal}/>
                        </View>

                    </View>
                </View>
            </Modal>
            



        </ScreenViewComponent>
    )
}