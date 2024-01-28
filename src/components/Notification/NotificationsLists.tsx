import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

interface locationPrpops {
    key: number
}

const NotificationsLists: FC<locationPrpops> = () => {
    return (
        <View >
            <View className='shadow-md p-[16px] mb-[16px] '  >
                <View className='flex-row items-center gap-[11px]'>
                    <View className=''>
                        <Image source={require('../../assets/car1.png')} className='w-[65px] h-[65px] rounded-full' />
                    </View>
                    <View >
                        <Text className='text-[16px] font-normal text-[#444444]'>Renault twingo</Text>
                        <Text className='text-[12px]  font-normal text-[#98A2B3]'>Période</Text>
                       
                    </View>
                </View>

            </View>
        </View>
    )
}

export default NotificationsLists