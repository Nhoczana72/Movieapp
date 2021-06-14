import React from 'react';
import {View, Text, Image} from 'react-native';
import {Rating} from 'react-native-ratings';

import styles from './styles';

const Header = ({id, title, language, popularity, year, source, rating}) => {
  let urlimage = 'https://image.tmdb.org/t/p/w500';

  return (
    <View style={styles.viewtop}>
      <View style={styles.viewimage}>
        <Image
          style={styles.viewimage}
          source={{
            uri: `${urlimage}/${source} `,
          }}></Image>
      </View>
      <View style={styles.viewdetail}>
        <Text style={styles.txtitle}>{title}</Text>
        <View style={styles.viewtxdetail}>
          <Text style={styles.txdetail}>Language : {language}</Text>

          <Text style={styles.txdetail}>Year : {year}</Text>
          <Text style={styles.txrating}>Rating: {rating}/10</Text>
          <Rating
            type="custom"
            startingValue={rating ? rating / 2 : 0}
            showRating={false}
            ratingCount={5}
            tintColor="black"
            onFinishRating={value => console.log('value', value)}
            size={10}
            style={{paddingVertical: 10, backgroundColor: 'black'}}
          />
        </View>
      </View>
    </View>
  );
};
export default Header;
