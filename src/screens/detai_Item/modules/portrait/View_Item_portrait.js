import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from '../../styles'

const ViewPortrait = ({name,source}) => {


  let urlimage = 'https://image.tmdb.org/t/p/w500';

  return (
    <View style={styles.viewitemvid} >
    <View style={styles.viewvid}>
      <YoutubePlayer
        width={'95%'}
        play={true}
        height={'100%'}
        videoId={`${source}`}
        forceAndroidAutoplay={false}
        onFullScreenChange={false}
      />
    </View>
    <View>
      <Text style={styles.viewtxtitleitem}>
        {name}
      </Text>
    </View>
  </View>


       
  )
};
export default ViewPortrait;
