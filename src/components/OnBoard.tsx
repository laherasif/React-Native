import { Image, ImageProps, Text, View, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

// interface onBoardProps {
//     id: number,
//     img: ImageProps,
//     heading: string,
//     desc: string
// }

const OnBoard = ({ item }: any) => {
    const { width } = useWindowDimensions()
    let { img, desc, heading } = item.item
    return (
        <View style={[styles.imgWrapper, { width }]}  >
            <Image source={img} style={[styles.imgStyle, { width, resizeMode: 'contain' }]} />
            <View style={styles.textWrapper}>
                <Text className='font-semibold text-[22px] text-[#FF8C00] text-center max-w-[250px]'>{heading}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imgStyle: {
        flex: 0.7,
        justifyContent: 'center'
    },
    textWrapper:{
        flex:0.3,
        paddingHorizontal:20,
        
    }
})


export default OnBoard
