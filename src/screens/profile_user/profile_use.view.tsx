import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,

  ScrollView,
} from 'react-native';
import { Modal } from '../../components/Modal'
import storage from '@react-native-firebase/storage'
import Iconcamera from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore'
import { Auth, database } from '../../components/firebase';
import { ProfileLogic } from './profile_use.logic'
import { styles } from './style';
import * as Progress from 'react-native-progress';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMenu from 'react-native-vector-icons/Entypo';
import { Headerapp } from '../../components/Header';

export const ProfileScreen = (props) => {
  const noimage = '../../assets/image/no_Image.jpg';
  const {
    profile,
    isopen,
    setopen,
    sourcepath,
    chooseFile,
    Camera,
    setsourcepath,
    uploadImage,progress
  } = ProfileLogic(props);

//    const geturl = storage().ref(`${user}`).getDownloadURL().then((url:any) => { return  seturi(url) } );

  useEffect(() => {
    storage().ref(`${profile.email}`).getDownloadURL().then((url:any) => { return  seturi(url) } )
    return;
  }, [sourcepath]);
  const [uri, seturi]: any = useState()
if(uri!=null){profile.uri=uri}
 


  return (
    <View style={styles.container}>
      <Headerapp
        title="Profile"
        icon='menu'
        onpress={()=>props.navigation.openDrawer()}
      />
       
      
   
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.viewAvt}>
            <Image
              style={styles.viewimage}
              source={
                profile.uri
                  ? {
                    uri: profile.uri,
                  }
                  : require(noimage)
              }
            />
            <TouchableOpacity style={styles.iconbadge}
              onPress={() => setopen({ open: true })}>

              <Iconcamera name='camera' size={wp(5)} color='white' />
            </TouchableOpacity>


            <Text style={styles.txname}>{profile.fname }</Text>

          </View>

          
          {sourcepath?
          <View style={styles.viewupdateimage}> 
          <Image
          style={styles.viewimage}
          source={{
            uri: sourcepath,
          }}
        />
        <Progress.Bar progress={progress} width={200}/>

         <TouchableOpacity style={styles.btnlogin}
            onPress={() => uploadImage()}
          >
            <Text style={styles.btntx}>Update Image</Text>
          </TouchableOpacity>
        </View>:
        <View style={styles.viewprofile}>
        <View style={styles.viewdetailprofile}>
          <Text>Gender</Text>
          <Text>{profile.gender}</Text>
        </View>

        <View style={styles.viewdetailprofile}>
          <Text>Birthday</Text>
          <Text>{profile.birthday}</Text>
        </View>
        <View style={styles.viewdetailprofile}>
          <Text>Telephone</Text>
          <Text>{profile.yourphone}</Text>
        </View>
        <View style={styles.viewdetailprofile}>
          <Text>Address</Text>
          <Text>{profile.address}</Text>
        </View>
        
      </View >
        }
          
          <TouchableOpacity style={styles.btnlogin}
          onPress={()=>props.navigation.navigate('profileupdate')}
          >
            <Text style={styles.btntx}>Update Profile</Text>
          </TouchableOpacity>
         
      

          {isopen.open ?
            <Modal
              style={{ backgroundColor: '#FFFFFFF' }}
              position='bottom'
              isOpen={true}
              children={
                <View style={styles.viewchoosefile}>
                  <TouchableOpacity style={{ backgroundColor: '#DEE1E2', height: hp(0.8), width: wp(20), borderRadius: 2, position: 'absolute', top: hp(2) }} onPress={() => setopen({ open: false })}></TouchableOpacity>
                  <TouchableOpacity style={styles.btnoptionsimage} onPress={Camera}>
                    <View style={styles.viewiconoptionimage}>
                      <Iconcamera name='camera' color='#3599D0' size={wp(4)} />
                    </View>
                    <Text style={styles.txoptionimage}>Open Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnoptionsimagecenter} onPress={chooseFile}>
                    <View style={styles.viewiconoptionimage}>
                      <Iconcamera name='file-photo-o' color='#3599D0' size={wp(4)} />
                    </View>
                    <Text style={styles.txoptionimage}>Choose from album</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnoptionsimage}
                    onPress={() => {
                      setopen({ open: false }), setsourcepath({ pathimage: '', load: false })
                    }}>
                    <View style={styles.viewiconoptionimage}>
                      <Iconcamera name='user' color='#3599D0' size={wp(6)} />
                    </View>
                    <Text style={styles.txoptionimage}>Remove profile picture</Text>
                  </TouchableOpacity>

                </View>

              }

            />
            : <View></View>}

        </View>
      </ScrollView>
    </View>
  );
};
