import { View, FlatList } from 'react-native'
import React from 'react'
import { ScreenViewComponent,TextComponent } from '../../components'
import HorizantalView from '../../components/dashboardCom/HorizantalView'
import { marginPosition, paddingPoistion, styles } from '../../styles/Styles'
import { wishlistInfo } from '../../constants/carCardsInfo'
import { CarCardComponent } from '../../components/dashboardCom/CarCardComponent'
export const TopDeals = () => {
  return (
    <ScreenViewComponent style={[paddingPoistion(0,20,0,20)]}>
      <View style={[marginPosition(15,0,15,0)]}>
          <HorizantalView/>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={[styles.spaceBetweenVertical]}
        data={wishlistInfo}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=>(
          
            <View>
              {item.liked? null :
              (
                <CarCardComponent item={item}/>
              )
              }
              
            </View>
        )} 
      />
      

    </ScreenViewComponent>
  )
}
