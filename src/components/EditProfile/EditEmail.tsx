import { View, Text , ScrollView , TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import DynamicPopup from '../../util/DynamicPopup'
import VerifyOtp from '../Auth/VerifyOtp'

const EditEmail = () => {
  const [show , setShow] = useState(false)
  return (
    <View className='flex-1'>
       { show && <DynamicPopup modalVisible={show} type={false}  data={<VerifyOtp setVerify={setShow}/>} setModalVisible={()=> setShow(false)}  /> }
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}  className='bg-white  px-[16px] py-[16px] ' >
      <View className='px-[16px] rounded-md flex-1 bg-white mt-[16px] py-[16px] shadow-md '>
        <View className=''>
          <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Adresse email</Text>
          <TextInput placeholder='Email*' className='border rounded-md h-[40px] border-[#E0E0E0] px-2' />
        </View>
      </View>
    </ScrollView>
    <View className='absolute bottom-5   w-full '>
      <View className='px-[16px]'>
      <TouchableOpacity onPress={() => { setShow(true)}} className='bg-[#FF8C00] justify-center items-center h-[40px] rounded-md'>
        <Text className=' font-semibold text-[14px] text-white pb-1'>Enregister</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default EditEmail