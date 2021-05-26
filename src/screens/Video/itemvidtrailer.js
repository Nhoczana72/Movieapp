import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ItemVid({id}, props) {
  const [datavid, setdatavideo] = useState([]);
  const loadvideo = () => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/trailers?api_key=c55cb28a013ddccfc78f28d3e9f29101`,
    )
      .then(data => {
        console.log('datavideo', data);
        const results = data.data.youtube;
        console.log('results', results);
        setdatavideo(results);
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    try {
      loadvideo();
    } catch (error) {
      console.log('error', error);
    }
  }, []);
  console.log('datavid', datavid);
  const source = datavid[0]?.source;
  const name = datavid[0]?.name;
  return (
    <View style={styles.containerItem}>
      <Text style={styles.txviewitem}>{name}</Text>

      <YoutubePlayer
        width={'100%'}
        play={false}
        height={'100%'}
        videoId={source}
        forceAndroidAutoplay={false}
        onFullScreenChange={false}
      />
    </View>
  );
}
