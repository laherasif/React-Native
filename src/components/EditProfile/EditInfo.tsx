import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EditProfileData } from '../../partial/ProfileLists';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../../theme/theme';
import Entypo from 'react-native-vector-icons/Entypo'
import DynamicPopup from '../../util/DynamicPopup';
import DelAccount from './DelAccount';
const EditInfo = ({navigation}:any) => {
     const [delAccount , setDelAccount] = useState(false)
    return (
        <ScrollView className='bg-white flex-1 px-[16px]' >
            { delAccount && <DynamicPopup modalVisible={delAccount} type={true}  data={<DelAccount setDelAccount={setDelAccount}/>} setModalVisible={()=> setDelAccount(false)}  /> }
            <View className=' justify-center items-center pt-[8px] '>
                <View className='relative'>
                    <Image source={require('../../assets/avatar.png')} className='rounded-full w-[102px] h-[102px]' />
                    <View className='absolute bottom-3 right-1 rounded justify-center items-center w-[20px] h-[20px] bg-[#FF8C00]'>
                        <MaterialIcons name='edit' size={15} color={COLORS.primaryWhiteHex} />
                    </View>
                </View>
                <Text className='text-[16px] font-bold text-[#444444] pt-[16px]'>Jacob Jones</Text>
            </View>
            <View style={[styles.boxWrapper]} className='shadow-lg border my-[16px] px-[16px] py-[16px] border-gray-100 rounded-md bg-white'>
                {
                    EditProfileData?.map((list: any, index: number) => (
                        <TouchableOpacity onPress={() => { navigation.navigate(list?.link) }} key={index} className='flex-row border rounded justify-between items-center p-2 mb-3 border-[#E0E0E0]'>
                            <View>
                                <Text className='font-medium text-[14px] text-[#444444]'>{list?.heading}</Text>
                                <Text className='font-medium pt-[2px] text-[14px] text-[#ACACAC]'>{list?.title}</Text>
                            </View>
                            <View>
                                <Entypo name="chevron-small-right" color={"#ACACAC"} size={28} />
                            </View>
                        </TouchableOpacity>
                    ))}

                <TouchableOpacity onPress={() => setDelAccount(true)} className='pt-[9px]'>
                    <Text className='font-medium text-[14px] text-[#E94949]'>Supprimer mon compte</Text>
                </TouchableOpacity>

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

export default EditInfo