import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../theme/theme'
const ReviewsScreen = () => {
  return (
    <View className='px-[16px] py-[16px] bg-white flex-1'>
      <View className='flex-row items-center gap-3'>
        <Text className='text-[16px] font-bold text-black'>Les avis</Text>
        <View className='flex-row items-center '>
          <FontAwesome name="star" size={15} color={COLORS.primaryOrangeHex} />
          <Text className='text-[14px] font-normal px-2 text-[#444444] '>
            4.5 </Text>
          <Text className='text-[14px] font-normal text-[#ACACAC] '>
            (19)</Text>
        </View>
      </View>
      <View className='mt-[16px] px-[16px] py-[16px] rounded-md shadow-md'>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            Array(10).fill(10).map((_, index: number) => (
              <View

                key={index} className='border-b mb-5 last:border-0 border-gray-200 pb-2'>
                <View className='flex-row justify-between'>
                  <View className='flex-row gap-2'>
                    <Image source={require('../assets/logo.png')} className='w-[40px] h-[40px] object-cover' />
                    <View>
                      <Text className='text-[14px] font-Medium text-[#444444]'>Renault twingo</Text>
                      <View className='flex-row pt-[8px] gap-[2px]'>
                        {
                          Array(5).fill(5).map((_, i: number) => (
                            <FontAwesome name="star" size={12} color={COLORS.primaryOrangeHex} />
                          ))
                        }
                      </View>
                    </View>
                  </View>
                  <View className=''>
                    <Text className='text-[12px] font-normal text-[#ACACAC]'>23, Oct   2024</Text>
                  </View>
                </View>
                <Text className='text-[14px] font-normal text-[#ACACAC] pt-[16px]'>
                  Cool
                </Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default ReviewsScreen