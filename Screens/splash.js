import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ alignItems: "center" , paddingBottom:40 }}>
                <Image
                    source={require('../Screens/images/download.png')}
                />
            </View>
            <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold", textAlign: "center" }}>SAYLANI WELFARE</Text>
            <Text style={{ color: "#024F9D", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>ONLINE DISCOUNT STORE</Text>
            <View style={{alignItems:'center' , paddingTop:30}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{backgroundColor:"#61B846" , width:'50%' , padding:10 , borderRadius:10}}>
                <Text style={{fontSize:20 , textAlign:"center"}}>GET STARTED</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Splash