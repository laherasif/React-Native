
import { View, Text, StatusBar, Platform, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Keyboard, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../theme/theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from "react-native-phone-number-input";
import Checkbox from '../components/CheckBox';
import DynamicPopup from '../util/DynamicPopup';
import VerifyOtp from '../components/Auth/VerifyOtp';
import SpinnerLoader from '../util/SpinnerLoader';
const SignUpScreen = ({navigation}:any) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState<string>("");
    const [bottomPadding, setBottomPadding] = useState<number>(20);
    const [verify, setVerify] = useState<boolean>(false);
    const [isSelected, setSelection] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const phoneInput = useRef<PhoneInput>(null);

    const { height } = useWindowDimensions()
    const handleSendVerify = () => {
        setVerify(true)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setBottomPadding(10); // Adjust the padding value when the keyboard is open
            },
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setBottomPadding(20); // Adjust the padding value when the keyboard is closed
            },
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, }}
                behavior={(Platform.OS === 'ios' ? 'padding' : null) as 'height' | 'position' | 'padding' | undefined}
                keyboardVerticalOffset={height}
            >

                {verify && <DynamicPopup type={loading} data={ loading ? <SpinnerLoader/> : <VerifyOtp />} modalVisible={verify} setModalVisible={() => setVerify(false)} />}

                <View className='bg-white flex-1 justify-center  px-5 pt-10   ' style={{ paddingBottom: bottomPadding }}>
                    <StatusBar backgroundColor={COLORS.primaryWhiteHex} barStyle={'dark-content'} />

                    <View style={styles.boxWrapper} className='  rounded-t-2xl  flex-1 bg-white pt-[1px]'

                    >
                        <View className='h-[50px] bg-[#FF8C00]  w-full rounded-t-2xl p-2' >
                            <Text className='text-white text-[22px] font-bold'>Inscription</Text>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View className=' justify-center items-center px-[16px]'>
                                <View className='w-full pt-[20px]'>
                                    <View className=''>
                                        <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Prénom</Text>
                                        <TextInput placeholder='Prénom*' className='border rounded-md h-[40px] px-2' />
                                    </View>
                                    <View className='pt-2'>
                                        <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Nom</Text>
                                        <TextInput placeholder='Nom*' className='border rounded-md h-[40px] px-2' />
                                    </View>
                                    <View className='pt-2'>
                                        <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Email</Text>
                                        <TextInput placeholder='Email*' className='border rounded-md h-[40px] px-2' />
                                    </View>
                                    <View className='pt-2'>
                                        <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Téléphone</Text>
                                        <PhoneInput
                                            ref={phoneInput}
                                            defaultValue={value}
                                            defaultCode="DM"
                                            layout="first"
                                            onChangeText={(text) => {
                                                setValue(text);
                                            }}
                                            onChangeFormattedText={(text) => {
                                                setFormattedValue(text);
                                            }}
                                            containerStyle={styles.phoneBox}
                                            textContainerStyle={styles.phoneText}
                                            autoFocus
                                        />
                                    </View>
                                    <View className='pt-2'>
                                        <Text className='font-normal text-[10px] text-[#444444]'>Veuillez rajouter l’indicatif de votre pays pour votre numéro si
                                            vous êtes hors de la Côte d’Ivoire. Ex: +33 (France), +44 (UK).</Text>
                                    </View>
                                    <View className='pt-2'>
                                        <Text className=' font-normal text-[14px] text-[#98A2B3] pb-1'>Mot de passe</Text>
                                        <View className='flex-row items-center border rounded-md h-[40px] justify-between px-2'>
                                            <TextInput placeholder='Email*' />
                                            <Icon name="eye" size={24} color="#ACACAC" />
                                        </View>
                                    </View>
                                    <View className=' pt-2'>
                                        <Text className='font-medium text-[10px] text-[#FF8C00]'>Conseil: <Text className='text-[#444444]'> Renseignez un mot de passe fort d’au moins 8 caractères !</Text></Text>
                                    </View>
                                    <View className='pt-4'>
                                        <Checkbox
                                            text="J’accepte les conditions générales de Primecar."
                                            isChecked={isSelected}
                                            onPress={() => {
                                                setSelection(!isSelected);
                                            }}
                                        />
                                        {/* <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    /> */}
                                        {/* <Text style={styles.label}>Do you like React Native?</Text> */}
                                    </View>
                                    <View className='pt-[16px]'>
                                        <TouchableOpacity onPress={() => { handleSendVerify() }} className='bg-[#FF8C00] rounded-md w-full text-center justify-center h-[40px]'>
                                            <Text className='font-semibold text-[14px] text-center items-center text-white '>Se connecter</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View className='pt-[16px] text-center justify-center items-center '>
                                        <Text className=' font-normal text-[14px]  text-[#98A2B3] pb-2'>ou</Text>
                                    </View>
                                    <View className='pt-[16px]'>
                                        <TouchableOpacity onPress={() => { }} className='bg-transparent rounded-md w-full text-center items-center flex-row px-3  border h-[42px]'>
                                            <Image source={require('../assets/google.png')} />
                                            <Text className='font-semibold items-center max-w-[200px] mx-auto text-center justify-center text-[14px] text-[#444444] '>Continuer avec Google</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View className='pt-[16px] text-center  justify-center items-center flex-row  '>
                                        <Text className='font-normal text-[11px]  items-center text-[#444444]'>Pas de compte?</Text>
                                        <TouchableOpacity className='pl-1' onPress={() => navigation.navigate('SignIn')} >
                                            <Text className='font-normal text-[11px]  text-[#0066FF] '>S’inscrire</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
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
    },
    phoneBox: {
        height: 42,
        width: '100%',
        borderRadius: 8,
        padding: 0,
        borderWidth: 1,
    },
    phoneText: {
        fontSize: 14,
        backgroundColor: COLORS.primaryWhiteHex,
        padding: 0,

    }
})

export default SignUpScreen