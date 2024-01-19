
import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme'
import Icon from 'react-native-vector-icons/FontAwesome';
const SignInScreen = ({ navigation }: any) => {
    return (
        <View className='bg-white flex-1 justify-center  px-5 pt-32 pb-28'>
            <StatusBar backgroundColor={COLORS.primaryWhiteHex} barStyle={'dark-content'} />
            <View style={styles.boxWrapper} className=' px-[16px] rounded-md flex-1 bg-white pt-[30px] '>
                <View className=' justify-center items-center'>
                    <Image source={require('../assets/logo.png')} className='w-[53px] h-[53px]' resizeMode='cover' />
                    <Text className='pt-[49px] pb-[20px] font-bold text-[22px] text-[#FF8C00]'>Connexion</Text>
                    <View className='w-full'>
                        <View className=''>
                            <Text className=' font-normal text-[14px] text-[#98A2B3] pb-2'>Email</Text>
                            <TextInput placeholder='Email*' className='border rounded-md h-[40px] px-2' />
                        </View>
                        <View className='pt-3'>
                            <Text className=' font-normal text-[14px] text-[#98A2B3] pb-2'>Mot de passe</Text>
                            <View className='flex-row items-center border rounded-md h-[40px] justify-between px-2'>
                                <TextInput placeholder='Email*' />
                                <Icon name="eye" size={24} color="#ACACAC" />
                            </View>
                        </View>
                        <View className='items-end justify-end pt-[10px]'>
                            <Text className='font-medium text-[11px] text-[#FF8C00]'>Mot de passe oublié ?</Text>
                        </View>
                        <View className='pt-[16px]'>
                            <TouchableOpacity onPress={() => { }} className='bg-[#FF8C00] rounded-md w-full text-center justify-center h-[40px]'>
                                <Text className='font-semibold text-[14px] text-center items-center text-white '>Se connecter</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='pt-[16px] text-center justify-center items-center '>
                            <Text className=' font-normal text-[14px]  text-[#98A2B3] pb-2'>ou</Text>
                        </View>
                        <View className='pt-[16px]'>
                            <TouchableOpacity onPress={() => { }} className='bg-transparent rounded-md w-full text-center items-center flex-row px-3  border h-[42px]'>
                                <Image source={require('../assets/google.png')} />
                                <Text className='font-semibold items-center max-w-[200px] mx-auto text-center justify-center text-[14px] text-[#444444] '>Continuer avec Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='pt-[16px] text-center  justify-center items-center flex-row  '>
                            <Text className='font-normal text-[11px]  items-center text-[#444444]'>Pas de compte?</Text>
                            <TouchableOpacity className='pl-1' onPress={() => { navigation.navigate('SignUp') }} >
                                <Text className='font-normal text-[11px]  text-[#0066FF] '>S’inscrire</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxWrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 6,
    }
})

export default SignInScreen