import { useNavigation } from "@react-navigation/native";
import { Image, Share, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import { COLORS } from "../theme/theme";

export const HeaderComponent = ({ type }: { type: string }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            {type === "filter" ?
                <Text className='text-[#FF8C00] font-semibold text-[14px]'>
                    Réinitialiser
                </Text>
                :
                <Text className='text-[#FF8C00] font-semibold text-[14px]'>
                    Fermer
                </Text>
            }
        </TouchableOpacity>
    );
};

export const CustomRightHeader = () => {
    const navigation: any = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Filter')} className='w-[30px] h-[30px] border-[#E0E0E0] rounded-full border justify-center items-center '>
            <MaterialCommunityIcons name="tune-variant" size={14} color={"#FF8C00"} />
        </TouchableOpacity>
    );
};

export const CustomRightHeaderShare = ({ setShare }: any) => {
    const handleShare = async () => {
        // if (!hasPermission) {
        //     try {
        //         const result = await Share.requestPermissionsAsync();
        //         if (result.granted) {
        //             AsyncStorage.setItem('sharePermission', 'granted');
        //             setHasPermission(true);
        //         } else {
        //             // Permission denied
        //             return;
        //         }
        //     } catch (error) {
        //         console.error('Error requesting share permission:', error);
        //         return;
        //     }
        // }
        setShare(true)

        // Now that we have permission, open the share dialog
        try {
            await Share.share({
                message: '',
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <TouchableOpacity onPress={() => handleShare()} className='w-[30px] h-[30px] border-[#E0E0E0] justify-center items-center '>
            <Ionicons name="share-outline" size={24} />
        </TouchableOpacity>
    );
};



export const CustomHeader = ({ startDate, endDate }: { startDate: string, endDate: string }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text className='text-[12px] font-normal text-[#ACACAC] px-2'>{startDate}</Text>
            <AntDesign name="arrowright" size={15} color="#ACACAC" />
            <Text className='text-[12px] font-normal text-[#ACACAC] px-2'>{endDate}</Text>
        </View>
    );
};
// Search Header untility screen 
export const CustomSearchHeader = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <TextInput placeholder="Search" autoFocus />
        </View>
    );
};

export const CustomSearchHeaderRight = ({ setChangeHeader }: any) => {
    return (
        <TouchableOpacity onPress={() => setChangeHeader(true)} >
            <Feather name="search" color={"#FF8C00"} size={24} />
        </TouchableOpacity>
    );
};

export const CustomSearchHeaderLeft = ({ changeHeader, setChangeHeader }: any) => {
    const navigation: any = useNavigation();
    return (
        <TouchableOpacity onPress={() =>
            changeHeader ?
                setChangeHeader(false)
                :
                navigation.goBack()
        }  >
            {changeHeader ?
                <AntDesign name="close" color={"black"} size={24} />
                :
                <AntDesign name="arrowleft" color={"black"} size={24} />
            }
        </TouchableOpacity>
    );
};

// Message center and right section

export const CustomMessageCenter = () => {
    return (
        <View className="flex-row items-center gap-3">
            <Image source={require('../assets/avatar.png')} className="w-[39px] h-[39px]" />
            <View>
                <Text className="text-[#444444] font-semibold text-[14px]">Florencio Dorrance</Text>
                <View className="flex-row items-center gap-2">
                    <View className='border border-white rounded w-[10px] h-[10px] bg-[#06A551] '></View>
                    <Text className="text-[#98A2B3] font-normal text-[10px]">En ligne</Text>
                </View>
            </View>
        </View>
    );
};

export const CustomMessageRight = () => {
    return (
        <View>
            <View className='bg-[#FFF8EF] justify-center items-center w-[45px] h-[45px] rounded-lg'>
                <FontAwesome6Icon name="phone-volume" size={20} color={COLORS.primaryOrangeHex} />
              </View>
        </View>
    )
}


