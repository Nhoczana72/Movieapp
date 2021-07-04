import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from '../../styles'

export const ViewLandscape= ({name,source}) => {
  return (
    <View style={styles.viewitemvidlandscape} >
    <View style={styles.viewvidlandscape}>
      <YoutubePlayer
        width={'100%'}
        play={false}
        height={'100%'}
        videoId={`${source}`}
        forceAndroidAutoplay={false}
        // onFullScreenChange={false}
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
