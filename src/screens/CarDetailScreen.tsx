import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { COLORS } from '../theme/theme'
const CarDetailScreen = () => {
  const { width: screenWidth } = Dimensions.get('window');
  const inputWidth = (screenWidth * 0.28)
  return (
    <View className='relative bg-white flex-1 '>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='px-[16px] py-[16px]'>

        <View className=''>
          <Image source={require('../assets/carbox.png')} className='rounded-md object-cover w-full ' />
        </View>

        <View className='rounded shadow-md bg-white px-[16px] py-[16px]'>
          <View className='flex-row justify-between items-center'>
            <View className='flex-row gap-[22px] items-center'>
              <View className='bg-[#D9D9D9] w-[53px] h-[53px] rounded-lg'></View>
              <View className=''>
                <Text className='text-[14px] text-[#444444] font-normal'>Jacob Jones</Text>
                <Text className='text-[12px] text-[#ACACAC] font-normal pt-2'>Proprétaire</Text>
              </View>
            </View>
            <View className='flex-row gap-5 items-center'>
              <View className='bg-[#FFF8EF] justify-center items-center w-[45px] h-[45px] rounded-lg'>
                <MaterialCommunityIcons name="message-processing" size={20} color={COLORS.primaryOrangeHex} />
              </View>
              <View className='bg-[#FFF8EF] justify-center items-center w-[45px] h-[45px] rounded-lg'>
                <FontAwesome6 name="phone-volume" size={20} color={COLORS.primaryOrangeHex} />
              </View>
            </View>
          </View>
        </View>
        {/* Description */}
        <View className='rounded shadow-md bg-white px-[16px] py-[16px] mt-[16px] '>
          <Text className='text-[16px] font-bold text-black'>Description</Text>
          <Text className='text-[14px] font-normal text-[#ACACAC] pt-[16px]'>
            Renault est connu pour son rôle dans le sport automobile, en particulier le rallye, la Formule 1 et la Formule E. Ses premiers travaux sur la modélisation mathématique des courbes pour les carrosseries automobiles sont importants dans l'histoire de l'infographie.</Text>
        </View>
        {/* charactics */}

        <View className=' mt-[16px] '>
          <Text className='text-[16px] font-bold text-black'>Caracteristiques</Text>
          <View className='flex-row flex-wrap  gap-3 pt-[16px]'>
            {Array(6).fill(6).map((_, index: number) => (
              <View key={index} className='rounded border border-gray-100 shadow-md bg-white px-[16px] py-[16px]' style={{ width: inputWidth }}>
                <FontAwesome6 name="gas-pump" size={25} color={COLORS.primaryOrangeHex} />
                <View className='pt-[16px]'>
                  <Text className='text-[12px] text-[#444444] font-semibold'>Moteur</Text>
                  <Text className='text-[12px] text-[#ACACAC] font-normal pt-1'>Hybride</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className='rounded  shadow-md bg-white px-[16px] py-[16px] mt-[16px] '>
          <Text className='text-[16px] font-bold text-black'>Détails</Text>
          {
            Array(5).fill(5).map((_, index: number) => (
              <View key={index} className='flex-row justify-between items-center pt-[16px]'>
                <Text className='text-[14px] text-[#444444] font-normal'>Année</Text>
                <Text className='text-[12px] text-[#ACACAC] font-normal '>2023</Text>
              </View>
            ))}
        </View>

        <View className='rounded  shadow-md bg-white px-[16px] py-[16px] mt-[16px] '>
          {
            Array(2).fill(2).map((_, index: number) => (
              <View key={index} className='flex-row justify-between items-center pt-[16px]'>
                <Text className='text-[14px] text-[#444444] font-normal'>Pet</Text>
                <Text className='text-[14px] text-[#ACACAC] font-normal '>Not accepting</Text>
              </View>
            ))}
        </View>

        <View className=' px-[16px] py-[16px] mt-[16px] border-b-2 '>
          <Text className='text-[16px] font-bold text-black'>Adresse du véhicule</Text>
          <View className='flex-row gap-3 items-center pt-[16px]'>
            <FontAwesome6 name="location-dot" size={25} color={COLORS.primaryOrangeHex} />
            <Text className='text-[14px] font-normal text-[#ACACAC] '>
              4709 Shadowmar drive kenner, LA 70062</Text>
          </View>
        </View>
        <View className='border border-[]'></View>

      </ScrollView>

      <View className='fixed bottom-0 border border-gray-100 w-full px-[16px] py-[16px]'>
        <View className='flex-row justify-between items-center'>
          <Text className='text-[20px] font-semibold text-[#444444]'>Total:</Text>
          <Text className='text-[20px] font-semibold text-[#FF8C00]'>76 000 FCFA</Text>
        </View>
        <View className='flex-row justify-between items-center pt-1'>
          <Text className='text-[14px] font-medium text-[#ACACAC]'>Date:</Text>
          <Text className='text-[14px] font-medium text-[#ACACAC]'>28 fév - 15 janv</Text>
        </View>
        <View className='pt-[16px]'>
          <TouchableOpacity onPress={() => {}} className='bg-[#FF8C00] rounded-md w-full justify-center items-center h-[40px]'>
            <Text className='text-[14px] font-normal text-white'>Réserver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CarDetailScreen