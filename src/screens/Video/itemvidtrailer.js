import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {trailerAction} from '../../redux/trailer/action';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
function ItemVid({id}) {
  const [datavid, setdatavideo] = useState([]);
  const dispatch = useDispatch();
  // const loadvideo = () => {
  //   axios(
  //     `https://api.themoviedb.org/3/movie/${id}/trailers?api_key=c55cb28a013ddccfc78f28d3e9f29101`,
  //   )
  //     .then(data => {
  //       console.log('datavideo', data);
  //       const results = data.data.youtube;
  //       console.log('results', results);
  //       setdatavideo(results);
  //     })
  //     .catch(error => console.log('error', error));
  // };
  const dispatchActionMovie = () => {
    const actions = trailerAction.getAllTrailer(id);
    dispatch(actions);
  };
  // const data = useSelector(state => {
  //   return state?.trailer?.allTrailer;
  // });

  useEffect(() => {
    try {
      // loadvideo();
      dispatchActionMovie();
    } catch (error) {
      console.log('error', error);
    }
    
  }, []);

  return (
   <View></View>
  );
}
const mapStateToProps = state => {
  return {alltrailer: state.trailer.alltrailer};
};
export default ItemVid;
