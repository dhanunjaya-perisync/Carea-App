import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { carImageOne,carImageSix,carImageFour,carImageThree,carImageTwo } from '../../constants/imageLinks'
import { CarSwiperComponent } from '../../components/dashboardCom/CarSwiperComponent'
import { ScreenViewComponent } from '../../components'
import { padding, paddingPoistion } from '../../styles/Styles'
export const SpecialOffers = () => {
  return (
    <ScreenViewComponent style={[paddingPoistion(10,20,0,20)]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <CarSwiperComponent imageUri={carImageOne} 
            percentage={"20%"} 
            deals={"Week Deals!"}
            description={"Get a new car discount,\n only valid this week"}
            contain={false}
            bottom={25}
            marginBottom={20}
     />
     <CarSwiperComponent imageUri={carImageThree} 
            percentage={"10%"} 
            deals={"Top Deals!"}
            description={"Get a new car discount,\n only valid this week"}
            contain={true}
            bottom={25}
            marginBottom={20}
     />
     <CarSwiperComponent imageUri={carImageTwo} 
            percentage={"15%"} 
            deals={"New Arrivals!"}
            description={"Get a new car discount,\n only valid this week"}
            contain={true}
            bottom={25}
            marginBottom={20}
     />
     <CarSwiperComponent imageUri={carImageFour} 
            percentage={"20%"} 
            deals={"Black Friday!"}
            description={"Get a new car discount,\n only valid this week"}
            contain={true}
            bottom={25}
            marginBottom={20}
    />
      </ScrollView>
    </ScreenViewComponent>
  )
}