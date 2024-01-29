import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'

const UtilitiesScreen = ({navigation}:any) => {
    const [checked, setChecked] = useState<number | null>(null);

    const handleClose = (index:number) => {
        setChecked(index)
        navigation.goBack()

    }

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        className='bg-white flex-1 px-[16px] py-[16px]'>
            <View className='shadow-lg border mb-5 px-[16px] py-[16px] border-gray-100 rounded-md bg-white'>
                {Array(20).fill(20).map((_, index: number) => (
                    <View key={index} className=' pr-3 border py-[2px] mb-4 flex-row items-center border-[#E0E0E0] rounded'>
                        <RadioButton
                            value="second"
                            status={checked === index ? 'checked' : 'unchecked'}
                            onPress={() => handleClose(index)}
                            color='#FF8C00'
                        />
                        <Text style={{ fontFamily: 'medium', fontSize: 14, marginLeft: 5, color: checked === index ? '#000000' : '#ACACAC' }}>Avec chauffeur</Text>
                    </View>
                ))}

            </View>
        </ScrollView>
    )
}

export default UtilitiesScreen