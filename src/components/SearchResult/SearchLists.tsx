import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../../theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
interface locationPrpops {
    key?: number
}

const SearchLists: FC<locationPrpops> = () => {
    const navigation:any = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CarDetail')} >
            <View className='shadow-lg  bg-white px-[16px] py-[16px] border border-gray-100 rounded-md relative mb-[16px]' >
                <Image source={require('../../assets/carbox.png')} className='rounded-md object-cover w-full ' />
                <View className='absolute top-8 left-8'>
                    <View className='flex-row justify-between items-center'>
                        <View className='flex-row items-center bg-white rounded-full px-2 py-[5px]'>
                            <Ionicons name='location-sharp' size={14} />
                            <Text className='font-normal text-[12px] pl-1'>2,09 km</Text></View>
                    </View>
                </View>
                <View className='absolute top-8 right-8'>
                    <View className='flex-row justify-between items-center'>
                        <View className='flex-row items-center bg-white rounded-full px-2 py-[6px]'>
                            <Text className='font-normal text-[12px] pl-1'>Sans chauffeur</Text></View>
                    </View>
                </View>
                <View className='flex-row justify-between items-center pt-[16px]'>
                    <Text className='text-[16px] font-semibold text-[#444444]'>Renault twingo</Text>
                    <View className='flex-row items-center gap-1'>
                        <FontAwesome name="star" size={14} color={COLORS.primaryOrangeHex} />
                        <Text className='text-[12px] text-[#444444] font-normal'>4.5 </Text>
                        <Text className='text-[12px] text-[#98A2B3]  font-normal '>(12) </Text>
                    </View>
                </View>
                <View className='flex-row justify-between items-center pt-[16px]'>
                    <View>
                        <Text className='text-[14px] font-normal text-[#98A2B3]'>Grand Abidjan</Text>
                        <Text className='text-[14px] pt-[8px] font-normal text-[#FF8C00]'>33 000 FCFA <Text className='text-[#ACACAC] text-[12px] font-normal '>/jour</Text></Text>
                    </View>
                    <View>
                        <Text className='text-[14px] font-normal text-[#98A2B3]'>Hors Abidjan</Text>
                        <Text className='text-[14px] pt-[8px] font-normal text-[#FF8C00]'>33 000 FCFA <Text className='text-[#ACACAC] text-[12px] font-normal '>/jour</Text></Text>
                    </View>
                </View>
                <View className='flex-row  items-center pt-[16px] gap-1'>
                    <Ionicons name='location-sharp' size={15} color={'#FF8C00'} />
                    <Text className='text-[#444444] text-[13px] font-normal ' >Sococe 2 Plateaux Agban, K 64, Cocody</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchLists