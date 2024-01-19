import { FlatList, NativeSyntheticEvent, NativeScrollEvent, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, {useRef, useState } from 'react'
import OnBoard from '../components/OnBoard'
import { COLORS, width } from '../theme/theme';
const OnboardScreen = ({ navigation }: any) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const currentRef = useRef<FlatList>(null)

    const onBoard: any = [
        {
            id: 0,
            backgroundColor: '#fff',
            image: require('../assets/onboard1.png'),
            title: "Vos locations à partir de 20 000 FCFA par jour",
            subtitle: "Louer un véhicule selon vos besoins n’importe quand et même toute l’année, en toute sécurité."
        },
        {
            id: 1,
            image: require('../assets/onboard2.png'),
            title: "Gagnez au moins 500 000 FCFA par mois",
            subtitle: "Vous souhaitez mettre votre véhicule en location? C’est simple, rapide et facile.Inscrivez vous en seulement 3 minutes."
        }
    ]

    const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndexs = Math.round(currentOffsetX / width)
        setCurrentIndex(currentIndexs)
    }

    const handleNext = () => {
        const nextStep = currentIndex + 1;
        if (nextStep === 2) {
            navigation.navigate('SignIn')
        }
        else if (currentIndex !== onBoard?.length) {
            const offSet = nextStep * width;
            currentRef?.current?.scrollToOffset({ offset: offSet })
            setCurrentIndex(currentIndex + 1)
        }
    }


    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <StatusBar backgroundColor={COLORS.primaryWhiteHex} barStyle={'dark-content'} />
            <FlatList
                ref={currentRef}
                data={onBoard}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                renderItem={(item: any) => <OnBoard item={item} />}
                keyExtractor={(item: any) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                pagingEnabled
            />
            <View className='absolute bottom-5 w-full '>
                <View className='flex-row gap-3 justify-center items-center '  >
                    {
                        onBoard?.map((_: any, i: number) => (
                            <View key={i} className={` ${currentIndex === i ? 'bg-[#FF8C00]' : ' bg-gray-200'} rounded-full w-[10px] h-[10px]`}></View>
                        ))
                    }
                </View>
                <View className='mt-3 flex justify-center items-center'>
                    <TouchableOpacity className={` rounded-md  bg-[#FF8C00] w-[95%] h-[40px] justify-center items-center text-center`} onPress={() => handleNext()}>
                        <Text className='text-[14px] font-semibold text-center text-white '>Suivant</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default OnboardScreen
