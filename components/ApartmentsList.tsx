import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import Constants from 'expo-constants';
import { roomsType } from '../types';
import Apartment from './Apartment';
import { POSTS_URL1, POSTS_URL2 } from '../environment';

type apartmentsListType = {
  apartmentsListData: Array<roomsType>,
  title: string,
};

function ApartmentsList({ apartmentsListData, title }: apartmentsListType) {
  const [filteredData, setFilteredData] = useState<Array<roomsType>>([]);
  const [priceFilter, setPriceFilter] = useState<string>('');

  useEffect(() => {
    setFilteredData(apartmentsListData);
  }, [apartmentsListData]);

  const handlePriceFilter = () => {
    if (!priceFilter) {
      setFilteredData(apartmentsListData);
      return;
    }
    const filtered = apartmentsListData.filter(item => parseFloat(item.details.price.slice(1)) > parseFloat(priceFilter));
    setFilteredData(filtered);
  };

  const renderItem: ListRenderItem<roomsType> = ({ item }) => <Apartment {...item}/>;

  return (
    <SafeAreaView style={{ flex: 1 , marginVertical:1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>{title}</Text>
          <View style={styles.filterContainer}>
            <TextInput
              style={styles.input}
              placeholder="Price greater than"
              value={priceFilter}
              onChangeText={setPriceFilter}
              keyboardType="numeric"
            />
            <Button title="Apply" onPress={handlePriceFilter} color="#556b2f" />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {filteredData.length > 0 ? (
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item: roomsType) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text>No houses available</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ApartmentsList;

const styles = StyleSheet.create(({
  container: {
    margin: 15,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:12,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius:5
  },
}));
