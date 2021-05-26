import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import styles from './styles'
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import ItemVid from './itemvidtrailer';

const VideoTrailer = (props) => {
  const api =
    'https://api.themoviedb.org/3/movie/popular?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1';
  const [data, setdata] = useState([]);
  const load = () => {
    axios(api)
      .then(data => {
        const results = data.data.results;
        console.log('results', results);
        setdata(results);
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


  console.log('data', data);
  return (
    <View style={styles.container}>
      <Text style={styles.txtitle}>Most Popular</Text>
      <FlatList
        style={styles.listcontainer}
        data={data}
        renderItem={({item}) => <ItemVid id={item.id} />}
        keyExtractor={(item, index) => index.toString()}></FlatList>
    </View>
  );
};
export default VideoTrailer;
