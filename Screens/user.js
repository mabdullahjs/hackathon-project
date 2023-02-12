import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const User = () => {
    return (
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

            <View>
                <View>
                    <Image
                        style={{ width: 80 }}
                        source={require('../Screens/images/Rectangle12.png')}
                    />
                    <Text style={{color:'black'}}>- 0 +</Text>
                    <Text style={{color:'black'}}>Item name</Text>
                    <Text style={{color:'black'}}>
                        Rs:320
                    </Text>
                </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: "space-evenly", backgroundColor: "white", padding: 10, position: 'relative', bottom: -600 }}>
                <Icon name="home" size={30} color="grey" />
                <Icon name="shoppingcart" size={30} color="grey" />
                <Icon name="user" size={30} color="grey" />
            </View>
        </View>
    )
}

export default User