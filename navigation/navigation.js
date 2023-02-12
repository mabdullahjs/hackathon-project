import React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/login';
import Singup from '../Screens/signup';
import Home from '../Screens/home';
import Splash from '../Screens/splash'
import User from '../Screens/user';
import Cart from '../Screens/cart';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Singup} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
        <Stack.Screen name="User" component={User} options={{headerShown: false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;



