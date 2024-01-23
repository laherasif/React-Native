import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const SpinnerLoader = () => {
    return (
        <View className='flex-1 justify-center items-center'>
           <ActivityIndicator size="large" color="#FF8C00" />
        </View>
    )
}

export default SpinnerLoader