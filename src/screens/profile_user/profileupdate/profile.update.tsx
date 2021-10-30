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
import firestore from '@react-native-firebase/firestore'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMenu from 'react-native-vector-icons/Entypo';
import { Headerapp } from '../../../components/Header';
import {ProfileLogic} from "../profile_use.logic"
export const ProfileUpdate = (props) => {
    const noimage = '../../assets/image/no_Image.jpg';
    const {profile} = ProfileLogic(props);
    //    const geturl = storage().ref(`${user}`).getDownloadURL().then((url:any) => { return  seturi(url) } );
    const [profileupdate,setprofileupdate]=useState({
        yourphone:profile.yourphone,
        address:"",
        gender:profile.gender,
        birthday:profile.birthday


    })
    const update = () => {
        firestore()
          .collection('user')
          .doc(profile.email.toLowerCase()).set({
            email: profile.email.toLowerCase(),
            password: profile.password,
            lname: profile.lname,
            fname: profile.fname,
            yourphone: profileupdate.yourphone,
            address: profileupdate.address,
            gender: profileupdate.gender,
            birthday: profileupdate.birthday
          })
    
    
        props.navigation.goBack()
    
      }

    return (
        <View style={styles.container}>
            <Headerapp
        title="Profile Update"
      />
           


            <ScrollView>
                <View style={styles.viewform}>
                    <View style={styles.viewdetailprofile}>
                        <Text>Gender</Text>
                        <TextInput style={styles.txinput}
                        value={profileupdate.gender} 
                        onChangeText={tx=>setprofileupdate({...profileupdate,gender:tx})} />

                    </View>

                    <View style={styles.viewdetailprofile}>
                        <Text>Birthday</Text>
                        <TextInput style={styles.txinput}
                        value={profileupdate.birthday} 
                        onChangeText={tx=>setprofileupdate({...profileupdate,birthday:tx})} />

                    </View>
                    <View style={styles.viewdetailprofile}>
                        <Text>Telephone</Text>
                        <TextInput style={styles.txinput}
                        value={profileupdate.yourphone} 
                        onChangeText={tx=>setprofileupdate({...profileupdate,yourphone:tx})} />
                        
                    </View>
                    <View style={styles.viewdetailprofile}>
                        <Text>Address</Text>
                        <TextInput style={styles.txinput}
                        value={profileupdate.address}
                        onChangeText={tx=>setprofileupdate({...profileupdate,address:tx})} />
                    </View>
                </View>
                <TouchableOpacity style={[styles.btnlogin,{alignSelf:"center"}]}
          onPress={()=>props.navigation.goBack()}
          >
            <Text style={styles.btntx}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnlogin,{alignSelf:"center"}]}
          onPress={()=>update()}
          >
            <Text style={styles.btntx}>Update Profile</Text>
          </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
