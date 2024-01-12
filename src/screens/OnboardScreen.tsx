import { FlatList, Text, View } from 'react-native'
import React from 'react'
import OnBoard from '../components/OnBoard'

const OnboardScreen = () => {

    const onBoard = [
        {
            id: 0,
            img: require('../assets/onboard1.png'),
            heading: "Vos locations à partir de 20 000 FCFA par jour",
            desc: "Louer un véhicule selon vos besoins n’importe quand et même toute l’année, en toute sécurité."
        },
        {
            id: 1,
            img: require('../assets/onboard2.png'),
            heading: "Gagnez au moins 500 000 FCFA par mois",
            desc: "Vous souhaitez mettre votre véhicule en location?  C’est simple, rapide et facile.Inscrivez vous en seulement 3 minutes."
        }
    ]


    return (
        <View className='flex-1 justify-center items-center '>
            <FlatList
                data={onBoard}
                renderItem={(item: any) => <OnBoard item={item} />}
                keyExtractor={(item: any) => item.id}
                horizontal
                showsHorizontalScrollIndicator
                bounces={false}
                pagingEnabled
            />
        </View>
    )
}

export default OnboardScreen
