import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

const Singup = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [name, onChangeName] = React.useState('');
    const [contact, onChangeContact] = React.useState('');
    const [error, setError] = React.useState('');

    let navigation = useNavigation()

    const signing = async () => {

        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setError('User account created & signed in!');
                console.log('User account created & signed in!');
                navigation.navigate('Login')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setError('That email address is already in use!');
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    setError('That email address is invalid!');
                    console.log('That email address is invalid!');
                }

                setError("error");
            });
        onChangeEmail("")
        onChangePassword("")
        onChangeName("")
        onChangeContact("")
    }

    return (
        <SafeAreaView style={styles.view}>
            <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold", textAlign: "center" }}>SAYLANI WELFARE</Text>
            <Text style={{ color: "#024F9D", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>ONLINE DISCOUNT STORE</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Full Name"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="grey"

            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeContact}
                value={contact}
                keyboardType="numeric"
                placeholder="Contact Number"
                placeholderTextColor="grey"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry={true}
            />

            <View style={{ alignItems: "center", paddingTop: 20 }}>
                {/* <TouchableOpacity onPress={() => signing()} style={{ backgroundColor: "black", width: "40%", padding: 8, borderRadius: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>Submit</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => signing()} style={{ backgroundColor: "#61B846", width: '50%', padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text onPress={()=> navigation.navigate('Login')} style={styles.display}>Already a User? Login </Text>
            </View>
            <View>
                <Text style={styles.display}>{error}</Text>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        color: "black"
    },
    view: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "black",
        fontSize: 30,
    },
    display: {
        color: "black",
        fontSize: 14,
        paddingTop:30,
        textAlign:"center"
    }

});

export default Singup;