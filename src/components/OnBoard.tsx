import { Image, ImageProps, Text, View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { width } from '../theme/theme'

// interface onBoardProps {
//     id: number,
//     img: ImageProps,
//     heading: string,
//     desc: string
// }

const OnBoard = ({ item }: any) => {

    let { image, subtitle, title } = item.item
    return (
        <View className=' justify-center items-center flex-1' >
            <Image source={image} style={{ height: width, width: width, resizeMode: 'contain' }} />
            <View style={styles.textWrapper}>
                <Text className='font-bold text-[22px] text-[#FF8C00] text-center max-w-[260px]'>{title}</Text>
                <Text className='font-normal pt-4 text-[14px] text-[#444444] justify-center items-center text-center max-w-[280px]'>{subtitle}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imgWrapper: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgStyle: {
        justifyContent: 'center'
    },
    textWrapper: {
        paddingTop: 20,
        justifyContent:'center',
        alignItems:'center',

    }
})


export default OnBoard
