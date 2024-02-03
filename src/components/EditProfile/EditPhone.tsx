import { View, Text, ScrollView, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useRef, useState } from 'react'
import PhoneInput from "react-native-phone-number-input";
import { COLORS } from '../../theme/theme';
import DynamicPopup from '../../util/DynamicPopup';
import VerifyPhoneOtp from './VerifyPhoneOtp';
const EditPhone = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [formattedValue, setFormattedValue] = useState<string>("");
  return (
    <View className='flex-1'>
       { show && <DynamicPopup modalVisible={show} type={false}  data={<VerifyPhoneOtp setShow={setShow}/>} setModalVisible={()=> setShow(false)}  /> }
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='bg-white  px-[16px] py-[16px] ' >
        <View className='px-[16px] rounded-md flex-1 bg-white mt-[16px] py-[16px] shadow-md '>
          <View className=''>
            <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Numéro de téléphone</Text>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="DM"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              containerStyle={styles.phoneBox}
              textContainerStyle={styles.phoneText}
              autoFocus />
          </View>
        </View>
      </ScrollView>
      <View className='absolute bottom-5   w-full '>
        <View className='px-[16px]'>
          <TouchableOpacity onPress={() => { setShow(true) }} className='bg-[#FF8C00] justify-center items-center h-[40px] rounded-md'>
            <Text className=' font-semibold text-[14px] text-white pb-1'>Envoyer un code de confirmation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  phoneBox: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    padding: 0,
    borderWidth: 1,
    borderColor:'#E0E0E0'
  },
  phoneText: {
    fontSize: 14,
   
    padding: 0,

  }
})

export default EditPhone