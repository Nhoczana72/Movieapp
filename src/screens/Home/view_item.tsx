import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import styles from './styles';

const View_Item = ({id, poster_path, original_title},props) => {
  let urlimage = 'https://image.tmdb.org/t/p/w500';

  return (
    <TouchableOpacity
      style={styles.viewitem}
      onPress={() => props.navigation.navigate('Detail_Item', {id: id})}>
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
