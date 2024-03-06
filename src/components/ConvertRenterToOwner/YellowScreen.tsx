import { View, Text, Image, ActivityIndicator, StatusBar, Dimensions } from 'react-native'
import React, { useEffect } from 'react'

const YellowScreen = ({navigation}:any) => {
    const {height} = Dimensions.get('window')
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Tab')
        }, 3000);
    },[])
    return (
        <View className='flex-1 bg-[#FFB050]'>
            <StatusBar hidden={true} />
            <View className=' justify-center items-center' style={{height:height-100}}>
                <Image source={require('../../assets/logo.png')} className='w-[53px] h-[53px]' resizeMode='cover' />
                <Text className='pt-[16px] text-[18px] font-medium text-white '>Primecar</Text>
                <View className='pt-[10px]'>
                    <ActivityIndicator size={45} color="#ffffff" />
                </View>
            </View>
        </View>
    )
}

export default YellowScreen