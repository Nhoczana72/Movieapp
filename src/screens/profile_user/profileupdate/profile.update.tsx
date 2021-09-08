import React, { useState, useEffect, Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { Modal } from '../../../components/Modal'
import storage from '@react-native-firebase/storage'
import Iconcamera from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import * as Progress from 'react-native-progress';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMenu from 'react-native-vector-icons/Entypo';

export const ProfileUpdate = (props) => {
    const noimage = '../../assets/image/no_Image.jpg';

    //    const geturl = storage().ref(`${user}`).getDownloadURL().then((url:any) => { return  seturi(url) } );


    return (
        <View style={styles.container}>
            <View
                style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: 'black', paddingTop: 15 }}>
                <TouchableOpacity style={{ width: 30, height: 30 }}
                    onPress={() => props.navigation.openDrawer()}>
                    <IconMenu name="menu" color="#FF9900" size={25} />
                </TouchableOpacity>
                <Text style={styles.txtitle}>Profile Update</Text>
            </View>


            <ScrollView>
                <View style={styles.viewform}>
                    <View style={styles.viewdetailprofile}>
                        <Text>Gender</Text>
                        <TextInput style={styles.txinput} />
                    </View>

                    <View style={styles.viewdetailprofile}>
                        <Text>Birthday</Text>
                        <TextInput style={styles.txinput} />
                    </View>
                    <View style={styles.viewdetailprofile}>
                        <Text>Telephone</Text>
                        <TextInput style={styles.txinput} />
                    </View>
                    <View style={styles.viewdetailprofile}>
                        <Text>Address</Text>
                        <TextInput style={styles.txinput} />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};
