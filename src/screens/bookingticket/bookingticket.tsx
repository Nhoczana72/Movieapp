import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import firestore from '@react-native-firebase/firestore/lib/index';
import {Auth} from '../../components/firebase';
import styles from './style';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {bookingLogic} from './booking.logic';
import {Alert} from 'react-native';
import IconMenu from 'react-native-vector-icons/Entypo';
import { useSelector ,useDispatch} from 'react-redux';
import { Headerapp } from '../../components/Header';

export function Test({route,navigation}) {
  const {
    user,
    submit,
    select,
    data,
    text,
    bool,
    setUser,
    setdata,
    clean,
  } = bookingLogic(navigation);
  const dispatch=useDispatch()
const users=useSelector((state:any)=>state.user.profileuser.email)
  const [cine, setcine] :any= useState();
  const id = route.params.id;
  const [datamovie, getdatamovie] = useState([]);
  useEffect(() => {
    firestore()
      .collection(`movie/${id}/1`)
      .get({source: 'server'})
      .then((value:any) => getdatamovie(value._docs));


  }, []);

  const addticket = () => {
    firestore()
      .collection(`Tickets/${users}/1`)
      .add({
        moviename: route.params.namemovie,
        ngay: cine.day,
        gio: cine.time,
        rap: cine.rap,
        giatien: user.count * 100000,
        ghe: text,
        phong: cine.room,
      });
  };

  //set data dùng trong tạo database movie
  const setdatamovie = () => {
    firestore()
      .collection(`movie/${id}/1`)
      .add({
        rap: 'cgvhungvuong',
        day: '24',
        time: '7pm',
        room: 'p3',
      })
      .then((value:any) => {
        setdata(value?._data.a);
        console.log('data', data);
      });
  };
  // Handle user state changes
  //dùng trong tạo database ghế rạp
  const setrap = (dataa:any) => {
    console.log('dta', dataa);
    firestore()
      .doc(`rap/${dataa.rap}/${dataa.day}/${dataa.time}/phong/${dataa.room}`)
      .set({
        a: bool,
      })
      .then((value:any) => {
        setdata(value?._data.a);
      });
  };

  const search = dataa => {
    clean()
    setcine(dataa);
    firestore()
      .doc(`rap/${dataa.rap}/${dataa.day}/${dataa.time}/phong/${dataa.room}`)
      .get({source: 'server'})
      .then((value:any) => setdata(value?._data.a));
  };

  const update = () => {
    firestore()
      .doc(`rap/${cine.rap}/${cine.day}/${cine.time}/phong/${cine.room}`)
      .update({
        a: bool,
      })
      .then(() => {
        console.log('User updated!');
      });
  };
  const updateandadd = () => {
    update();
    addticket();
    clean();
    Alert.alert('Booking sucess');
    navigation.navigate('Navigator');
  };

  return (
    <View style={styles.container}>
       <Headerapp
        title="Booking Tickets"
        icon='chevron-left'
        onpress={()=>navigation.goBack() }
      />
      
      <ScrollView>
        <View style={styles.container}>
          
          <Text style={styles.txtitle}>{route.params.namemovie}</Text>
          <Text  style={{color: 'orange',fontSize:20}}>Please choose cinema {'\n'}</Text>
          <View
            style={{
              width: widthPercentageToDP(100),
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {datamovie? 
            datamovie.length==0?
            (
              <Text>Not Data</Text>
            )
            :(
              <FlatList
                ListHeaderComponent={
                  <View style={styles.viewtitleitem}>
                    <Text style={{width:'32%',textAlign:'center'}}>Cinema</Text>
                    <Text  style={{width:'20%',textAlign:'center'}}> Day</Text>
                    <Text style={{width:'20%',textAlign:'center'}}> Time</Text>
                    <Text style={{width:'28%',textAlign:'center'}}>Room</Text>
                  </View>
                }
                data={datamovie}
                renderItem={item => {
                  return (
                    <TouchableOpacity
                      style={styles.viewitem}
                      onPress={() => search(item.item._data)}>
                      <Text style={{width:'32%',textAlign:'center'}}>{item.item._data.rap}</Text>
                      <Text style={{width:'20%',textAlign:'center'}}>{item.item._data.day}</Text>
                      <Text style={{width:'20%',textAlign:'center'}}>{item.item._data.time}</Text>
                      <Text  style={{width:'28%',textAlign:'center'}} >{item.item._data.room}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : (
              <Text>Not Data</Text>
            )}
           
          </View>

          {data ? (
            <View style={{alignItems: 'center',margin:widthPercentageToDP(5)}}>
              <Text style={{color: 'orange',fontSize:20}}> Please choose your seat </Text>
              <View style={{width: 250, height: 300,alignItems:'center'}}>
                <FlatList
                  data={data}
                  contentContainerStyle={{width: 250,marginLeft:25}}
                  ListFooterComponent={()=><View style={{height:100,width:'100%'}}>
                    
                    <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                    <View style={{width:10,height:10,marginRight:10,backgroundColor:'red'}}></View>
                    <Text style={{color:'white'}}>Someone booked</Text>
                    
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:10,height:10,marginRight:10,backgroundColor:'gray'}}></View>
                    <Text style={{color:'white'}}>Can booking</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:10,height:10,marginRight:10,backgroundColor:'green'}}></View>
                    <Text style={{color:'white'}}>Be booking</Text>
                    </View>
                  </View>}
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={itemm => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: itemm.item
                            ? 'red'
                            : bool[itemm.index]
                            ? 'green'
                            : 'gray',
                          margin: 10,
                          justifyContent: 'center',
                        }}
                        onPress={() => select(itemm.index)}>
                        <Text
                          style={{
                            color: 'yellow',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          {itemm.index}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.btnlogin}
                onPress={() => submit()}>
                <Text style={styles.btntx}>Booking</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View></View>
          )}

          <Text></Text>
          {user.book ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent:'center',
              }}>
              <Modal
               
                animationType="slide"
                transparent={true}
                visible={true}
              
              >
                <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent:'center',
              }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      width: widthPercentageToDP(80),
                      height: heightPercentageToDP(35),
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: 'black',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>Movie Booking</Text>

                    <Text>Cinema :{cine.rap}</Text>

                    <Text>Day :{cine.day}</Text>

                    <Text>Time :{cine.time}</Text>

                    <Text>Room :{cine.room}</Text>
                    <Text>Seat :{text}</Text>
                    <Text>Price :{user.count * 100000}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.btnlogin}
                        onPress={() => setUser({...user, book: false})}>
                        <Text style={styles.btntx}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.btnlogin}
                        onPress={() => updateandadd()}>
                        <Text style={styles.btntx}>Booking</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </View>
              </Modal>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
