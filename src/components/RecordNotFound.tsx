import { View, StyleSheet, Text, Image } from 'react-native'
import React, { FC } from 'react'

interface RecordProps{
    type ?:string
}

const RecordNotFound:FC<RecordProps> = ({ type }) => {
    return (
        <View className='bg-white flex-1 justify-center items-center  px-5 py-10'>
            <View style={styles.boxWrapper} className=' px-[16px] rounded-md flex-1 bg-white pt-[30px] pb-5 '>
                {type === "location" ?
                    <View>
                        <Image source={require('../assets/locatenot.png')} />
                        <View className='flex-col justify-center items-center pt-[22px]'>
                            <Text className='font-bold text-[22px] text-[#444444]'>Pas de locations</Text>
                            <Text className='font-normal pt-[12px] text-[14px] text-[#444444] leading-[20px] text-center'>Pour le dépôt d’un véhicule, merci de publier une annonce claire et précise pour augmenter vos chances de location. </Text>
                        </View>
                    </View>
                    :
                    <View>
                        <Image source={require('../assets/activenot.png')} />
                        <View className='flex-col justify-center items-center pt-[22px]'>
                            <Text className='font-bold text-[22px] text-[#444444]'>Pas d’activité</Text>
                            <Text className='font-normal pt-[12px] text-[14px] text-[#444444] leading-[20px] text-center'>Vous n’avez pas encore terminé une location. Merci de réserver le véhicule qui vous convient en faisant la demande au loueur. </Text>
                        </View>
                    </View>
                }
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


export default RecordNotFound