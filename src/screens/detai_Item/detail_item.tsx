import React, {Component, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';
import List_cast from './modules/listcast';
import styles from './styles';
import {useDispatch,useSelector}from 'react-redux'
import {homeAction} from '../../redux/movie/action'
import IconMenu from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const detail_Item = ({route, navigation}) => {
  const {id} = route.params;
  // const [data, setData] :any= useState([]);
  const dispatch=useDispatch();
  const dispatchdata=()=>{
    const action=homeAction.getAllNewMovies(id)
    dispatch(action)
  }
  const data:any=useSelector((state:any)=>{return  state.movie.detailmovie||[]})


  useEffect(() => {
    dispatchdata()
  }, []);

  
  let spokenLang = '';
  data?.spoken_languages?.map(it => {
    return (spokenLang += it?.english_name + ',');
  });
  const rating = data.vote_average;
  return (
    <ScrollView style={styles.viewcontainerdetail}>
      <View
          style={{ flexDirection: 'row', alignItems: 'center',   width: '100%',backgroundColor:'black',paddingTop: 15 ,borderBottomWidth:1,borderColor:'#FF9900',marginBottom:5}}>
          <TouchableOpacity style={{width:30,height:30}}
          onPress={()=>navigation.goBack()}>
          <IconMenu name="chevron-left" color="#FF9900" size={25} />
          </TouchableOpacity>
          <Text style={{ color: '#FF9900',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginLeft:widthPercentageToDP(38),
    position:'absolute'}}>{data?.title}</Text>
        </View>
      <Header
        id={id}
        title={data?.title}
        language={spokenLang?.slice(0, -1)}
        popularity={data?.popularity}
        year={data?.release_date?.slice(0, 4)}
        source={data?.backdrop_path}
        rating={rating}
      />
      <View style={styles.viewbtn}>
        <TouchableOpacity
          style={styles.btnsearch}
          onPress={()=>navigation.navigate('trailer',{id:id})}
          
          >
          <Text style={styles.btntxsearch}>Trailer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnsearch} onPress={()=>navigation.navigate('Test',{namemovie:data.title,id:id})}>
          <Text style={styles.btntxsearch}>Booking ticket</Text>
        </TouchableOpacity>
      </View>
      <List_cast id={id} overview={data?.overview} />
      
    </ScrollView>
  );
};

export default detail_Item;
