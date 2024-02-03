import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../theme/theme'
const OwnerProfileScreen = ({navigation}:any) => {
  return (
    <View className='flex-1 bg-white px-[16px] py-[16px]'>
      <View className='flex-row justify-between '>
        <TouchableOpacity onPress={() => { }} className='flex-row gap-[22px] '>
          <View className='bg-[#D9D9D9] w-[80px] h-[80px] rounded-full'></View>
          <View className=''>
            <Text className='text-[16px] text-[#444444] font-bold'>Jacob Jones</Text>
            <Text className='text-[12px] text-[#ACACAC] font-normal pt-2'>Membre depuis Août 2022</Text>
            <View className='flex-row items-center pt-[8px] '>
              <FontAwesome name="star" size={20} color={COLORS.primaryOrangeHex} />
              <Text className='text-[14px] font-normal px-2 text-[#444444] '>
                4.5 </Text>
              <Text className='text-[14px] font-normal text-[#ACACAC] '>
                (19)</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className=''>
          <Entypo name="dots-three-vertical" size={20} />
        </View>
      </View>
      <View className='mt-[16px] bg-[#F7F7F7] p-3 rounded'>
        <Text className='text-[#ACACAC] text-[14px] font-medium '>5 véhicules proposés pour la location</Text>
      </View>
      <View className='mt-[16px]'>
        <Text className='text-[16px] text-[#444444] font-bold'>Véhicules</Text>
        <View className='mt-[16px] px-[16px] py-[16px] rounded-md shadow-md'>
          <View className='flex-row gap-3'>
            <Image source={require('../assets/car2.png')} className='w-[90px] h-[90px] rounded-md object-cover' />
            <View className='flex-col  '>
              <View className='flex-row justify-between '>
                <View className='flex-col'>
                  <Text className='text-[16px] font-semibold text-[#444444]'>Renault twingo</Text>
                  <Text className='text-[11px] font-normal text-[#ACACAC] pt-[4px]'>Fortuner</Text>
                </View>
                <View className='flex-row  gap-1'>
                  <FontAwesome name="star" size={14} color={COLORS.primaryOrangeHex} />
                  <Text className='text-[12px] text-[#444444] font-normal'>4.5 </Text>
                  <Text className='text-[12px] text-[#98A2B3]  font-normal '>(12) </Text>
                </View>
              </View>
              <View className='flex-row justify-between items-center gap-5 pt-[4px]'>
                <View>
                  <Text className='text-[11px] font-normal text-[#98A2B3]'>Grand Abidjan</Text>
                  <Text className='text-[11px] pt-[8px] font-normal text-[#FF8C00]'>33 000 FCFA <Text className='text-[#ACACAC] text-[12px] font-normal '>/jour</Text></Text>
                </View>
                <View>
                  <Text className='text-[11px] font-normal text-[#98A2B3]'>Hors Abidjan</Text>
                  <Text className='text-[11px] pt-[8px] font-normal text-[#FF8C00]'>33 000 FCFA <Text className='text-[#ACACAC] text-[12px] font-normal '>/jour</Text></Text>
                </View>
              </View>
            </View>
          </View>
          <View className='flex-row  justify-between '>
            <View className='flex-row pt-[16px] gap-1'>
              <Ionicons name='location-sharp' size={15} color={'#FF8C00'} />
              <Text className='text-[#444444] text-[10px] font-normal ' >Sococe 2 Plateaux Agban, K 64, Cocody</Text>
            </View>
            <View className='bg-[#FFF0DE] rounded-full p-1 '>
              <Text className='text-[#FFAC46] font-normal text-[10px]'>Avec chauffeur</Text>
            </View>
          </View>

        </View>

        <View className='mt-[16px]'>
          <View className='flex-row items-center gap-3'>
            <Text className='text-[16px] font-bold text-black'>Les avis</Text>
            <View className='flex-row items-center '>
              <FontAwesome name="star" size={20} color={COLORS.primaryOrangeHex} />
              <Text className='text-[14px] font-normal px-2 text-[#444444] '>
                4.5 </Text>
              <Text className='text-[14px] font-normal text-[#ACACAC] '>
                (19)</Text>
            </View>
          </View>
        </View>
        <View className='mt-[16px]'>
          <TouchableOpacity onPress={() => { navigation.navigate('Reviews') }} className='border border-[#FFAC46] justify-center items-center w-full h-[40px]' >
            <Text className='text-[#FFAC46]'>Voir plus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OwnerProfileScreen