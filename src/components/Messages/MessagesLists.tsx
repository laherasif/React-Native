import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
interface locationPrpops {
    key: number
    navigation:any
}

const MessagesLists: FC<locationPrpops> = ({navigation}) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('ChatMessage')}} className='shadow-lg border mb-[16px] px-[16px] py-[16px] border-gray-100 rounded-md bg-white'  >
            <View className=' justify-between  flex-row'>
                <View className='flex-row  gap-[11px]'>
                    <View className='relative'>
                        <Image source={require('../../assets/car1.png')} className='w-[65px] h-[65px] rounded-full' />
                        <View className='border border-white rounded w-[10px] h-[10px] bg-green-500 absolute right-2 bottom-0'></View>
                    </View>

                    <View >
                        <Text className='text-[16px] font-normal text-[#444444]'>Renault twingo</Text>
                        <Text className='text-[12px] pt-3  font-normal text-[#98A2B3]'>Période</Text>

                    </View>
                </View>
                <View className='pt-2'>
                    <Text className='text-[14px]  font-normal text-[#98A2B3]'>il y a 34 jours</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MessagesLists