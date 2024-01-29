import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const CarDetailScreen = () => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    className='bg-white flex-1 px-[16px] py-[16px]'>
      <View>
        <Image source={require('../assets/carbox.png')} className='rounded-md object-cover w-full h-full'/>
      </View>
    </ScrollView>
  )
}

export default CarDetailScreen