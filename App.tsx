import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import OnboardScreen from './src/screens/OnboardScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BottomTabNavigator from './src/navigation/BottomNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false , }}>
          <Stack.Screen name="Splash" options={{ animation: 'slide_from_bottom' }} component={SplashScreen} />
          <Stack.Screen name="onBoard" options={{ animation: 'slide_from_bottom' }} component={OnboardScreen} />
          <Stack.Screen name="SignIn" options={{ animation: 'slide_from_bottom' }} component={SignInScreen} />
          <Stack.Screen name="SignUp" options={{ animation: 'slide_from_bottom' }} component={SignUpScreen} />
          <Stack.Screen name="Tab" options={{ animation: 'slide_from_bottom' }} component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
