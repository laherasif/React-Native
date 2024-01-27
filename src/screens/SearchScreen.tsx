import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../theme/theme';
const { height } = Dimensions.get('window')
const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState('');
    const [bottomPadding, setBottomPadding] = useState<number>(60);

    const searchRef = useRef<any>();
    const handleClear = () => {
        setSearchValue('');
        // Clearing the input field by setting the value to an empty string
        if (searchRef.current) {
            searchRef.current.setAddressText('');
            // searchRef.current?.focus()
        }
    };

    const handleInputChange = (text: string) => {
        setSearchValue(text);
        // Here, you can perform any actions you need based on the input value
    };

    const renderLeftButton: any = () => {
        if (searchValue) {
            return (
                <TouchableOpacity
                    className='absolute left-3 top-3 z-10'
                    onPress={handleClear}>
                    <Entypo name='cross' size={20} color={COLORS.primaryOrangeHex} />
                </TouchableOpacity>
            );
        }
        return null; // Return null if there is no search value
    };

    useEffect(() => {

        if (searchRef.current) {
            searchRef.current?.focus()
        }
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setBottomPadding(60); // Adjust the padding value when the keyboard is open
            },
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setBottomPadding(60); // Adjust the padding value when the keyboard is closed
            },
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View className='flex-1 bg-white'>
            <KeyboardAvoidingView
                style={{ flex: 1, }}
                behavior={(Platform.OS === 'ios' ? 'padding' : null) as 'height' | 'position' | 'padding' | undefined}
                keyboardVerticalOffset={height}
            >
                <View className='px-[16px] pt-[13px] flex-[0.9] relative' >
                    <GooglePlacesAutocomplete
                        ref={searchRef}
                        placeholder='Où souhaitez-vous louer?'
                        styles={SearchBoxTextInput}
                        minLength={2}
                        debounce={300}
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            console.log(data, details);
                        }}
                        query={{
                            key: "AIzaSyBD-xaHdgobMyufM5tW3whuusr8l5J57X0",
                            language: 'en',
                        }}
                        textInputProps={{
                            onChangeText: handleInputChange,
                            value: searchValue,
                        }}
                        renderLeftButton={renderLeftButton}
                        listViewDisplayed={'auto'}
                    />
                    {/* current Location */}
                    <View className={`absolute left-8  pt-[25px] w-[95%]  `} style={{ top: bottomPadding }}>
                        <View className='flex-row border-b border-[#E0E0E0] pb-[16px] '>
                            <View>
                                <MaterialIcons name='my-location' size={16} color={COLORS.primaryOrangeHex} />
                            </View>
                            <View className='px-[16px]'>
                                <Text className='text-[14px] font-neomal text-[#444444]'>Position actuelle</Text>
                            </View>
                        </View>
                        <View className='py-[16px] '>
                            <Text className='text-[12px] font-semibold text-[#444444] '>Vos dernières recherches</Text>
                        </View>

                        <View >
                            {
                                Array(3).fill(3).map((_, i) => (
                                    <View className='flex-row items-center border-[#E0E0E0] border-b w-full pb-[16px] mb-4' key={i}>
                                        <View>
                                            <Entypo name='back-in-time' size={16} color={COLORS.primaryBlackRGBA} />
                                        </View>
                                        <View className='px-[16px]'>
                                            <Text className='text-[14px] font-neomal text-[#444444]'>Position actuelle</Text>
                                        </View>
                                    </View>
                                ))
                            }
                            <View className='flex-row justify-center items-center' >
                                <Image source={require('../assets/googlepower.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
const SearchBoxTextInput = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInputContainer: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 40,
        fontSize: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 6,
    },
    listView: {
        backgroundColor: COLORS.primaryWhiteHex,
        zIndex: 1,
        marginLeft: 30,
        marginRight: 20,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 1,

    },
    row: {
        flexDirection: 'row', // Make row items flow horizontally
        alignItems: 'flex-start', // Align content to the bottom of the row
        flexWrap: 'wrap', // Allow content to wrap to the next line if needed
        width: '100%', // Set a specific width to ensure wrapping
    },
    description: {
        flex: 1, // Let the description text take up remaining space
        alignSelf: 'flex-start', // Align the description text to the top
    },
    terms: {
        alignSelf: 'flex-start', // Align the terms text to the bottom
    },


})

export default SearchScreen
