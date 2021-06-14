import React, {useState,useEffect, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  
  ScrollView,
} from 'react-native';
import {Modal} from '../../components/Modal'
import storage from '@react-native-firebase/storage'
import Iconcamera from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore'
import {Auth} from '../../components/firebase';
import {ProfileLogic} from './profile_use.logic'
import {styles} from './style';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const ProfileScreen =(props)=> {
  const [user, setUser] = useState({users:''});
  
  const [inittializing, setInitiallizing] = useState(true);
  
  function onAuthStateChanged(user) {
    setUser({users:user});
    if (inittializing) setInitiallizing(false);
  }
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  const noimage = '../../assets/image/no_Image.jpg';
  const {
    isopen,
    setopen,
    sourcepath,
    chooseFile,
    Camera,
    setsourcepath

  }=ProfileLogic();
  const [valueprofile, setvalueprofile] = useState({
    email: '',
    password: '',
    lname:'',
    yourphone:''
  });
  const usersCollection = firestore().collection('user').doc('Nhoczana72@gmail.com').onSnapshot(documentSnapshot => {
    console.log('User data: ', documentSnapshot.data());
    const data=documentSnapshot.data()
    setvalueprofile({
      email:data.email,
      password:data.password,
      lname:data.name,
      yourphone:data.yourphone
    })
  });

  console.log('users',usersCollection)


  

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.viewAvt}>
        <Image
              style={styles.viewimage}
              source={
                sourcepath.load
                  ? {
                    uri: sourcepath.pathimage?.uri,
                  }
                  : require(noimage)
              }
            />
            <TouchableOpacity style={styles.iconbadge}
              onPress={() => setopen({open:true})}>

              <Iconcamera name='camera' size={wp(5)} color='white' />
            </TouchableOpacity>


            <Text style={styles.txname}>{ valueprofile.lname? valueprofile.lname  :'No name'}</Text>

        </View>

        <View style={styles.viewprofile}>
          <View style={styles.viewdetailprofile}>
            <Text>Gender</Text>
            <Text>-</Text>
          </View>
          <View style={styles.viewdetailprofile}>
            <Text>Age</Text>
            <Text>-</Text>
          </View>
          <View style={styles.viewdetailprofile}>
            <Text>Birthday</Text>
            <Text>-</Text>
          </View>
          <View style={styles.viewdetailprofile}>
            <Text>Telephone</Text>
            <Text>{valueprofile.yourphone}</Text>
          </View>
          <View style={styles.viewdetailprofile}>
            <Text>Address</Text>
            <Text>-</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnlogin}
        
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
                  <TouchableOpacity style={{ backgroundColor: '#DEE1E2', height: hp(0.8), width: wp(20), borderRadius: 2, position: 'absolute', top: hp(2) }} onPress={() => setopen({open:false})}></TouchableOpacity>
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
                      setopen({open:false}), setsourcepath({ pathimage: '', load: false })
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
