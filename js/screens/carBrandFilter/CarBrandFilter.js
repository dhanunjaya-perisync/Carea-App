import { View, Text, TouchableOpacity, FlatList ,StatusBar} from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { useRoute } from '@react-navigation/native'
import { marginPosition,styles, padding } from "../../styles/Styles";
import { useSelector,useDispatch } from 'react-redux';
import { setProductInfo } from '../../redux/userReducer/productInfoReducer';
import { CarCardComponent } from '../../components/dashboardCom/CarCardComponent';
export const CarBrandFilter = ({navigation}) => {
    const route = useRoute()
    const dispatch = useDispatch()
    const { brandId } = route.params
    const Data = useSelector(state => state.user.productInfo.productInfo)

    let data = Data.filter(item => item.brandId == brandId)
    const likeToggle = (id) => {
        let modifiedData = Data.map(item => {
            if (item.id == id) {
                return { ...item, liked: !item.liked }
            }
            return item
        })
        dispatch(setProductInfo(modifiedData))
    }

    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <View style={[marginPosition(15, 0, 0, 0)]}>
                <FlatList
                    columnWrapperStyle={[styles.spaceBetweenVertical]}
                    numColumns={2}
                    data={data}
                    initialNumToRender={4}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("CarInfo", { product: item })
                        }}>
                            <CarCardComponent item={item} onPressLike={()=>likeToggle(item.id)} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScreenViewComponent>
    )
}
