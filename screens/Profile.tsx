import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image, ToastAndroid, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function Profile({ navigation }: { navigation: any }) {
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

  const handleLogout = async () => {
    try {
      ToastAndroid.show('Logged off Successfully!', ToastAndroid.LONG);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
      ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.LONG);
    }
  };

  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem('@userData');  // this line removes user object and user details do not show on logging in again.
      ToastAndroid.show('Account Deleted Successfully!', ToastAndroid.LONG);
      navigation.navigate('Signup');
    } catch (error) {
      console.error('Error logging out:', error);
      ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.LONG);
    }
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
      updateUserImage((result.assets[0].uri));
    }
  };
  const updateUserImage = (newImage: any) => {
    setUser((prevUser: any) => ({ ...prevUser, image: newImage }));
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

      <Pressable onPress={pickImage} style={styles.camera}>
        <Feather name="camera" size={24} color="#556b2f" />
      </Pressable>
      
      <Text style={styles.heading}>{user.name}</Text>
      <View style={styles.divider} />
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.info}>{user.address}</Text>
        </View>
      </View>
      <View style={styles.logoutBtn}>
        <Button title="Logout" onPress={handleLogout} color="#800000" />
      </View>
      <View style={styles.logoutBtn}>
        <Button title="Delete" onPress={handleDelete} color="purple" />
      </View>
    </View>
  );
}

export default Profile;

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
  },
  logoview: {
    width: "100%",
    paddingBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderColor: 'lightgrey',
    borderWidth: 4,
  },
  camera: {
    position: 'absolute',
    right: 110,
    top: 260,
    height: '5%',
    width: '11%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',

  },
  noImage: {
    color: 'red',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  logoutBtn: {
    marginTop: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: "auto",
    paddingHorizontal: 25,
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 35,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 70,
  },
  info: {
    fontSize: 18,
    color: '#333',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});
