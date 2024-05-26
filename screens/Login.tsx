import { Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';

function Login({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<any>('');

    const handlelogin = () => {
        navigation.navigate('Bottomtabs')
    }

    const handlesignup = () => {
        navigation.navigate('Signup')
    }
    return (
        <SafeAreaView style={{ flex: 1, marginVertical: 10 }}>
            <View style={styles.container}>
                <View style={styles.logoview}>
                    <Image source={require("../assets/img.png")} style={styles.logo} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={'black'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={'black'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <View style={styles.button}>
                    <Button title="Login" onPress={handlelogin} color="#556b2f" />
                    <Pressable onPress={handlesignup}>
                        <Text style={styles.text}>Don't have an account ?                       Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        margin: 22,
        flex: 1,
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
})