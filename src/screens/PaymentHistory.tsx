import { View, ScrollView ,  } from 'react-native'
import React from 'react'
import LocationLists from '../components/Locations/locationLists'

const PaymentHistory = () => {
  return (
    <ScrollView className='bg-white px-[16px] flex-1 pt-[16px]'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:40}}
    >
      <View >
        {

          // !loading && lists?.length > 0 ? 
          Array(10).fill(10)?.map((_, i) => (
            <View key={i} >
              <LocationLists key={i} />
            </View>
          ))
            // :
            // <View>
            //   {loading ? (
            //     <View style={{ height: height - 300 }} className='bg-white flex-1 justify-center items-center '>
            //       <ActivityIndicator size={60} color="#FF8C00" />
            //     </View>
            //   )
            //     : < RecordNotFound OuterType='' InnerType='location' />
            //   }
            // </View>
        }
      </View>
    </ScrollView >
  )
}

export default PaymentHistory