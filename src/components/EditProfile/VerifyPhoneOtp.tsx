import { View, Text, TouchableOpacity, Keyboard, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import OTPTextInput from 'react-native-otp-textinput';

const VerifyPhoneOtp = ({ setShow }: any) => {

    const [otp, setOtp] = useState('');

    const handleOnFulfill = (text: string) => {
        setOtp(text)
        if (text?.length === 4) {
            Keyboard.dismiss(); // Close the keyboard
        }
    }
    return (
        <View>
            <View className='justify-end items-end  '>
                <TouchableOpacity  onPress={() => setShow(false )}  >
                    <Icon name="closecircle" size={20} />
                </TouchableOpacity>
            </View>
            <View className='px-[16px] py-[16px] justify-center items-center'>
                <Text className='text-[#444444] font-bold text-[22px]'>Vérification OTP</Text>
                <Text className='text-[#444444] font-normal text-[14px] pt-[16px]'>Nous vous avons envoyé un code de validation par SMS au numéro de téléphone:</Text>
                <Text className='text-[#444444] font-bold text-[14px] pt-[10px] '>+225 01 01010202</Text>
                <View>
                    <OTPTextInput
                        tintColor="#FF8C00" // This sets the border color
                        containerStyle={styles.otpContainers}
                        textInputStyle={styles.otpInput}
                        handleTextChange={(text) => handleOnFulfill(text)}
                        inputCount={4} // Specify the number of OTP digits
                        keyboardType="numeric"
                        autoFocus
                    />
                </View>
                <View>
                    <Text className='text-[#ACACAC] font-normal text-[11px] pt-[10px] '>00:30</Text>
                </View>
                <View className='flex-row items-center'>
                    <Text className='text-[#ACACAC] font-normal text-[11px] pt-[10px] '>Pas reçu de code?</Text>
                    <Text className='text-[#FF8C00] font-normal text-[11px] pt-[10px] px-[2px] '> Renvoyer le code</Text>
                </View>
                <View className='py-5 w-full '>
                    <TouchableOpacity className='text-center items-center w-full bg-[#FF8C00]  h-[40px] rounded-md justify-center'>
                        <Text className='text-white fonr-semibold text-[14px]'>Valider</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    otpContainers: {
        marginVertical: 20,
    },
    otpInput: {
        borderColor: 'gray',
        width: 60,
        height: 60,
        backgroundColor: '#EBEBEB',
        color: '#FF8C00', // This sets the text color
    },
});

export default VerifyPhoneOtp