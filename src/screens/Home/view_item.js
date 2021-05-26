import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollViewBase,
  FlatList,
  Button,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

const View_Item = ({id,poster_path,original_title}) => {
        let urlimage = "https://image.tmdb.org/t/p/w500"

  return (
    <TouchableOpacity
      style={styles.viewitem}
      onPress={() =>
        props.navigation.navigate('Detail_Item', {id: id})
      }>
      <Image
        style={{height: 250, width: '100%'}}
        source={{
          uri: `${urlimage}/${poster_path}`,
        }}
      />

      <Text style={{color: 'white'}}>{original_title}</Text>
    </TouchableOpacity>
  );
};

export default View_Item;
