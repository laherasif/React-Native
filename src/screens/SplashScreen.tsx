import { Image, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}:any) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('onBoard')
        }, 3000);
    },[])
    return (
        <View className='flex-1 justify-center items-center'>
            <Image source={require('../assets/logo.png')} className='w-[100px] h-[100px]' resizeMode='cover' />
        </View>
    )
}

export default SplashScreen
