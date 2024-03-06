import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HelpCenter = ({ navigation }: any) => {
    return (
        <View className='flex-1 bg-white px-[16px] py-[16px]'>
            <View className='bg-white rounded-md  mx-[16px] px-[16px] py-[16px]  my-[16px] shadow-md border border-[#E0E0E0]'>
                <View className='flex-col justify-between '>
                    <Text className='text-[14px]  font-normal'>Version</Text>
                    <Text className='text-[14px] pt-[16px] font-normal '>1.0.0</Text>
                    <Text className='text-[14px] pt-[16px] font-normal'>Conditions Generales</Text>
                    <Text className='text-[14px] pt-[16px] font-normal '>Politique de confidentialite</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} >
                        <Text className='text-[14px] pt-[16px] font-normal '>Nous Cantaracter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Text className='text-[14px] pt-[16px] font-normal '>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default HelpCenter