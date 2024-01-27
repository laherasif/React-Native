import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import DatePickerCanlender from './DatePickerCanlender';

const SelectDate = () => {
    return (
        <View className='bg-white px-[16px] py-[16px] rounded-lg'>
            <View className='flex-row justify-between items-center  '>
                <View>
                    <Text className='text-[16px] font-medium text-black '>Dates de location</Text>
                </View>
                <View>
                    <TouchableOpacity className='  bg-[#EFEFEF] rounded-full'>
                        <Icon name="closecircle" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='flex-row justify-between items-center pt-[16px] gap-2'>
                <View className='w-[46%]'>
                    <Text className='text-[14px] font-medium text-black '>Heure de départ</Text>
                    <View className='border border-[#E0E0E0] rounded mt-[10px] px-[16px] py-[10px]'>
                        <Text className='text-[14px] font-medium text-[#ACACAC] text-center '>Samedi, 13 Mai</Text>
                    </View>
                </View>
                <View className='w-[46%]'>
                    <Text className='text-[14px] font-medium text-black '>Heure de retour</Text>
                    <View className='border border-[#E0E0E0] rounded mt-[10px] px-[16px] py-[10px]'>
                        <Text className='text-[14px] font-medium text-[#ACACAC] text-center '>Mercredi, 14 Juil.</Text>
                    </View>
                </View>
            </View>
            {/* View Calender */}
            <View>
                <DatePickerCanlender/>
            </View>

            {/* time */}

            <View className='flex-row justify-between items-center pt-[16px] gap-2'>
                <View className='w-[46%]'>
                    <Text className='text-[15px] font-medium text-black '>Date de départ</Text>
                    <View className='flex-row justify-between items-center pt-[10px]'>
                        <View className='fle-col justify-center items-center border border-[#E0E0E0] rounded h-[60px] bg-[#FFF6EB]'>
                            <View>
                                <Icon name="caretup" color={"#BDB2A5"} size={10} />
                            </View>
                            <View className='  px-[16px] py-1'>
                                <Text className='text-[17px] font-bold text-[#444444] text-center '>01h</Text>
                            </View>
                            <View>
                                <Icon name="caretdown" color={"#BDB2A5"} size={10} />
                            </View>
                        </View>
                        <View><Text className='text-[17px] font-bold text-[#444444]'>:</Text></View>
                        <View className='fle-col justify-center items-center border border-[#E0E0E0] rounded h-[60px] bg-[#FFF6EB]'>
                            <View>
                                <Icon name="caretup" color={"#BDB2A5"} size={10} />
                            </View>
                            <View className='  px-[16px] py-1'>
                                <Text className='text-[17px] font-bold text-[#444444] text-center '>10m</Text>
                            </View>
                            <View>
                                <Icon name="caretdown" color={"#BDB2A5"} size={10} />
                            </View>
                        </View>
                    </View>
                </View>
                <View className='w-[46%]'>
                    <Text className='text-[15px] font-medium text-black '>Date de départ</Text>
                    <View className='flex-row justify-between items-center pt-[10px]'>
                        <View className='fle-col justify-center items-center border border-[#E0E0E0] rounded h-[60px] bg-[#F3F3F3] '>
                            <View>
                                <Icon name="caretup" color={"#BDB2A5"} size={10} />
                            </View>
                            <View className='  px-[16px] py-1'>
                                <Text className='text-[17px] font-bold text-[#444444] text-center '>08h</Text>
                            </View>
                            <View>
                                <Icon name="caretdown" color={"#BDB2A5"} size={10} />
                            </View>
                        </View>
                        <View><Text className='text-[17px] font-bold text-[#444444]'>:</Text></View>
                        <View className='fle-col justify-center items-center border border-[#E0E0E0] rounded h-[60px] bg-[#F3F3F3]'>
                            <View>
                                <Icon name="caretup" color={"#BDB2A5"} size={10} />
                            </View>
                            <View className='  px-[16px] py-1'>
                                <Text className='text-[17px] font-bold text-[#444444] text-center '>10m</Text>
                            </View>
                            <View>
                                <Icon name="caretdown" color={"#BDB2A5"} size={10} />
                            </View>
                        </View>
                    </View>

                </View>
            </View>


        </View>
    )
}

export default SelectDate