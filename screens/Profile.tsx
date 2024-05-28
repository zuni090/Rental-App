import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile({ navigation }: { navigation: any }) {
  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    address: '',
    image: '',
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
      await AsyncStorage.removeItem('@userData');
      ToastAndroid.show('Logged off Successfully!', ToastAndroid.LONG);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
      ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.LONG);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoview}>
        <Image source={require("../assets/img.png")} style={styles.logo} />
      </View>
      <Image
        source={{ uri: user.image || 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      {!user.image && <Text style={styles.noImage}>No image available</Text>}
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
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  logoview: {
    top: 8,
    height: 'auto',
    width: "100%",
    marginBottom: 0,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
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
