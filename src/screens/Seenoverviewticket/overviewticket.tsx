import React,{useEffect,useState} from 'react'
import { Text, TouchableOpacity, View,FlatList } from 'react-native'
import {styles} from './styles'
import firestore from '@react-native-firebase/firestore/lib/index';
import {Auth} from '../../components/firebase';
import IconMenu from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';

export const tickets=(props)=>{
  const user=useSelector((state:any)=>{return state.user.profileuser.email})
    const [data, setdata] = useState([]);
  
      useEffect(() => {
        if(user!=''){
        firestore()
          .collection(`Tickets/${user}/1`)
          .get({source:'server'})
          .then((value:any)=>setdata(value._docs));
        
        }
      }, []);
     
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
            {data?
              data.length==0?
                <Text>Not Data</Text>

              :
              <FlatList
            data={data}
            renderItem={item=>{
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