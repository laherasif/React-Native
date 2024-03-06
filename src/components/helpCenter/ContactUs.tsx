import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ContactUs = ({navigation}:any) => {
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    className='flex-1 bg-white px-[16px] py-[16px]'>
      <View className='bg-white rounded-md  mx-[16px] px-[16px]  my-[16px] shadow-md border border-[#E0E0E0]'>
        <View className=' justify-center items-center '>
          <View className='w-full py-[20px]'>
            <View className=''>
              <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Prénom</Text>
              <TextInput placeholder='Prénom*' className='border border-gray-200 rounded-md h-[40px] px-2' />
            </View>
            <View className='pt-2'>
              <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Nom</Text>
              <TextInput placeholder='Nom*' className='border border-gray-200 rounded-md h-[40px] px-2' />
            </View>
            <View className='pt-2'>
              <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Object</Text>
              <TextInput placeholder='Object*' className='border border-gray-200 rounded-md h-[40px] px-2' />
            </View>
            <View className='pt-2'>
              <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Message</Text>
              <Text style={styles.placeholder}>Type your message here</Text>
              <TextInput
                // placeholder='message'
                multiline={true} // Enables multiline input
                numberOfLines={15} // Adjust as needed
                className='border border-gray-200 rounded-md placeholder:text-start  px-2' />
            </View>
            <View className='pt-[16px]'>
              <TouchableOpacity onPress={() => { navigation.navigate('Message') }} className='border border-[#FF8C00] justify-center items-center h-[40px] rounded'>
                <Text className='text-[14px] font-medium text-[#98A2B3]'>Envoyer le message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
  placeholder: {
    position: 'absolute',
    top: 50, // Adjust as needed
    left: 12, // Adjust as needed
    color: '#999', // Adjust as needed
  },
 
});

export default ContactUs