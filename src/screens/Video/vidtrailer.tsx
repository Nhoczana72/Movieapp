import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';

import {homeAction} from '../../redux/movie/action';
import {useSelector, useDispatch} from 'react-redux';
import ItemVid from './itemvidtrailer';

const VideoTrailer = props => {
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const api = `/3/movie/popular?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=${page}`;
  const dispatchActionMovie = () => {
    const action = homeAction.getALLMovies(api);
    dispatch(action);
  };
  const datamovie = useSelector((state:any) => {
    return state?.movie?.allMovie;
  });
  const datavid = useSelector((state:any) => {
    return state?.trailer?.allTrailer;
  });
  useEffect(() => {
    try {
      dispatchActionMovie();
    } catch (error) {
      console.log('error', error);
    }
  }, [page]);
console.log(page)
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
        onEndReachedThreshold={0}
        onEndReached={() => setpage(page + 1)}
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <Text style={styles.txviewitem}>{item.name}</Text>
            <YoutubePlayer
              width={'95%'}
              play={false}
              height={'100%'}
              videoId={`${item.source}`}
              forceAndroidAutoplay={false}
              // onFullScreenChange={false}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}></FlatList>
    </View>
  );
};
export default VideoTrailer;
