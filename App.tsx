import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import { CustomHeader, CustomRightHeader, CustomSearchHeader, CustomSearchHeaderLeft, CustomSearchHeaderRight, HeaderComponent } from './src/hooks/CustomeHooks';
import { Text } from 'react-native-paper';
import CarDetailScreen from './src/screens/CarDetailScreen';


const App = () => {
  const [changeHeader, setChangeHeader] = useState(false);
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
          <Stack.Screen name="Search"
            options={{
              title: 'Adresse de location',
              headerLeft: () => null,
              headerTitleAlign: 'center',
              headerRight: () => <HeaderComponent type="search" />,
            }} component={SearchScreen} />
          <Stack.Screen name="Notification"
            options={{
              title: 'Notification',
              headerTitleAlign: 'center',
            }} component={NotificationScreen} />
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
              title:"Mazda CX-5",
              headerTitleAlign: 'center',
              headerRight: () => <CustomRightHeader />
            }} component={CarDetailScreen} />

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
