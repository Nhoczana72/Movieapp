import React from 'react';
import {
  View,
  Text,
  
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from '../../styles'

export const ViewPortrait = ({name,source}) => {
  return (
    <View style={styles.viewitemvid} >
    <View style={styles.viewvid}>
      <YoutubePlayer
      webViewStyle={{width:'100%',height:'100%'}}
        width={'95%'}
        play={false}
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
