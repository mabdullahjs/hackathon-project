// // 
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   PermissionsAndroid,
// } from 'react-native';
// import React from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const Home = () => {
//   let options = {savePhotos: true, mediaType: 'photo'};

//   const openCamera = async () => {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       const picture = await launchCamera(options);
//       console.log('picture', picture);
//     } else {
//       console.log('Error Succed');
//     }
//   };

//   const openGallery = async () => {
//     const result = await launchImageLibrary(options);
//     console.log(result);
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <TouchableOpacity
//         style={{padding: 10, backgroundColor: '#000', marginVertical: 20}}>
//         <Text style={{color: 'white', fontSize: 15}} onPress={openCamera}>
//           Open Camera
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{padding: 10, backgroundColor: '#000', marginVertical: 20}}>
//         <Text style={{color: 'white', fontSize: 15}} onPress={openGallery}>
//           Open Gallery
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

import { View, Text, Image, TouchableOpacity , ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const [images, setimages] = useState([
    // require('../Screens/images/Rectangle16.png'),
    require('../Screens/images/Rectangle7.png'),
    require('../Screens/images/Rectangle1.png'),
    require('../Screens/images/Rectangle7.png'),
    require('../Screens/images/Rectangle1.png'),
    // require('../Screens/images/Rectangle12.png'),
    // require('../Screens/images/Rectangle16.png'),
    // require('../../assets/images/i1.png'),
    // require('../../assets/images/i1.png'),
    // require('../../assets/images/i1.png'),
    // require('../../assets/images/i1.png'),
  ]);
  const navigation = useNavigation();


  return (
    <View>
      <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <View>
          <Text style={{ color: "#61B846", fontSize: 15, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
          <Text style={{ color: "#024F9D", fontSize: 10, fontWeight: "bold" }}>ONLINE DISCOUNT STORE</Text>
        </View>
        <View>
          <Icon name="shoppingcart" size={30} color="grey" />
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingTop: 15 }}>
        <Image
          style={{ width: 330, borderRadius: 20 }}
          source={require('../Screens/images/Grocery.png')}
        />
      </View>
      <View>
        <Text style={{ color: "black", paddingTop: 10 }}>Shop By Category</Text>
      </View>
      {/* <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingTop: 30 }}>
        <Image
          style={{ width: 80 }}
          source={require('../Screens/images/Rectangle1.png')}
        />
        <Image
          style={{ width: 80 }}
          source={require('../Screens/images/Rectangle16.png')}
        />
        <Image
          style={{ width: 80 }}
          source={require('../Screens/images/Rectangle7.png')}
        />
      </View> */}
      <View>
      <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item}) => (
            <Image
              source={item}
              style={{
                width: 100,
                height: 100,
                // borderWidth: 2,
                resizeMode: 'contain',
                margin: 8,
              }}
            />
          )}
        />
      </View>

      <View>
        <View style={{flexDirection:'row' , paddingTop:30}}>
          <Image
            source={require('../Screens/images/Rectangle17.png')}
          />
          <View>
            <Text style={{ color: 'black' }}>Meat</Text>
            <Text style={{ color: 'grey' }}>This is product description</Text>
            <Text style={{ color: 'grey' }}>This is product description</Text>
          </View>
          <View>
            <Text style={{color:'black'}}>Rs:800 Per KG</Text>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity>
              <Text style={{ backgroundColor: "#61B846", width: '100%', padding: 5, borderRadius: 10 , fontSize:30 , textAlign:'center' }}>+</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>



      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", backgroundColor: "white", padding: 10, position: 'relative', bottom: -130 }}>
        <TouchableOpacity onpress={()=> navigation.navigate('Home')}>
        <Icon  name="home" size={30} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity  onpress={()=> navigation.navigate('Cart')}>
        <Icon  name="shoppingcart" size={30} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onpress={()=> navigation.navigate('User')}>
        <Icon  name="user" size={30} color="grey" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home