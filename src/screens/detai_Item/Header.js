import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import styles from './styles'

const Header = ({id}) => {

  const [data, setData] = useState([]);
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


  useEffect(() => {
    try {
      load();
    } catch (error) {
      console.log('error', error);
    }

    
  }, []);

  let spokenLang = '';
  data?.spoken_languages?.map(it => {
    return (spokenLang += it?.english_name + ',');
  });
  // const set = data.spoken_languages
  const rating = data.vote_average;
  return (
    <View style={styles.viewtop}>
    <View style={styles.viewimage}>
      <Image
        style={styles.viewimage}
        source={{
          uri: `${urlimage}/${data?.backdrop_path} `,
        }}></Image>
    </View>
    <View style={styles.viewdetail}>
      <Text
        style={styles.txtitle}>
        {data?.title}
      </Text>
      <View style={styles.viewtxdetail}>
        <Text style={styles.txdetail}>
          Language : {spokenLang?.slice(0, -1)}
        </Text>
        <Text style={styles.txdetail}>
          Popularity : {data?.popularity}
        </Text>
        <Text style={styles.txdetail}>
          Year : {data?.release_date?.slice(0, 4)}
        </Text>
        <Text
          style={styles.txrating}>
          Rating: {data?.vote_average}/10
        </Text>
        <Rating
          type="custom"
          startingValue={rating ? rating / 2 : 0}
          showRating={false}
          ratingCount={5}
          tintColor="black"
          onFinishRating={value => console.log('value', value)}
          size={10}
          style={{paddingVertical: 10, backgroundColor: 'black'}}
        />
      </View>
    </View>
  </View>

       
  )
};
export default Header;
