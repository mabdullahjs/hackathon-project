import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", backgroundColor: "white", padding: 10, position: 'relative', bottom: -270 }}>
        <Icon name="home" size={30} color="grey" />
        <Icon name="shoppingcart" size={30} color="grey" />
        <Icon name="user" size={30} color="grey" />
      </View>
    </View>
  )
}

export default Cart