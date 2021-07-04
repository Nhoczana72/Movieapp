import React,{useEffect,useState} from 'react'
import { Text, TouchableOpacity, View,FlatList } from 'react-native'
import {styles} from './styles'
import firestore from '@react-native-firebase/firestore/lib/index';
import {Auth} from '../../components/firebase';
import IconMenu from 'react-native-vector-icons/Entypo';

export const tickets=(props)=>{
    const [inittializing, setInitiallizing] = useState(true);

    const [users, setuser] = useState('');      

    const [data, setdata] = useState();
    function onAuthStateChanged(user) {
      setuser(user._user.email);
      if (inittializing) setInitiallizing(false);
    }


    useEffect(() => {
    
        const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
        
        return subscriber;
        
        
      }, [users]);
      useEffect(() => {
        if(users!=''){
        firestore()
          .collection(`Tickets/${users}/1`)
          .get({source:'server'})
          .then((value:any)=>setdata(value._docs));
        
        }
      }, [users]);
     


    return(
        <View style={styles.container}>
          <View
          style={{ flexDirection: 'row', alignItems: 'center',   width: '100%',backgroundColor:'black',paddingTop: 15 }}>
          <TouchableOpacity style={{width:30,height:30}}
          onPress={()=>props.navigation.openDrawer()}>
          <IconMenu name="menu" color="#FF9900" size={25} />
          </TouchableOpacity>
          <Text style={styles.txtitle}>Tickets</Text>
        </View>
            <Text>{users? users : 'aa'}</Text>
            {data?
            <FlatList
            data={data}
            renderItem={item=>{console.log(item)
                 return(<View style={styles.viewitem}>
                     <Text>Ordinal number : {item.index}</Text>
                     <Text>Movie : {item.item._data.moviename}</Text>
                     <Text>Cinema : {item.item._data.rap}</Text>
                     <Text>Day : {item.item._data.ngay}</Text>
                     <Text>Time : {item.item._data.gio}</Text>
                     <Text>Cinema number : {item.item._data.phong}</Text>
                     <Text>Seats : {item.item._data.ghe}</Text>
                     
                     <Text>Costs : {item.item._data.giatien}</Text>
                     
                 </View>)}}
            />
                 :<Text>Not Data</Text>}

        </View>
    )
}