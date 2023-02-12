import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const User = () => {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View>
                            <Text style={{ color: '#024F9D', fontSize: 20 }}>Shopping</Text>
                            <Text style={{ color: '#61B846', fontSize: 20 }}>Cart</Text>
                        </View>
                        <View style={{ paddingTop: 5 }}>
                            <Icon name="delete" size={30} color="#61B846" />
                        </View>

                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                            <Image
                                style={{ width: 80 }}
                                source={require('../Screens/images/Rectangle12.png')}
                            />
                            <Text style={{ color: 'black', paddingTop: 30 }}>- 0 +</Text>
                            <Text style={{ color: 'black', paddingTop: 30 }}>Item name</Text>
                            <Text style={{ color: 'black', paddingTop: 30 }}>
                                Rs:320
                            </Text>
                        </View>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                            <Image
                                style={{ width: 80 }}
                                source={require('../Screens/images/Rectangle12.png')}
                            />
                            <Text style={{ color: 'black', paddingTop: 30 }}>- 0 +</Text>
                            <Text style={{ color: 'black', paddingTop: 30 }}>Item name</Text>
                            <Text style={{ color: 'black', paddingTop: 30 }}>
                                Rs:320
                            </Text>
                        </View>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                            <Image
                                style={{ width: 80 }}
                                source={require('../Screens/images/Rectangle12.png')}
                            />
                            <Text style={{ color: 'black', paddingTop: 30 }}>- 0 +</Text>
                            <Text style={{ color: 'black', paddingTop: 30 }}>Item name</Text>
                            <Text style={{ color: 'black', paddingTop: 30 }}>
                                Rs:320
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <Text style={{ color: 'grey' }}>
                            ____________________________________________
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 25 }}>
                        <Text style={{ color: 'black' }}>Total</Text>
                        <Text style={{ color: 'black' }}>Rs:300</Text>
                    </View>
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 0.1,
                                padding: 10,
                                color: "black",
                                borderRadius: 1,
                            }}
                            placeholder="Full Name"
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 0.1,
                                padding: 10,
                                color: "black",
                                borderRadius: 1,
                            }}
                            placeholder="Contact"
                            placeholderTextColor="grey"
                        />
                    </View>

                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: "#61B846", width: '50%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 20, textAlign: "center" }}>PLACE ORDER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


            <View style={{ position: 'absolute', bottom: -60, width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text onPress={() => navigation.navigate('Home')} style={{ color: "black" }}><Icon name="home" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('Cart')} style={{ color: "black" }}><Icon name="shoppingcart" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('User')} style={{ color: "black" }}><Icon name="user" size={30} color="grey" /> </Text>
                </View>
            </View>
        </View >
    )
}

export default User