import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'


export const HeaderComponent = ({ type }: { type: string }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            {  type === "filter" ?
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
            <TextInput placeholder="Search" autoFocus  />
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

