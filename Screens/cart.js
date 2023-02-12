import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();
    return (


        <View>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Setting</Text>
            <View style={{ alignItems: 'center', paddingTop: 30 }}>
                <Image
                    source={require('../Screens/images/Ellipse4.png')}
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20 }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 20 }}>Inzemam Malik</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>Just Now Pending</Text>
                        <Text style={{ color: 'grey' }}>2x Item Name</Text>
                        <Text style={{ color: 'grey' }}>3x Item Name</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'black' }}>4827458925637856</Text>
                        <Text style={{ color: '#61B846', fontSize: 17 }}>Rs:180</Text>
                    </View>

                </View>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Text style={{ color: 'grey' }}>
                        ____________________________________________
                    </Text>
                </View>
            </View>

            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20 }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 20 }}>Inzemam Malik</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>Just Now Pending</Text>
                        <Text style={{ color: 'grey' }}>2x Item Name</Text>
                        <Text style={{ color: 'grey' }}>3x Item Name</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'black' }}>4827458925637856</Text>
                        <Text style={{ color: '#61B846', fontSize: 17 }}>Rs:180</Text>
                    </View>

                </View>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Text style={{ color: 'grey' }}>
                        ____________________________________________
                    </Text>
                </View>
            </View>

            <View style={{ paddingTop: 30, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: "#61B846", width: '50%', padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>LOGOUT</Text>
                </TouchableOpacity>
            </View>










            <View style={{ position: 'absolute', bottom: -170, width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text onPress={() => navigation.navigate('Home')} style={{ color: "black" }}><Icon name="home" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('Cart')} style={{ color: "black" }}><Icon name="shoppingcart" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('User')} style={{ color: "black" }}><Icon name="user" size={30} color="grey" /> </Text>
                </View>
            </View>
        </View>
    )
}

export default Cart