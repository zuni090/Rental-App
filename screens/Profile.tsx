import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Profile() {
  // Example user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '(123) 456-7890',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <View style={styles.container}>
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
        <View style={styles.infoBox}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.info}>{user.phone}</Text>
        </View>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // This makes the image circular
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
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
