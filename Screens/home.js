// 
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Home = () => {
  let options = {savePhotos: true, mediaType: 'photo'};

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const picture = await launchCamera(options);
      console.log('picture', picture);
    } else {
      console.log('Error Succed');
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log(result);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: '#000', marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 15}} onPress={openCamera}>
          Open Camera
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: '#000', marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 15}} onPress={openGallery}>
          Open Gallery
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;