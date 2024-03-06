import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

interface locationPrpops {
    key: number
}

const LocationLists: FC<locationPrpops> = () => {
  
    return (
        <TouchableOpacity onPress={() => { }} >
            <View className='shadow-lg border mb-[16px] px-[16px] py-[16px] border-gray-100 rounded-md bg-white' >
                <View className='flex-row justify-between items-center'>
                    <View className='flex-row gap-[11px]'>
                        <Image source={require('../../assets/car1.png')} className='w-[65px] h-[65px]' />
                        <View className='flex-col justify-between'>
                            <Text className='text-[16px] font-normal text-[#444444]'>Renault twingo</Text>
                            <Text className='text-[12px]  font-normal text-[#98A2B3]'>Période</Text>
                            <Text className='text-[14px]  font-normal text-[#ACACAC]'>28-30 janv.</Text>
                        </View>
                    </View>
                    <View className='flex-col justify-between gap-1 items-end'>
                        <View className='border border-[#FFECD6] rounded-full px-[10px] py-[3px] bg-[#FFECD6]'>
                            <Text className='text-[12px] font-normal text-[#FF8C00]'>En cours</Text>
                        </View>
                        <Text className='text-[12px]  font-normal text-[#98A2B3]'>Période</Text>
                        <Text className='text-[14px]  font-semibold text-[#FF8C00]'>50 000 FCFA</Text>
                    </View>
                </View>
                <View className='flex-row justify-end pt-[10px]'>
                    <TouchableOpacity className='px-[14px] py-[3px] bg-[#FF8C00]  rounded'>
                        <Text className='text-white font-normal text-[11px]'>Prolonger</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LocationLists