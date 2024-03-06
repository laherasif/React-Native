import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

interface locationPrpops {
    key: number
}

const ActiveLists: FC<locationPrpops> = () => {

    return (
        <View >
            <View className='shadow-lg border mb-[16px] px-[16px] py-[16px] border-gray-100 rounded-md bg-white '  >
                <View className='flex-row  gap-[11px]'>
                    <View className=''>
                        <Image source={require('../../assets/car1.png')} className='w-[65px] h-[65px]' />
                    </View>
                    <View className='w-[76%]'>
                        <Text className='text-[16px] font-normal text-[#444444]'>Renault twingo</Text>
                        <View className='flex-row justify-between items-center gap-1  '>
                            <View className='flex-col justify-between  '>
                                <Text className='text-[12px]  font-normal text-[#98A2B3]'>Période</Text>
                                <Text className='text-[14px] py-2 font-normal text-[#ACACAC]'>28-30 janv.</Text>
                            </View>
                            <View>
                                <Text className='text-[12px]  font-normal text-[#98A2B3]'>Période</Text>
                                <Text className='text-[12px] py-2 font-normal text-[#98A2B3]'>50 000 FCFA</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default ActiveLists