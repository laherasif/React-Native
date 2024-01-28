import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LocationLists from '../components/Locations/locationLists'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import RecordNotFound from '../components/RecordNotFound'

const InProgressScreen = () => {
  const [lists, setLists] = useState([{list:''}])
  const [loading, setLoading] = useState(false)
  const tabBottom = useBottomTabBarHeight()

  const { height } = Dimensions.get('window')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <ScrollView className='bg-white px-[16px] flex-1 pt-[16px]'
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginBottom: tabBottom }}>
        {

          !loading && lists?.length > 0 ? Array(10).fill(10)?.map((_, i) => (
            <View key={i} >
              <LocationLists key={i} />
            </View>
          ))
            :
            <View>
              {loading ? (
                <View style={{ height: height - 300 }} className='bg-white flex-1 justify-center items-center '>
                  <ActivityIndicator size={60} color="#FF8C00" />
                </View>
              )
                : < RecordNotFound type="location" />
              }
            </View>
        }
      </View>
    </ScrollView >
  )
}

export default InProgressScreen