import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    ScrollView,
    TouchableOpacity,
    PermissionsAndroid,
} from 'react-native';
import React, { useState } from 'react';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight,
} from 'react-native-responsive-dimensions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const [firstName, setfirstName] = useState('');
    let options = { savePhotos: true, mediaType: 'photo' };

    const openGallery = async () => {
        const result = await launchImageLibrary(options);
        console.log(result);
    };

    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
                <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff' }}>
                    <Text
                        style={{
                            alignSelf: 'center',
                            marginTop: 40,
                            fontSize: 30,
                            color: '#000',
                            fontWeight: '500',
                        }}>
                        Setting
                    </Text>
                    <Image
                        source={require('../Screens/images/Rectangle12.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 60,
                            alignSelf: 'center',
                            marginVertical: 10,
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Update Full Name"
                        onChangeText={value => setfirstName(value)}
                        value={firstName}
                    />
                    <View
                        style={{
                            backgroundColor: '#f1f1f1',
                            height: 200,
                            width: '95%',
                            alignSelf: 'center',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity>
                            <Icon name="camera" size={45} color="#000" onPress={openGallery} />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="New Category Name"
                        onChangeText={value => setfirstName(value)}
                        value={firstName}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => alert(`ALLAH`)}>
                        <Text style={styles.buttonText}>Add Item</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={{ color: '#7CFC00', fontSize: 22, fontWeight: '600' }}>
                            All Categories
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 550 }}>
                        <ScrollView>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={[1, 1, 1, 1, 1, 1, 1]}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            backgroundColor: '#f1f1f1',
                                            borderWidth: 0.5,
                                            borderRadius: 10,
                                            marginHorizontal: 20,
                                            paddingHorizontal: 10,
                                        }}>
                                        <View>
                                            <Image
                                                source={require('../Screens/images/Rectangle12.png')}
                                                style={{ width: 30, height: 60 }}
                                            />
                                        </View>
                                        <View>
                                            <Text
                                                style={{ fontSize: 20, fontWeight: '600', color: '#000' }}>
                                                Fruit
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            />
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => alert(`ALLAH`)}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 3, width: '100%' , backgroundColor:'white' , padding:10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text onPress={() => navigation.navigate('AdminProduct')} style={{ color: "black" }}><Icon name="home" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('Setting')} style={{ color: "black" }}><Icon name="shoppingcart" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('AdminUser')} style={{ color: "black" }}><Icon name="user" size={30} color="grey" /> </Text>
                </View>
            </View>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    input: {
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        paddingHorizontal: 16,
        marginVertical: 20,
        backgroundColor: 'white',
        fontSize: 16,
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        alignSelf: 'center',
    },
    button: {
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: '#7CFC00',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

  // <View

/**
   *        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontSize: 25}}>Inzimam Malik</Text>
          <Text>03111260357</Text>
        </View>
        <Text style={{color: '#1d3557', fontSize: 20, color: '#000'}}>
          2 item
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#1d3557', fontSize: 22}}>Total</Text>
          <Text style={{color: '#1d3557', fontSize: 22}}>2200</Text>
        </View><
   */