import { Dimensions, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import Entypo from 'react-native-vector-icons/Entypo'
const FilterScreen = ({navigation}:any) => {
    const [checked, setChecked] = useState('first');
    const [selected, setSelected] = useState("");
    const { width: screenWidth } = Dimensions.get('window');
    const inputWidth = (screenWidth * 0.4) 

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    return (
        <View className='bg-white flex-1 px-[16px] py-[16px] relative '>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
                <View className='shadow-lg border mb-5 px-[16px] py-[16px] border-gray-100 rounded-md bg-white'>
                    <Text className='font-medium text-[14px] text-[#000000]'>Coût de la location</Text>
                    <View className='flex-row justify-between items-center gap-3 pt-[16px]'>
                        <View style={{ flexDirection: 'column', width: inputWidth }}>
                            <Text className='font-medium pb-1 text-[14px] text-[#000000]'>Min</Text>
                            <TextInput
                                placeholder="0"
                                style={{ borderWidth: 1, borderColor: '#E0E0E0', height: 38, paddingHorizontal: 8, borderRadius: 2 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', width: inputWidth }}>
                            <Text className='font-medium pb-1 text-[14px] text-[#000000]'>Max</Text>
                            <TextInput
                                placeholder="500 000"
                                style={{ borderWidth: 1, borderColor: '#E0E0E0', height: 38, paddingHorizontal: 8, borderRadius: 2 }}
                            />
                        </View>
                    </View>
                </View>
                <View className='shadow-lg border mb-5 px-[16px] py-[16px] border-gray-100 rounded-md bg-white'>
                    <Text className='font-medium text-[14px] text-[#000000]'>Coût de la location</Text>
                    <View className='flex-row justify-between items-center gap-2 pt-[16px]'>
                        <TouchableOpacity onPress={() => setChecked('first')}>
                            <View className=' pr-4 border py-[2px] flex-row items-center border-[#E0E0E0] rounded'>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color='#FF8C00'
                                />
                                <Text style={{ fontFamily: 'medium', fontSize: 14, marginLeft: 10, color: checked === "second" ? '#000000' : '#ACACAC' }}>Avec chauffeur</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setChecked('second')}>
                            <View className=' pr-3 border py-[2px] flex-row items-center border-[#E0E0E0] rounded'>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color='#FF8C00'
                                />
                                <Text style={{ fontFamily: 'medium', fontSize: 14, marginLeft: 10, color: checked === "second" ? '#000000' : '#ACACAC' }}>Avec chauffeur</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='shadow-lg border mb-5 px-[16px] py-[16px] border-gray-100 rounded-md bg-white'>
                    <Text className='font-medium text-[14px] text-[#000000]'>Spécifications</Text>
                    <View className='flex-row justify-between items-center gap-3 pt-[16px]'>
                        <View style={{ flexDirection: 'column', width: inputWidth }}>
                            <Text className='font-normal pb-1 text-[11px] text-[#98A2B3]'>Nombre de places</Text>
                            <TextInput
                                placeholder="0"
                                style={{ borderWidth: 1, borderColor: '#E0E0E0', height: 38, paddingHorizontal: 8, borderRadius: 2 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', width: inputWidth }}>
                            <Text className='font-normal pb-1 text-[11px] text-[#98A2B3]'>Nombre de portes</Text>
                            <TextInput
                                placeholder="500 000"
                                style={{ borderWidth: 1, borderColor: '#E0E0E0', height: 38, paddingHorizontal: 8, borderRadius: 2 }}
                            />
                        </View>
                    </View>
                    <View className='flex-row justify-between gap-3 pt-[16px]'>
                        <View style={{ flexDirection: 'column', width: inputWidth }}>
                            <Text className='font-normal pb-1 text-[11px] text-[#98A2B3]'>Boite</Text>
                            <SelectList
                                setSelected={(val: any) => setSelected(val)}
                                data={data}
                                boxStyles={{ borderRadius: 4, borderColor: '#E0E0E0' }}
                                dropdownStyles={{ borderRadius: 4, borderColor: '#E0E0E0' }}
                                search={false}
                                save="value"
                            />
                        </View>
                        <View style={{ flexDirection: 'column', width: inputWidth }}>
                            <Text className='font-normal pb-1 text-[11px] text-[#98A2B3]'>Carburant</Text>
                            <SelectList
                                setSelected={(val: any) => setSelected(val)}
                                data={data}
                                boxStyles={{ borderRadius: 4, borderColor: '#E0E0E0' }}
                                dropdownStyles={{ borderRadius: 4, borderColor: '#E0E0E0' }}
                                search={false}
                                save="value"
                            />
                        </View>
                    </View>
                </View>

                <View className='shadow-lg border mb-5 px-[16px] py-[16px] border-gray-100 rounded-md bg-white'>
                    <Text className='font-medium text-[14px] text-[#000000]'>Catégorie de véhicule</Text>
                    <TouchableOpacity onPress={() =>{ navigation.navigate('Marque')}} className='border border-[#E0E0E0] rounded flex-row justify-between items-center mt-[7px] px-[16px] h-[44px]'>
                        <Text className='text-[#ACACAC] text-[14px] font-medium'>Utilitaire </Text>
                        <Entypo name="chevron-small-right" color={"#ACACAC"} size={28} />
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            <View className='fixed bottom-2'>
                <TouchableOpacity  className='bg-[#FF8C00] h-[40px] justify-center items-center rounded-md'>
                  <Text className='text-white font-semibold text-[14px]'>Appliquer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FilterScreen
