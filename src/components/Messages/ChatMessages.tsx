import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '../../theme/theme'
const ChatMessages = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView className='bg-white px-[16px]  pt-[16px] '
            contentContainerStyle={{
                flexGrow: 1,
              }}
                showsVerticalScrollIndicator={false}
            >
                <View className=''>  
                  <View className='flex-row items-center gap-3'>
                    <View className='border border-[#AEB2C0] w-[35%] h-0'></View>
                    <Text className='text-[11px] font-normal text-[#444444]'>9 Août 2022</Text>
                    <View className='border border-[#AEB2C0] w-[35%] h-0'></View>
                  </View>

                    <View className=' justify-end items-end pt-5'>
                        <View>
                            <View className='bg-[#FF8C00] rounded-full w-[40%]  px-2 py-2'>
                                <Text className='text-white'>ChatMessages</Text>
                            </View>
                            <Text className='text-[#ACACAC] text-right pl-2 pt-2'>Envoyé</Text>
                        </View>
                        <View>
                            <View className='bg-[#FF8C00] rounded-xl w-[80%] mt-7 px-2 py-2'>
                                <Text className='text-white'>I am doing good? I am doing
                                    good? I am doing good? compjj
                                    I am doing good,  good? I am doing </Text>
                            </View>
                            <Text className='text-[#ACACAC] text-right pl-2 pt-2'>Envoyé</Text>
                        </View>
                    </View>
                    <View className=' justify-start items-start mt-8'>
                        <View>
                            <View className='bg-[#ECECEC] rounded-full w-[40%]  px-2 py-2'>
                                <Text className='text-black px-2'>ChatMessages</Text>
                            </View>
                            <Text className='text-[#ACACAC] text-left pl-2 pt-2'>Envoyé</Text>
                        </View>
                        <View>
                            <View className='bg-[#ECECEC] rounded-xl w-[90%] mt-7 px-2 py-2'>
                                <Text className='text-black px-2'>Merci Borgia! Un de nos agents
                                    vous répondra dans un délai
                                    maximum de deux(2) heures à
                                    compter des heures d’ouverture
                                    banana: </Text>
                            </View>
                            <Text className='text-[#ACACAC] text-left pl-2 pt-2'>Envoyé</Text>
                        </View>
                    </View>
                </View>
                <View className='absolute  w-full bottom-4 '>
                    <View className=' border border-gray-200 shadow-md bg-white rounded-full items-center px-3 flex-row justify-between'>
                        <TextInput placeholder='Écrire un message...' />
                        <Feather name="send" color={COLORS.primaryOrangeHex} size={25}/>
                    </View>
                </View>
            </ScrollView >
        </View>
    )
}

export default ChatMessages