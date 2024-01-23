import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import ActivateScreen from '../screens/ActivateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { COLORS } from '../theme/theme';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                headerShown: false,
                tabBarHideOnKeyboard: false,
                tabBarStyle: styles?.tabBarStyle,
                tabBarActiveTintColor: COLORS.primaryOrangeHex,
                tabBarInactiveTintColor: COLORS.primaryLightGreyHex,
                // tabBarLabelStyle: {
                //     color: route.name === 'Home' ? (route.focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex) : COLORS.primaryLightGreyHex,
                // },
            })}>
            <Tab.Screen
                name="Recherche"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text className='font-normal text-[12px]' style={{ color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, marginBottom: 6 }}>
                            Recherche
                        </Text>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        <Fontisto
                            name="search"
                            size={24}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Locations"
                component={LocationScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text className='font-normal text-[12px]' style={{ color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, marginBottom: 6 }}>
                            Locations
                        </Text>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            name="checkcircle"
                            size={24}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Activité"
                component={ActivateScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text className='font-normal text-[12px]' style={{ color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, marginBottom: 6 }}>
                            Activité
                        </Text>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name="file-clock-outline"
                            size={24}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Compte"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text className='font-normal text-[12px]' style={{ color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, marginBottom: 6 }}>
                            Compte
                        </Text>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome
                            name="user-circle"
                            size={24}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: COLORS.primaryWhiteHex,
        elevation: 0,
        borderTopColor: '#E0E0E0',
        height: 80,
        borderTopWidth: 1,
    },
    blurViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default BottomTabNavigator
