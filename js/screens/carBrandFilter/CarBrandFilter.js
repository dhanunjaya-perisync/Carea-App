import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../components'
import { useRoute } from '@react-navigation/native'
import { marginPosition, paddingPoistion, borderWidth, radius, styles, padding, gap, margin, widthValue } from "../../styles/Styles";
import { useSelector } from 'react-redux';
import { CarCardComponent } from '../../components/dashboardCom/CarCardComponent';
export const CarBrandFilter = () => {
    const route = useRoute()
    const { brandId } = route.params
    const Data = useSelector(state => state.user.productInfo.productInfo)

    let data = Data.filter(item => item.brandId == brandId)

    return (
        <ScreenViewComponent style={[padding(0, 0, 20)]}>
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
                            <CarCardComponent item={item} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScreenViewComponent>
    )
}
