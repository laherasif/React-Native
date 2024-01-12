import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import OnboardScreen from './src/screens/OnboardScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" options={{ animation: 'slide_from_bottom' }} component={SplashScreen} />
          <Stack.Screen name="onBoard" options={{ animation: 'slide_from_bottom' }} component={OnboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
