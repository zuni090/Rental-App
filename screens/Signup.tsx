import { Pressable,SafeAreaView, TextInput, Button, StyleSheet,Image, Text, View , ToastAndroid , KeyboardAvoidingView , ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Signup({ navigation }: { navigation: any }) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [password, setPassword] = useState<any>('');
    const [repassword, setRepassword] = useState<any>('');

    const handleSignup = async () => {
        // Input validation
        if (!name || !email || !address || !password || !repassword) {
          ToastAndroid.show('Please fill in all fields!', ToastAndroid.LONG);
          return;
        }
    
        if (password !== repassword) {
          ToastAndroid.show('Passwords do not match!', ToastAndroid.LONG);
          return;
        }
    
        // Store data in AsyncStorage (assuming you want to store user data)
        try {
          const userData = {
            name,
            email,
            address,
            password
          };
          const data = await AsyncStorage.setItem('@userData', JSON.stringify(userData));
          console.log(userData);
          ToastAndroid.show('Signup successful!', ToastAndroid.LONG);
            setName("");
            setAddress("");
            setPassword("");
            setRepassword("");
            setEmail("");
          navigation.navigate('Login'); // Navigate to Login screen
        } catch (error) {
          console.error('Error saving data:', error);
          ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.LONG);
        }
      };

    const handlelogin = () => {
        navigation.navigate('Login')
    }

    
    const clearFields = () => {
        setName("");
        setAddress("");
        setPassword("");
        setRepassword("");
        setEmail("");
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.logoview}>
            <Image source={require("../assets/img.png")} style={styles.logo} />
          </View>
          <Text style={styles.heading}>Rent your Dreams !</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'black'}
            value={name}
            onChangeText={setName}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'black'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor={'black'}
            value={address}
            onChangeText={setAddress}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'black'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={'black'}
            value={repassword}
            onChangeText={setRepassword}
            secureTextEntry={true}
          />
          <Pressable onPress={clearFields}>
              <View style={styles.clearTextView}>
                <Text style={styles.ClearText}>Clear Fields ?</Text>
              </View>
            </Pressable>
          <View style={styles.button}>
            <Button title="Signup" onPress={handleSignup} color="#556b2f" />
            <Pressable onPress={handlelogin}>
              <View style={styles.textView}>
                <Text style={styles.text}>Already have an account ? Log In</Text>
              </View>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:15
    },
    heading: {
        marginTop:5,
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15,
    },
    textView:{
        justifyContent:"center",
        alignItems:"center"
    },
    logoview:{
        top:90,
        height:'auto',
        width:"100%",
        marginBottom:25,
    },
    logo:{
        alignSelf:'center',
        height:200,
        width:200,
        resizeMode:'contain',
    },
    input: {
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    button:{
        marginTop:20,
        width:"90%",
        alignSelf:'center',
    },
    clearTextView:{
        justifyContent:"center",
        alignItems:"flex-end",
        paddingHorizontal:20
    },
    text:{
        marginTop:10,
    },
    ClearText:{
        marginTop:2,
    }
})