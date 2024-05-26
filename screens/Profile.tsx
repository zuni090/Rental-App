import React from 'react';
import { Button, StyleSheet, Text, View, Image , ToastAndroid } from 'react-native';

function Profile({navigation}: {navigation: any}) {

  const handlelogout = () =>{;
    ToastAndroid.show('Logged off Successfully!', ToastAndroid.LONG);
    navigation.navigate('Login')

}
  // Example user data
  const user = {
    name: 'Muhammad Zunique',
    email: 'zunique@gmail.com',
    address: 'Block 13D-1, House # L-92, Gulshan Iqbal, Karachi',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoview}>
          <Image source={require("../assets/img.png")} style={styles.logo} />
      </View>
      <Image source={{ uri: user.image }} style={styles.profileImage} />
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
      <Button title="Logout ?" onPress={handlelogout} color="#800000" />
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
    backgroundColor: 'white', // Light background color
  },
  logo:{
    alignSelf:'center',
    height:200,
    width:200,
    resizeMode:'contain',
},
logoview:{
    top:8,
    height:'auto',
    width:"100%",
    marginBottom:0,
},
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // This makes the image circular
    marginBottom: 10,
  },
  logoutBtn:{
    marginTop:20,
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginLeft:"auto",
    paddingHorizontal:25
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginHorizontal:35
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
    width: 70, // Fixed width for labels
  },
  info: {
    fontSize: 18,
    color: '#333',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd', // Divider color
    marginVertical: 10,
  },
});
