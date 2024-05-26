import { Pressable,SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';

function Signup({ navigation }: { navigation: any }) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [password, setPassword] = useState<any>('');
    const [repassword, setRepassword] = useState<any>('');

    const handlesignup = () => {
        navigation.navigate('Login')
    }

    const handlelogin = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={{ flex: 1, marginVertical: 10 }}>
            <View style={styles.container}>
                <Text style={styles.heading}>Let's Get Started !</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={'black'}
                    value={name}
                    onChangeText={setName}
                    keyboardType="default"
                />
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
                    placeholder="Enter your address"
                    placeholderTextColor={'black'}
                    value={address}
                    onChangeText={setAddress}
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={'black'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Re enter password"
                    placeholderTextColor={'black'}
                    value={repassword}
                    onChangeText={setRepassword}
                    secureTextEntry={true}
                />
                <View style={styles.button}> 
                    <Button title="Signup" onPress={handlesignup} color="#556b2f"  />
                    <Pressable onPress={handlelogin}>
                        <Text style={styles.text}>Already have an account ? Log In</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        margin: 22,
        flex: 1,
    },
    heading: {
        marginTop:30,
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15,
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
        marginTop:30,
        width:"90%",
        alignSelf:'center',
    },
    text:{
        marginTop:10,
    }
})