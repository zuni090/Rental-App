import { StyleSheet, Text, View, Pressable, Button, Image } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

function TakePhoto({ navigation }: { navigation: any }) {
  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    address: '',
    image: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('@userData');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      updateUserImage(result.assets[0].uri);
    }
  };

  const updateUserImage = async (newImage: any) => {
    const updatedUser = { ...user, image: newImage };
    setUser(updatedUser);
    try {
      await AsyncStorage.setItem('@userData', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoview}>
        <Image source={require("../assets/img.png")} style={styles.logo} />
      </View>

      {user.image ? (
        <Image source={{ uri: user.image }} style={styles.profileImage} />
      ) : (
        <Image source={require("../assets/placeholder.png")} style={styles.profileImage} />
      )}

      <Pressable onPress={pickImage} style={styles.imagePicker}>
        <Text style={styles.imagePickerText}>Upload Photo</Text>
      </Pressable>

      <View style={styles.button}>
        <Button title="Done" onPress={handleLogin} color="#556b2f" />
      </View>
    </View>
  )
}

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 200,
    resizeMode: 'contain',
    marginBottom:30,
  },
  logoview: {
    width: "100%",
    paddingBottom: 30,
  },
  button: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
  },
  imagePicker: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
    width: '90%',
  },
  imagePickerText: {
    color: 'black',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
    alignSelf: 'center',
  },
})