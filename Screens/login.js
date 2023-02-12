import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    // const [message, setMessage] = React.useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {
        if (email === 'mabdullah2037@gmail.com' && password === 'bustop123') {
            navigation.navigate('AdminProduct')
        } else {
            try {
                const isUserLogin = await auth().signInWithEmailAndPassword(
                    email,
                    password,
                );
                // setMessage('');
                console.log(isUserLogin);

                navigation.navigate('Home', {
                    email: isUserLogin.user.email,
                    uid: isUserLogin.user.uid,
                });
            } catch (err) {
                console.log(err);

                // setMessage(err.message);
            }
        }

    };


    return (
        <SafeAreaView style={styles.view}>
            <View style={{ alignItems: "center", paddingBottom: 40 }}>
                <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold", textAlign: "center" }}>SAYLANI WELFARE</Text>
                <Text style={{ color: "#024F9D", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>ONLINE DISCOUNT STORE</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
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
            <View style={{ alignItems: "center", paddingTop: 30 }}>
                {/* <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: "black", width: "40%", padding: 8, borderRadius: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>Login</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: "#61B846", width: '50%', padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text onPress={() => navigation.navigate('Signup')} style={styles.display}>Not a user Signup!</Text>
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
        color: "black",
        borderRadius: 10,
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
        paddingTop: 20,
        textAlign: "center"
    }


});

export default Login;
