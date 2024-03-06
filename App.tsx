import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import OnboardScreen from './src/screens/OnboardScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { StyleSheet } from 'react-native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import SearchScreen from './src/screens/SearchScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';

import FilterScreen from './src/screens/FilterScreen';
import UtilitiesScreen from './src/screens/UtilitiesScreen';
import { CustomHeader, CustomMessageCenter, CustomMessageRight, CustomRightHeader, CustomRightHeaderShare, CustomSearchHeader, CustomSearchHeaderLeft, CustomSearchHeaderRight, HeaderComponent } from './src/hooks/CustomeHooks';
import { Text } from 'react-native-paper';
import CarDetailScreen from './src/screens/CarDetailScreen';
import OwnerProfileScreen from './src/screens/OwnerProfileScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';
import EditInfo from './src/components/EditProfile/EditInfo';
import EditPersonalInfo from './src/components/EditProfile/EditPersonalInfo';
import EditPassword from './src/components/EditProfile/EditPassword';
import EditPhone from './src/components/EditProfile/EditPhone';
import EditAddress from './src/components/EditProfile/EditAddress';
import EditEmail from './src/components/EditProfile/EditEmail';
import PaymentHistory from './src/screens/PaymentHistory';
import RequestHistory from './src/screens/RequestHistory';
import HelpCenter from './src/components/helpCenter/HelpCenter';
import ContactUs from './src/components/helpCenter/ContactUs';
import MessagesScreen from './src/screens/MessagesScreen';
import ChatMessages from './src/components/Messages/ChatMessages';
import YellowScreen from './src/components/ConvertRenterToOwner/YellowScreen';


const App = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [share, setShare] = useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Splash"
            options={{ headerShown: false }} component={SplashScreen} />
          <Stack.Screen name="onBoard"
            options={{ headerShown: false }} component={OnboardScreen} />
          <Stack.Screen name="SignIn"
            options={{ headerShown: false }} component={SignInScreen} />
          <Stack.Screen name="SignUp"
            options={{ headerShown: false }} component={SignUpScreen} />
          <Stack.Screen name="Tab"
            options={{ headerShown: false }} component={DrawerNavigation} />

          {/* Profile Screens */}
          <Stack.Screen name="ProfileInfo"
            options={{
              title: 'Profil',
              headerTitleAlign: 'center',
            }}
            component={EditInfo} />
          <Stack.Screen name="PersonalInfo"
            options={{
              title: 'Mettre à jour votre nom',
              headerTitleAlign: 'center',
            }}
            component={EditPersonalInfo} />
          <Stack.Screen name="EditPassword"
            options={{
              title: 'Modifier le mot de passe',
              headerTitleAlign: 'center',
            }}
            component={EditPassword} />
          <Stack.Screen name="EditPhone"
            options={{
              title: 'Votre numéro de téléphone',
              headerTitleAlign: 'center',
            }}
            component={EditPhone} />
          <Stack.Screen name="EditAddress"
            options={{
              title: 'Votre numéro de téléphone',
              headerTitleAlign: 'center',
            }}
            component={EditAddress} />
          <Stack.Screen name="EditEmail"
            options={{
              title: 'Votre adresse email',
              headerTitleAlign: 'center',
            }}
            component={EditEmail} />

          <Stack.Screen name="PaymentHistory"
            options={{
              title: 'Historique des paiements',
              headerTitleAlign: 'center',
            }}
            component={PaymentHistory} />

          <Stack.Screen name="RequestHistory"
            options={{
              title: 'Historique des demandes',
              headerTitleAlign: 'center',
            }}
            component={RequestHistory} />

          <Stack.Screen name="Helpcanter"
            options={{
              title: 'Centre d’aide',
              headerTitleAlign: 'center',
            }}
            component={HelpCenter} />

          <Stack.Screen name="ContactUs"
            options={{
              title: 'Centre d’aide',
              headerTitleAlign: 'center',
            }}
            component={ContactUs} />

          {/* End Profile Screens */}

          {/* Search Screens */}
          <Stack.Screen name="Search"
            options={{
              title: 'Adresse de location',
              headerLeft: () => null,
              headerTitleAlign: 'center',
              headerRight: () => <HeaderComponent type="search" />,
            }} component={SearchScreen} />
          {/* End Search Screens */}

          {/* Notification Screens */}
          <Stack.Screen name="Notification"
            options={{
              title: 'Notification',
              headerTitleAlign: 'center',
            }} component={NotificationScreen} />
          {/*End Notification Screens */}

          <Stack.Screen name="Message"
            options={{
              title: 'Message',
              headerTitleAlign: 'center',
            }} component={MessagesScreen} />
          <Stack.Screen name="ChatMessage"
            options={{
              headerTitle: () => (
                <CustomMessageCenter />
              ),
              headerRight:() => <CustomMessageRight/>
            }} component={ChatMessages} />

          <Stack.Screen name="SearchResult"
            options={{
              headerTitle: () => (
                <CustomHeader
                  startDate="28 Janv. 08:00"
                  endDate="31 Janv. 22:30"
                />
              ),
              headerTitleAlign: 'center',
              headerRight: () => <CustomRightHeader />
            }} component={SearchResultScreen} />

          <Stack.Screen name="CarDetail"
            options={{
              title: "Mazda CX-5",
              headerTitleAlign: 'center',
              headerRight: () => <CustomRightHeaderShare setShare={setShare} />
            }} component={CarDetailScreen} />

          <Stack.Screen name="OwnerInfo"
            options={{
              title: "Profil du Propriétaire",
              headerTitleAlign: 'center',
            }} component={OwnerProfileScreen} />

          <Stack.Screen name="Reviews"
            options={{
              title: "Les avis sur ce proprietaire",
              headerTitleAlign: 'center',
            }} component={ReviewsScreen} />

          <Stack.Screen name="Filter"
            options={{
              title: "Filter",
              headerTitleAlign: 'center',
              headerRight: () => <HeaderComponent type="filter" />
            }} component={FilterScreen} />

          <Stack.Screen name="Marque"
            options={{
              animation: "slide_from_bottom",
              headerBackVisible: false,
              headerLeft: () => (
                <CustomSearchHeaderLeft
                  changeHeader={changeHeader}
                  setChangeHeader={setChangeHeader}
                />
              ),
              headerTitle: () => (
                changeHeader ? <CustomSearchHeader
                /> : <Text className='pl-5 text-[14px] font-medium text-black'>Marque du vehicule</Text>
              ),
              headerRight: () => changeHeader ? null : <CustomSearchHeaderRight setChangeHeader={setChangeHeader} />
            }} component={UtilitiesScreen} />

            {/* Yellow Screen */}
            <Stack.Screen name="YellowScreen"
            options={{ headerShown: false }} component={YellowScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  bars: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 8,
    elevation: 6,
    marginLeft: 16,
  }
})

export default App
