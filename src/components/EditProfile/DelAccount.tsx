import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DelAccount = ({ setDelAccount }: any) => {
    return (
        <View className=' bg-white  rounded-md py-[20px] flex-col justify-center items-center px-[16px]'>
            <Text className='text-[#444444] font-bold text-[16px]'>Supprimer mon compte</Text>
            <Text className='text-[#444444] font-normal text-[14px] pt-[14px]' >Voulez vous vraiment supprimer votre compte ?</Text>
            <View className='flex-row justify-between items-center pt-[20px] gap-5'>
                <TouchableOpacity onPress={() => setDelAccount(false)} className='bg-[#EEEEEE] rounded-md w-[40%] h-[40px] justify-center items-center  '>
                    <Text className='text-[#ACACAC] font-semibold text-[14px]'>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{}} className='bg-[#FF8C00] rounded-md w-[40%] h-[40px] justify-center items-center '>
                    <Text className='text-white font-semibold text-[14px]'>Confirmer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DelAccount