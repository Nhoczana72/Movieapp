import React, {Component, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Header from './Header';
import List_cast from './modules/listcast';
import styles from './styles';
import {useDispatch,useSelector}from 'react-redux'
import {homeAction} from '../../redux/movie/action'
import { Headerapp } from '../../components/Header';

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
    return (spokenLang += it?.english_name + ', ');
  });
  const rating = data.vote_average;
  return (
    <ScrollView style={styles.viewcontainerdetail}>
      <Headerapp
        title={data?.title}
        icon='chevron-left'
        onpress={()=>navigation.goBack() }
      />
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
