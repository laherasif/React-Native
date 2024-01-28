import 'react-native-gesture-handler';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import OnboardScreen from './src/screens/OnboardScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import DrawerNavigation from './src/navigation/DrawerNavigation';
import SearchScreen from './src/screens/SearchScreen';
import { COLORS } from './src/theme/theme';
import NotificationScreen from './src/screens/NotificationScreen';

const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text className=' text-[#FF8C00] font-semibold text-[14px]'>Fermer</Text>
    </TouchableOpacity>
  );
};
const LeftHeader = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} style={styles.bars} className='w-[44px] h-[44px] bg-white rounded-full items-center justify-center'>
      <Feather name="menu" size={24} color={COLORS.primaryOrangeHex} />
    </TouchableOpacity>
  )
};

const App = () => {
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
              headerRight: () => <HeaderComponent />,
            }} component={SearchScreen} />
          <Stack.Screen name="Notification"
            options={{
              title: 'Notification',
              // headerLeft: () =>  <LeftHeader /> ,
              headerTitleAlign: 'center',
            }} component={NotificationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <DrawerNavigation /> */}
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
