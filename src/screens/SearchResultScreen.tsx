import {
  ActivityIndicator,
  Dimensions,
  // ActivityIndicator, 
  // Text,
  View
} from 'react-native'
import React, { useState } from 'react'
import {
  // FlatList,
  ScrollView
} from 'react-native'
import SearchLists from '../components/SearchResult/SearchLists';
import RecordNotFound from '../components/RecordNotFound';
// import axios, { AxiosResponse } from 'axios';
interface Item {
  title: string;
  // Add more properties as needed
}

const SearchResultScreen = () => {
  const [lists, setLists] = useState([{list:""}])
  const [loading, setLoading] = useState(false)

  const { height } = Dimensions.get('window')
  // const [page, setPage] = useState<number>(1);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [endReached, setEndReached] = useState<boolean>(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const response: AxiosResponse<Item[]> = await axios.get(`YOUR_API_URL?page=${page}`);
  //     const newData: Item[] = response.data;
  //     setData(prevData => [...prevData, ...newData]);
  //     setPage(prevPage => prevPage + 1);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setLoading(false);
  //   }
  // };

  // const handleEndReached = () => {
  //   if (!endReached && !loading) {
  //     fetchData();
  //   }
  // };

  // const renderItem = ({ item }: { item: Item }) => (
  //   <View style={{ padding: 10 }}>
  //     <Text>{item.title}</Text>
  //   </View>
  // );

  // const renderFooter = () => {
  //   if (!loading) return null;
  //   return <ActivityIndicator style={{ marginVertical: 20 }} size="large" color="#0000ff" />;
  // };

  return (
    <ScrollView className='flex-1 bg-white px-[16px] py-[16px]'
      showsVerticalScrollIndicator={false}
    >

      {
        !loading && lists?.length > 0 ? Array(10).fill(10).map((_, index) => (
          <View key={index}>
            <SearchLists />
          </View>
        ))
          :
          <View>
            {loading ? (
              <View style={{ height: height - 300 }} className='bg-white flex-1 justify-center items-center '>
                <ActivityIndicator size={60} color="#FF8C00" />
              </View>
            )
              : < RecordNotFound OuterType='' InnerType="location" />
            }
          </View>
      }
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      /> */}
    </ScrollView>
  )
}

export default SearchResultScreen
