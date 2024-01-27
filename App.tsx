import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import OnboardScreen from './src/screens/OnboardScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BottomTabNavigator from './src/navigation/BottomNavigation';
import SearchScreen from './src/screens/SearchScreen';
import { Text, TouchableOpacity } from 'react-native';


const HeaderComponent = () => {
  const navigation = useNavigation(); // Access navigation using useNavigation
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text className=' text-[#FF8C00] font-semibold text-[14px]'>Fermer</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Splash" options={{ animation: 'slide_from_bottom', headerShown: false }} component={SplashScreen} />
          <Stack.Screen name="onBoard" options={{ animation: 'slide_from_bottom', headerShown: false }} component={OnboardScreen} />
          <Stack.Screen name="SignIn" options={{ animation: 'slide_from_bottom', headerShown: false }} component={SignInScreen} />
          <Stack.Screen name="SignUp" options={{ animation: 'slide_from_bottom', headerShown: false }} component={SignUpScreen} />
          <Stack.Screen name="Tab" options={{ animation: 'slide_from_bottom', headerShown:false }} component={BottomTabNavigator} />
          <Stack.Screen name="Search"
            options={{
              animation: 'slide_from_bottom',
              title: 'Adresse de location',
              headerLeft: () => null, // Function that returns null to hide the left arrow
              headerTitleAlign: 'center', // Aligns the title in the center
              headerRight: () => <HeaderComponent />, 
            }} component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
