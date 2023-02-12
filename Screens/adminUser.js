import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    Image,
    PermissionsAndroid,
} from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const AdminUser = () => {
    const [list, setList] = useState(['Fruit', 'Vegetable', 'Meat']);
    const [list2, setList2] = useState([]);
    const [selectedCountry, setSetSelectedCountry] = useState('Select Country');
    const [isClicked, setIsClicked] = useState(false);
    const [firstName, setfirstName] = useState('');
    const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
    let options = { savePhotos: true, mediaType: 'photo' };
    const [images, setimages] = useState([
        { src: require('../Screens/images/Rectangle12.png') },
        { src: require('../Screens/images/Rectangle12.png') },
        { src: require('../Screens/images/Rectangle12.png') },
        { src: require('../Screens/images/Rectangle12.png') },
        { src: require('../Screens/images/Rectangle12.png') },
        { src: require('../Screens/images/Rectangle12.png') },
        { src: require('../Screens/images/Rectangle12.png') },
    ]);

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
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <View
                    style={{
                        width: '100%',
                        height: 90,
                        backgroundColor: '#fff',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../Screens/images/Rectangle12.png')}
                            style={{ width: 80, height: 80, borderRadius: 40 }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '600' }}>
                                Mr Ahmed
                            </Text>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '600' }}>
                                Admin
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Icon name="shoppingcart" size={30} color="#000" />
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            color: '#7CFC00',
                            fontSize: 24,
                            fontWeight: '600',
                            marginLeft: 10,
                            marginVertical: 10,
                        }}>
                        Add New Item
                    </Text>
                </View>
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
                    placeholder="Item Name"
                    onChangeText={value => setfirstName(value)}
                    value={firstName}
                />

                {/* <Text style={styles.heading}></Text> */}
                <TouchableOpacity
                    style={styles.dropdown}
                    onPress={() => setIsClicked(!isClicked)}>
                    <Text>{selectedCountry}</Text>
                    {isClicked ? (
                        <Icon name="arrowup" size={30} color="#000" />
                    ) : (
                        <Icon name="arrowdown" size={30} color="#000" />
                    )}
                </TouchableOpacity>
                {isClicked ? (
                    <View style={styles.list}>
                        <TextInput
                            placeholder="Search"
                            style={styles.search}
                            onChangeText={txt => {
                                onSearch(txt);
                            }}
                        />
                        <FlatList
                            data={list}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.dropdownlist}
                                        onPress={() => {
                                            setIsClicked(!isClicked);
                                            setSetSelectedCountry(item);
                                        }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                ) : null}
                <TextInput
                    style={styles.input}
                    placeholder="Item Name"
                    onChangeText={value => setfirstName(value)}
                    value={firstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Item Name"
                    onChangeText={value => setfirstName(value)}
                    value={firstName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert(`firstName: ${firstName}\nlastName: ${lastName}`)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' , backgroundColor:'white' , padding:10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text onPress={() => navigation.navigate('AdminProduct')} style={{ color: "black" }}><Icon name="home" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('Setting')} style={{ color: "black" }}><Icon name="shoppingcart" size={30} color="grey" /> </Text>
                    <Text onPress={() => navigation.navigate('AdminUser')} style={{ color: "black" }}><Icon name="user" size={30} color="grey" /> </Text>
                </View>
            </View>
        </View>
    );
};

export default AdminUser;

const styles = StyleSheet.create({
    sliderBox: {
        width: width,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        width: '100%',
        height: '90%',
        // backgroundColor: 'green',
        borderRadius: 10,
    },
    input: {
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        paddingHorizontal: 16,
        marginVertical: 5,
        backgroundColor: '#f1f1f1',
        fontSize: 16,
        borderRadius: 35,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginVertical: 30,
    },
    category: {
        width: width,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: '800',
        alignSelf: 'center',
        marginTop: 100,
    },
    dropdown: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    icon: {
        width: 20,
        height: 20,
    },
    list: {
        width: '90%',
        height: 300,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        alignSelf: 'center',
    },
    search: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: '#f1f1f1',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    dropdownlist: {
        width: '80%',
        height: 50,
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    button: {
        width: responsiveWidth(70),
        height: responsiveHeight(8),
        backgroundColor: '#7CFC00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 10,
        // marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
    },
});