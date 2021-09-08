import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import firestore from '@react-native-firebase/firestore/lib/index';
import {Auth} from '../../components/firebase';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Alert} from 'react-native';
import IconMenu from 'react-native-vector-icons/Entypo';
import { useSelector ,useDispatch} from 'react-redux';
import {styles} from './style'
export function Admin(props) {
 
  const dispatch=useDispatch()
const users=useSelector((state:any)=>state.user.profileuser.email)
  const [cine, setcine] :any= useState();
  const [rap,setrap]=useState({
      rap:'',
      ngay:'',
      gio:'',
      phong:''
  })
 const truyvan=()=>{

 }
 console.log(rap.rap)
  const update = () => {
    firestore()
      .collection(`movie`)
      .get({source:'server'})
      .then(documentSnapshot =>{console.log(documentSnapshot )})
      
  };
 
  return (
    <View style={{flex:1}}>   
          <Text  style={{color: 'orange',fontSize:20}}>Please choose cinema {'\n'}</Text>
          <Text>rạp</Text>
         <TextInput style={styles.inputtx}
         value={rap.rap}
         onChangeText={tx=>setrap({...rap,rap:tx})}/>
         <Text>ngày</Text>
         <TextInput style={styles.inputtx}
         value={rap.ngay}
         onChangeText={tx=>setrap({...rap,ngay:tx})}/>
         <Text>giờ</Text>
         <TextInput style={styles.inputtx}/>
         <Text>rạp</Text>
         <TextInput style={styles.inputtx}/>
           <TouchableOpacity style={styles.btnlogin} onPress={()=>update()}>
               <Text>Kiểm tra</Text>
           </TouchableOpacity>
        
    </View>
  );
}
