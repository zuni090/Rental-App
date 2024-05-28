import { Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View, Image, ToastAndroid, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [storedUserData, setStoredUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AsyncStorage.getItem('@userData');
        if (res) {
          setStoredUserData(JSON.parse(res));
          console.log(storedUserData)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show('Please fill in all fields!', ToastAndroid.LONG);
      return;
    }

    if (storedUserData && email === storedUserData.email && password === storedUserData.password) {
      ToastAndroid.show('Login successful!', ToastAndroid.LONG);
      setEmail('');
      setPassword('');
      navigation.navigate('Bottomtabs'); // Navigate to the Bottomtabs screen
    } else {
      ToastAndroid.show('Invalid email or password!', ToastAndroid.LONG);
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={{ flex: 1, marginVertical: 10 }}>
                    <View style={styles.container}>
                        <View style={styles.logoview}>
                            <Image source={require("../assets/img.png")} style={styles.logo} />
                        </View>
                        <Text style={styles.heading}>Welcome Back,</Text>
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
                            placeholder="Password"
                            placeholderTextColor={'black'}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                        <View style={styles.button}>
                            <Button title="Login" onPress={handleLogin} color="#556b2f" />
                            <Pressable onPress={handleSignup}>
                                <View style={styles.textView}>
                                <Text style={styles.text}>Don't have an account? Sign Up</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        margin: 1,
        flex: 1,
        paddingHorizontal:15
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
    button: {
        marginTop: 30,
        width: "90%",
        alignSelf: 'center',
    },
    text: {
        marginTop: 10,
    },
    logo:{
        alignSelf:'center',
        height:200,
        width:200,
        resizeMode:'contain',
    },
    logoview:{
        top:80,
        height:'auto',
        width:"100%",
        marginBottom:50,
    },
    heading: {
        marginTop:2,
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 5,
    },
    textView:{
        justifyContent:"center",
        alignItems:"center"
    },
})