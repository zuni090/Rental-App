import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { roomsType } from '../types';

function Apartment(item: roomsType) {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const onPressHandler = () => {
    navigation.navigate('Details', { item });
  };

  return (
    <Pressable onPress={onPressHandler} style={styles.pressable}>
      <View style={styles.gridItem}>
        <View style={{ flex: 1 }}>
          <Image style={styles.stretch} source={{ uri: item.images[0].url }}/>
        </View>
        <View style={styles.textBox}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.details.price}/month</Text>
          </View>
          <View style={styles.arrow}>
            <Ionicons name="arrow-forward" size={28} color="#000" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default Apartment;

const styles = StyleSheet.create({
  pressable: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  stretch: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  price: {
    marginTop: 5,
    color: '#576F72',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  arrow: {
    justifyContent: 'center',
  },
});
