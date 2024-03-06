import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const EditPersonalInfo = () => {
  const [selected, setSelected] = useState("");
  const data = [
    { key: '1', value: 'Homme', },
    { key: '2', value: 'Femme' },

  ]
  return (
    <View className='flex-1'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}  className='bg-white  px-[16px] py-[16px] ' >
        <View className='px-[16px] rounded-md flex-1 bg-white mt-[16px] py-[16px] shadow-md h-auto  '>
          <View className=''>
            <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Prénom</Text>
            <TextInput placeholder='Prénom*' className='border rounded-md h-[40px] border-[#E0E0E0] px-2' />
          </View>
          <View className='pt-2'>
            <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Nom</Text>
            <TextInput placeholder='Nom*' className='border rounded-md h-[40px] border-[#E0E0E0] px-2' />
          </View>
          <View className='pt-2'>
            <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Genre</Text>
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
      </ScrollView>
      <View className='absolute bottom-5   w-full '>
        <View className='px-[16px]'>
        <TouchableOpacity onPress={() => { }} className='bg-[#FF8C00] justify-center items-center h-[40px] rounded-md'>
          <Text className=' font-semibold text-[14px] text-white pb-1'>Enregister</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EditPersonalInfo