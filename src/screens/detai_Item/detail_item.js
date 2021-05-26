import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Header';
import List_cast from './modules/listcast';
import styles from '../detai_Item/styles';
import ViewPortrait from './modules/portrait/View_Item_portrait';
import ViewLandscape from './modules/landscape/View_Item_landscape';

const detail_Item = ({route, navigation}) => {
  const {id} = route.params;
  const [orientation, setOrientation] = useState('portrait');
  const [data, setData] = useState([]);
  const [datavideo, setdatavideo] = useState([]);
  const [loadflatlist, setload] = useState({
    load: false,
  });

  let urlimage = 'https://image.tmdb.org/t/p/w500';

  const load = () => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US`,
    )
      .then(data => {
        const results = data.data;
        setData(results);
      })
      .catch(error => console.log('error', error));
  };

  const loadvideo = () => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/trailers?api_key=c55cb28a013ddccfc78f28d3e9f29101`,
    )
      .then(({data}) => {
        const results = data.youtube;
        setdatavideo(results);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    try {
      load();
      loadvideo();
      CheckOrrientation();
    } catch (error) {
      console.log('error', error);
    }
  }, [orientation]);

  const CheckOrrientation = () => {
    console.log(orientation);
    Dimensions.addEventListener('change', newDimensions => {
      console.log('ss', newDimensions);
      if (newDimensions.window.width > newDimensions.window.height) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    });
  };
  let spokenLang = '';
  data?.spoken_languages?.map(it => {
    return (spokenLang += it?.english_name + ',');
  });
  const rating = data.vote_average;
  return (
    <ScrollView style={styles.viewcontainerdetail}>
      <View style={{backgroundColor: 'black', width: 40}}>
        <Icon.Button
          name="long-arrow-left"
          backgroundColor="gray"
          size={20}
          width={wp(40)}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Header id={id} />
      <View style={styles.viewbtn}>
        <TouchableOpacity
          style={styles.btnsearch}
          onPress={() => {
            setload(() => {
              return {load: !loadflatlist.load};
            });
          }}>
          <Text style={styles.btntxsearch}>Trailer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnsearch}>
          <Text style={styles.btntxsearch}>Watch Movie</Text>
        </TouchableOpacity>
      </View>
      <>
        {loadflatlist.load ? (
          <View style={{alignItems: 'center'}}>
            <FlatList
              keyExtractor={(item, index) => index?.toString()}
              data={datavideo}
              renderItem={itemdata => {
                return orientation == 'portrait' ? (
                  <View key={itemdata?.index + ''}>
                    <ViewPortrait
                      name={itemdata?.item.name}
                      source={itemdata?.item.source}
                    />
                  </View>
                ) : (
                  <View>
                    <ViewLandscape
                      name={itemdata?.item.name}
                      source={itemdata?.item.source}
                    />
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <List_cast id={id} overview={data?.overview} />
        )}
      </>
    </ScrollView>
  );
};

export default detail_Item;
