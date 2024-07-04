
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Non Auth Screens
import SplashScreen from '../screens/splashScreen/SplashScreen';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import SwiperScreen from '../screens/swiperScreen/SwiperScreen';
import ChooseScreen from '../screens/chooseOption/ChooseScreen';
import { Signup } from '../screens/auth/signup/Signup';
import { Login } from '../screens/auth/login/Login';
import { Registration } from '../screens/registration/Registration';
import { CreateNewPin } from '../screens/createPinScreen/CreateNewPin';
import { FingerPrintScreen } from '../screens/fingerPrintScreen/FingerPrintScreen';
import { Temp } from '../screens/createPinScreen/Temp';
// Auth Screens
import { DashboardScreen } from '../screens/dashboard/Dashboard';
import { SearchScreen } from '../screens/searchScreen/SearchScreen';
import { Notifications } from '../screens/notifications/Notifications';
import { TabNavigation } from './TabNavigation';
import { Wishlist } from '../screens/wishlist/Wishlist';
import { SpecialOffers } from '../screens/specialOffers/SpecialOffers';
import { TopDeals } from '../screens/topDeals/TopDeals';
import { useSelector } from 'react-redux';
import { CarInfo } from '../screens/carInfo.js/CarInfo';
import { Reviews } from '../screens/reviewScreen/Reviews';
import { MakeAnOffer } from '../screens/makeOffer/MakeAnOffer';
import { OfferProcess } from '../screens/makeOffer/OfferProcess';
import { OfferAccept } from '../screens/makeOffer/OfferAccept';
import { OfferReject } from '../screens/makeOffer/OfferReject';
import { BmwStore } from '../screens/bmwStore/BmwStore';
import { Checkout } from '../screens/checkout/Checkout';
import { ChooseShipping } from '../screens/chooseShipping/ChooseShipping';
import { ShippingAddress } from '../screens/shippingAddress/ShippingAddress';
import { PaymentMethod } from '../screens/paymentMethod/PaymentMethod';
import { ReviewSummary } from '../screens/reviewSummary/ReviewSummary';
import { EnterYourPin } from '../screens/enterYourPin/EnterYourPin';
import { CarBrandFilter } from '../screens/carBrandFilter/CarBrandFilter';
const Stack = createNativeStackNavigator();

export const StackNavigation = ()=> {
    const { at } = useSelector(state => state.auth.user)
    const {isLoggedIn} = useSelector((state) => state.auth.isLoggedIn)
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible:false
            }}
            initialRouteName='SplashScreen'
        >
            { !isLoggedIn ? 
                <Stack.Group>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="SwiperScreen" component={SwiperScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="ChooseScreen" component={ChooseScreen} options={{title:""}} />
                    <Stack.Screen name="Signup" component={Signup} options={{title:""}}/>
                    <Stack.Screen name="Registration" component={Registration} options={{title:"Fill Your Profile"}} />
                    <Stack.Screen name="CreateNewPin" component={CreateNewPin} options={{title:"Create New PIN"}}/>
                    <Stack.Screen name="FingerPrintScreen" component={FingerPrintScreen} options={{title:"Set Your Fingerprint"}}/>
                    <Stack.Screen name="Login" component={Login} options={{title:null}} />
                    
                </Stack.Group> :
                <Stack.Group>
                <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
                <Stack.Screen name='Notifications' component={Notifications} />
                <Stack.Screen name='Wishlist' component={Wishlist} options={{title:"My Wishlist"}}/>
                <Stack.Screen name='SpecialOffers' component={SpecialOffers} options={{title:"Special Offers"}}/>
                <Stack.Screen name='TopDeals' component={TopDeals} options={{title:"Top Deals"}}/>
                <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerShown:false}}/>
                <Stack.Screen name='CarInfo' component={CarInfo} options={{title:""}}/>
                <Stack.Screen name='BmwStore' component={BmwStore} options={{title:"BMW Store"}}/>
                <Stack.Screen name='Reviews' component={Reviews} />
                <Stack.Screen name='MakeAnOffer' component={MakeAnOffer} options={{title:"Make an Offer"}}/>
                <Stack.Screen name='OfferProcess' component={OfferProcess} options={{title:"Make an Offer"}}/>
                <Stack.Screen name='OfferReject' component={OfferReject} options={{title:"Your Offer"}}/>
                <Stack.Screen name='OfferAccept' component={OfferAccept} options={{title:"Your Offer"}}/>
                <Stack.Screen name='Checkout' component={Checkout} options={{title:"Checkout"}}/>
                <Stack.Screen name='ChooseShipping' component={ChooseShipping} options={{title:"Choose Shipping"}}/>
                <Stack.Screen name='ShippingAddress' component={ShippingAddress} options={{title:"Shipping Address"}}/>
                <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{title:"Payment Methods"}}/>
                <Stack.Screen name='ReviewSummary' component={ReviewSummary} options={{title:"Review Summary"}}/>
                <Stack.Screen name='EnterYourPin' component={EnterYourPin} options={{title:"Enter Your Pin"}}/>
                <Stack.Screen name='CarBrandFilter' component={CarBrandFilter} options={{title:"My Brand"}}/>
        </Stack.Group>
            }
            {/* {at == "" ?
                // Non Auth
                <Stack.Group>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Group> :
                // Auth
                <Stack.Group>
                    <Stack.Screen name="Dashboard" component={DashboardScreen} />
                </Stack.Group>
            } */}
        </Stack.Navigator>
    );
}