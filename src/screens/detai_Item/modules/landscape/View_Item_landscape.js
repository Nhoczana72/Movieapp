import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from '../../styles'

const ViewLandscape= ({name,source}) => {


  let urlimage = 'https://image.tmdb.org/t/p/w500';

  return (
    <View style={styles.viewitemvidlandscape} >
    <View style={styles.viewvidlandscape}>
      <YoutubePlayer
        width={'100%'}
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
export default ViewLandscape;
