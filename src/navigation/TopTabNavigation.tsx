import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InProgressScreen from '../screens/InProgressScreen';
import CompletedScreen from '../screens/CompletedScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, textAlign: 'center', justifyContent:'center' , alignItems:'center', fontWeight:'600'  },
        tabBarStyle:{height:70, paddingTop:20},
        tabBarActiveTintColor:"#FF8C00",
        tabBarInactiveTintColor:"#969798"

      }}
    >
      <Tab.Screen name="En cours"
        options={{
          tabBarIndicatorStyle: {
            borderBottomWidth: 2, // Set the border bottom width
            borderBottomColor: '#FF8C00', // Set the border bottom color
          },
        }}
        component={InProgressScreen} />
      <Tab.Screen name="Terminées"
        options={{
          tabBarIndicatorStyle: {
            borderBottomWidth: 2, // Set the border bottom width
            borderBottomColor: '#FF8C00', // Set the border bottom color
            marginRight: 20, // Add right padding
          },
        }}
        component={CompletedScreen} />
    </Tab.Navigator>
  );
}




export default TopTabNavigation