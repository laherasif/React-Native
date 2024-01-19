import { Image, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }: any) => {

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLanuchedFirst');
            if (value === null) {
                await AsyncStorage.setItem('isLanuchedFirst', 'true');
                setTimeout(() => {
                    navigation.navigate('onBoard')
                }, 3000);
            }
            else {
                setTimeout(() => {
                    navigation.navigate('SignIn')
                }, 3000);

            }
        } catch (e) {
            // error reading value
        }
    };
    useEffect(() => {
        getData()
       
    }, [])
    return (
        <View className='flex-1 justify-center items-center'>
            <Image source={require('../assets/logo.png')} className='w-[100px] h-[100px]' resizeMode='cover' />
        </View>
    )
}

export default SplashScreen
