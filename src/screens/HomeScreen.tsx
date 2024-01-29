import { Dimensions, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../theme/theme'
import { DrawerActions } from '@react-navigation/native'

const {height} = Dimensions.get('window')

const HomeScreen = ({navigation}:any) => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [showDate, setShowDate] = useState<boolean>(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View className='flex-1 bg-white'>
           {/* {showDate  && <DynamicPopup modalVisible={showDate} data={<SelectDate/>} setModalVisible={()=> setShowDate(false)} type /> } */}
            <View style={styles.mapView} >
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <View className='absolute w-full  top-5 '>
                    <View className=' flex-row mx-[16px] justify-between items-center '>
                        <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.openDrawer())}} className='w-[44px] h-[44px] bg-white rounded-full items-center justify-center'>
                            <Feather name="menu" size={24} color={COLORS.primaryOrangeHex} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Search') }} className='bg-white h-[44px] px-5 items-center w-[72%] flex-row first-line: rounded-full  '>
                            <Ionicons name="location-sharp" size={18} color={COLORS.primaryOrangeHex} />
                            <Text className='text-[14px] pl-2 font-medium text-[#444444]'>Position actuelle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Notification')}} className='w-[44px] h-[44px] bg-white rounded-full items-center justify-center'>
                        <MaterialCommunityIcons name="bell" size={24} color={COLORS.primaryOrangeHex} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex-1  absolute w-full  ' style={styles.topHeight}>
                    <View className=' mx-[16px] bg-white px-[16px]  py-[16px] ' style={styles.boxWrapper}>
                        <Text className='text-[14px] font-medium text-[#000000]'>Type de véhicule</Text>
                        <View className='flex-row  justify-between items-center pt-2'>
                            <View className='flex-row w-auto py-[8px] px-[31px] h-[38px] items-center border border-[#E0E0E0]'>
                                <Image source={require('../assets/car.png')} />
                                <Text className='text-[14px] pl-3 font-medium text-[#444444]'>Voiture</Text>
                            </View>
                            <View className='flex-row w-auto py-[8px] px-[31px] h-[38px]  items-center border border-[#E0E0E0]'>
                                <Image source={require('../assets/vain.png')} />
                                <Text className='text-[14px] pl-3 font-medium text-[#444444]'>Utilitaire</Text>
                            </View>
                        </View>
                        {/* section 2 */}
                        <View className='flex-row gap-3 justify-between items-center pt-[16px]'>
                            <View className='flex-row w-auto py-[8px]  h-[38px]  '>
                                <Text className='text-[14px] text-start font-medium text-[#000000]'>Déplacement</Text>
                            </View>
                            <View className='flex-row w-auto py-[8px] pl-3 h-[38px] items-center justify-between  border border-[#E0E0E0]'>
                                <Text className='text-[14px] pr-2 font-medium text-[#444444]'>Grand Abidjan</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                        {/* Section 3  */}
                        <View className='pt-[16px]'>
                            <Text className='text-[14px] font-medium text-[#000000]'>Type de véhicule</Text>
                            <View className='border flex-row items-center justify-between border-[#E0E0E0] px-2 mt-[7px]'>
                                <View className='flex-col '>
                                    <Text className='text-[11px] font-normal text-[#98A2B3] pt-[2px]'>
                                        Date et heure de début
                                    </Text>
                                    <Text className='text-[14px] font-medium text-[#444444] py-[7px]'>
                                        Sam, 13 Mai - 08 : 00
                                    </Text>
                                </View>
                                <View className='flex-col '>
                                    <Text className='text-[11px] font-normal text-[#98A2B3] pt-[2px]'>
                                        Date et heure de fin
                                    </Text>
                                    <Text className='text-[14px] font-medium text-[#444444] py-[7px]'>
                                        Mar, 13 Juil. - 08 : 00
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* sction 4 */}
                        <View className='pt-[16px]'>
                            <View className='flex-col '>
                                <Text className='text-[14px] font-medium text-[#444444] '>
                                    Durée de la location
                                </Text>
                                <Text className='text-[14px] font-normal text-[#98A2B3] '>
                                    59 jours
                                </Text>
                            </View>
                        </View>
                        {/* Section 5 */}
                        <View className='pt-[16px]'>
                            <TouchableOpacity onPress={() => { navigation.navigate('SearchResult')}} className='bg-[#FF8C00] justify-center items-center h-[40px]'>
                                <Text className='text-[14px] font-medium text-white '>
                                    Trouver un véhicule
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mapView: {
        width: '100%',
        aspectRatio: 20 / 20,
    },
    boxWrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 6,
        borderRadius: 8,
    },
    topHeight:{
        top : height - 500
    }
})
export default HomeScreen
