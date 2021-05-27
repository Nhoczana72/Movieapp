import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import styles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';

import {trailerAction} from '../../redux/trailer/action';
import {useSelector,useDispatch} from 'react-redux';
import ItemVid from './itemvidtrailer';

const VideoTrailer = props => {
  const api =
    '/3/movie/popular?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1';
  const dispatch = useDispatch();

  const dispatchActionMovie = () => {
    const action = homeAction.getALLMovies(api);
    dispatch(action);
  };
  const datamovie = useSelector(state=>{
    return state?.movie?.allMovie
  })
  const datavid = useSelector(state => {
    return state?.trailer?.allTrailer;
  });
  useEffect(() => {
    try {
      dispatchActionMovie();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txtitle}>Most Popular</Text>
      <FlatList
        scrollEnabled={false}
        style={styles.listcontainer}
        data={datamovie}
        renderItem={({item}) => <ItemVid id={item.id} />}
        keyExtractor={(item, index) => index.toString()}></FlatList>
      <FlatList
        scrollEnabled={true}
        style={styles.listcontainer}
        data={datavid}
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <Text style={styles.txviewitem}>{item.name}</Text>
            <YoutubePlayer
        width={'95%'}
        play={true}
        height={'100%'}
        videoId={`${item.source}`}
        forceAndroidAutoplay={false}
        onFullScreenChange={false}
      />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}></FlatList>
    </View>
  );
};
export default VideoTrailer;
