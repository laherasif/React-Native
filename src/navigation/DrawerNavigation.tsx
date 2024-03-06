import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../theme/theme";
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import BottomTabNavigator from "./BottomNavigation";
import NotificationScreen from "../screens/NotificationScreen";
import { Switch } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const CustomDrawerContent = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* Your custom content */}
                <Text>Custom Drawer Content</Text>
            </View>
        );
    };




    const LeftHeader = () => {
        const navigation = useNavigation();
        return (
            <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }}
                style={styles.bars} className='w-[44px] h-[44px] bg-white  rounded-full items-center justify-center'>
                <Feather name="menu" size={24} color={COLORS.primaryOrangeHex} />
            </TouchableOpacity>
        )
    };


    const LeftHeaderMessages = () => {
        const navigation = useNavigation();
        return (
            <TouchableOpacity onPress={() => { navigation.goBack() }}
                style={styles.bars} className='  items-center justify-center'>
                <AntDesign name="arrowleft" size={24} color={COLORS.primaryBlackHex} />
            </TouchableOpacity>
        )
    };
    return (
        <Drawer.Navigator

            drawerContent={
                (props) => {
                    return (
                        <SafeAreaView>
                            <View className="h-[240px] bg-[#FFB050] px-[16px] pt-[30px] rounded-tr-3xl">
                                <Image
                                    source={require('../assets/avatar.png')}
                                    style={{
                                        height: 90,
                                        width: 90,
                                        borderRadius: 50,
                                        marginBottom: 12,
                                    }}
                                />
                                <Text className="text-[24px] font-medium text-[#ffffff]">Isabella Joanna</Text>
                                <Text className="text-[12px] font-medium text-white">jacob.jones@gmail.com</Text>
                                <View className="flex-row justify-between items-center pt-[16px]">
                                    <Text className="font-semibold text-[14px] text-white">Passer en mode propriétaire</Text>
                                    <Switch
                                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                            <DrawerItemList {...props} />
                        </SafeAreaView>
                    )
                }
            }
            screenOptions={{
                drawerStyle: {
                    backgroundColor: COLORS.primaryWhiteHex,
                    borderTopRightRadius: 30,
                    width: 300,
                },
                headerStyle: {
                    backgroundColor: COLORS.primaryWhiteHex,
                },
                headerShown: false,
                headerTintColor: COLORS.primaryBlackHex,
                drawerLabelStyle: {
                    color: COLORS.primaryBlackHex,
                    fontSize: 14,
                    marginLeft: -10,
                },
                drawerActiveBackgroundColor: "white",
                drawerInactiveBackgroundColor: 'white',
                // drawerItemStyle: {
                //     shadowColor: "#000",
                //     shadowOffset: {
                //         width: 0,
                //         height: 3,
                //     },
                //     shadowOpacity: 0.27,
                //     shadowRadius: 8,
                //     elevation: 6,
                // }
            }}
        >
            <Drawer.Screen
                name="Recherche"
                options={{
                    drawerItemStyle: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 8,
                        elevation: 6,
                    },
                    headerShadowVisible: false,
                    drawerIcon: () => (
                        <View className=" w-[25px] h-[25px] bg-[#FFF6ED] rounded-full justify-center items-center">
                            <Fontisto name="search" size={13} color={COLORS.primaryOrangeHex} />
                        </View>
                    ),
                }}
                component={BottomTabNavigator}
            />
            <Drawer.Screen
                name="Compte"
                options={{
                    drawerLabel: "Compte",
                    title: "Compte",
                    headerTitleAlign: 'center',
                    drawerItemStyle: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 8,
                        elevation: 6,
                    },
                    headerStyle: {
                        borderBottomWidth: 1
                    },
                    headerShown: true,
                    headerLeft: () => <LeftHeader />,
                    drawerIcon: () => (
                        <View className=" w-[25px] h-[25px] bg-[#FFF6ED] rounded-full justify-center items-center">
                            <FontAwesome
                                name="user-circle"
                                size={13}
                                color={COLORS.primaryOrangeHex}
                            />
                        </View>
                    ),
                }}
                component={ProfileScreen}
            />

            <Drawer.Screen
                name="Notifications"
                options={{
                    drawerLabel: "Notification",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        borderBottomWidth: 1
                    },
                    headerLeft: () => <LeftHeader />,
                    headerShown: true,
                    title: "Notification",
                    drawerItemStyle: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 8,
                        elevation: 6,
                    },
                    drawerIcon: () => (
                        <View className=" w-[25px] h-[25px] bg-[#FFF6ED] rounded-full justify-center items-center">
                            <MaterialCommunityIcons name="bell" size={13} color={COLORS.primaryOrangeHex} />
                        </View>
                    ),
                }}
                component={NotificationScreen}
            />

            <Drawer.Screen
                name="Messages"
                options={{
                    headerShown: true,
                    drawerLabel: "Messages",
                    title: "Messages",
                    headerTitleAlign: 'center',
                    headerLeft: () => <LeftHeaderMessages />,
                    drawerIcon: () => (
                        <View className=" w-[25px] h-[25px] bg-[#FFF6ED] rounded-full justify-center items-center">
                            <FontAwesome5 name="comment-dots" size={13} color={COLORS.primaryOrangeHex} />
                        </View>
                    ),
                }}
                component={MessagesScreen}
            />
            <Drawer.Screen
                name="Mesdemandes"
                options={{
                    drawerLabel: "Mes demandes",
                    title: "Mes demandes",
                    headerShadowVisible: false,
                    drawerItemStyle: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 8,
                        elevation: 6,
                    },
                    drawerIcon: () => (
                        <View className=" w-[25px] h-[25px] bg-[#FFF6ED] rounded-full justify-center items-center">
                            <MaterialCommunityIcons
                                name="file-clock-outline"
                                size={13}
                                color={COLORS.primaryOrangeHex}
                            />
                        </View>
                    ),
                }}
                component={MessagesScreen}
            />
            <Drawer.Screen
                name="Historique"
                options={{
                    drawerLabel: "Historique de paiement",
                    title: "Historique de paiement",
                    headerShadowVisible: false,
                    drawerItemStyle: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 8,
                        elevation: 6,
                    },
                    drawerIcon: () => (
                        <View className=" w-[25px] h-[25px] bg-[#FFF6ED] rounded-full justify-center items-center">
                            <AntDesign name="creditcard" size={13} color={COLORS.primaryOrangeHex} />
                        </View>
                    ),
                }}
                component={NotificationScreen}
            />
            <Drawer.Screen
                name="CustomContent"
                options={{ drawerLabel: () => null, title: "" }}
                component={CustomDrawerContent} // Create a component to render your custom content
            />
        </Drawer.Navigator>
    );
};

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

export default DrawerNavigation;