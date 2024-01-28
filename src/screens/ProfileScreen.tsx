import { View, Text, Image, StyleSheet, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ProfileLists } from '../partial/ProfileLists';
import Entypo from 'react-native-vector-icons/Entypo'
const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const tabBottom = useBottomTabBarHeight()

  return (
    <ScrollView className='bg-white flex-1 px-[16px]' >
      <View className=' justify-center items-center pt-[8px]'>
        <Image source={require('../assets/avatar.png')} className='rounded-full w-[102px] h-[102px]' />
        <Text className='text-[16px] font-bold text-[#444444] pt-[16px]'>Jacob Jones</Text>
      </View>
      <View style={[styles.boxWrapper]} className='px-[16px] rounded-md flex-1 bg-white mt-[16px] pt-[16px] '>
        {
          ProfileLists?.map((list: any, index: number) => (
            <View key={index} className='flex-row border rounded justify-between items-center p-2 mb-3 border-[#E0E0E0]'>
              <Text className='font-medium text-[14px] text-[#444444]'>{list?.title}</Text>
              {list?.icon === "switch" ?
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                :
                <Entypo name="chevron-small-right" color={"#ACACAC"} size={28} />
              }
            </View>
          ))}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  boxWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 8,
    elevation: 6,
  }
})

export default ProfileScreen