import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/AntDesign';
interface popupProps {
    modalVisible: boolean | undefined
    setModalVisible: () => void
    data: any
}

const DynamicPopup: React.FC<popupProps> = ({
    modalVisible,
    data,
    setModalVisible
}) => {
    return (
        <View className='flex-1'>
            <Modal
                isVisible={modalVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ flex: 1 }}
                backdropTransitionInTiming={800}
                backdropTransitionOutTiming={800}
            >
                <View style={styles.container}>
                    <View className='justify-end items-end'>
                        <TouchableOpacity onPress={() => setModalVisible()} className=' bg-[#777777] rounded-full'>
                            <Icon name="closecircle" size={20} />
                    </TouchableOpacity>
                </View>
                <View>
                    {data}
                </View>
        </View>
            </Modal >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: "#000",
        borderStyle: "solid",
    }
})

export default DynamicPopup