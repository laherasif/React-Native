import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import MessagesLists from '../components/Messages/MessagesLists'
import RecordNotFound from '../components/RecordNotFound'
import { ActivityIndicator } from 'react-native-paper'

const MessagesScreen = ({navigation}:any) => {
    const [lists, setLists] = useState([{ list: "" }])
    const [loading, setLoading] = useState(false)

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
            <View >
                {
                    !loading && lists?.length > 0 ? Array(10).fill(10).map((_, i) => (
                        <View key={i} className='mb-2'>
                            <MessagesLists key={i} navigation={navigation} />
                        </View>
                    ))
                        :
                        <View>
                            {loading ? (
                                <View style={{ height: height - 300 }} className='bg-white flex-1 justify-center items-center '>
                                    <ActivityIndicator size={60} color="#FF8C00" />
                                </View>
                            )
                                : < RecordNotFound OuterType='' InnerType='' />
                            }
                        </View>
                }
            </View>
        </ScrollView >
    )
}

export default MessagesScreen