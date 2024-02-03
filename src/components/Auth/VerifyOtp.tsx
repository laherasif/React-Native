import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import OTPTextInput from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/AntDesign';
const VerifyOtp = ({setVerify}:any) => {
    const [otp, setOtp] = useState('');

    const handleOnFulfill = (text: string) => {
        setOtp(text)
        if (text?.length === 4) {
            Keyboard.dismiss(); // Close the keyboard
        }
    }


    return (
        <>
            <View className='justify-end items-end  '>
                <TouchableOpacity onPress={() => setVerify(false)}  >
                    <Icon name="closecircle" size={20} />
                </TouchableOpacity>
            </View>
            <View className='justify-center items-center'>
                <Text className='font-bold text-[22px] text-[#FF8C00]'>Vérifier votre email</Text>
                <Text className='pt-3 max-w-[250px] text-center font-normal text-[14px]'>Nous vous avons envoyé un code de vérification à l’adresse:</Text>
                <Text className='font-normal text-[14px]'>laherasif@gmail.com</Text>
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
                <View className='pt-[16px] justify-center items-center'>
                    <Text className='font-normal text-[14px] items-center text-center'>Si vous ne retrouvez pas l’adresse mail que nous vous avons envoyé, nous vous recommandons de vérifier vos spams venant de l’adresse: notifications@primecarapp.com</Text>
                </View>
                <View className='flex-row justify-center items-center pt-[16px]'>
                    <Text className='text-[#444444] font-normal text-[12px]'>Pas reçu de mail? </Text>
                    <Text className='text-[#FF8C00] font-normal text-[12px]'>Cliquer ici</Text>
                </View>
                <View className='py-5 w-full '>
                    <TouchableOpacity className='text-center items-center w-full bg-[#FF8C00] max-w-[50%] mx-auto h-[40px] rounded-md justify-center'>
                        <Text className='text-white fonr-semibold text-[14px]'>Valider</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpContainers: {
        marginVertical: 20,
    },
    otpInput: {
        borderColor: 'gray',
        borderRadius: 20,
        backgroundColor: '#FFF7EE',
        color: '#FF8C00', // This sets the text color
    },
});

export default VerifyOtp