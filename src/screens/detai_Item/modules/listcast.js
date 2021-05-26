import React,{ useEffect, useState} from 'react'
import { View ,Text,FlatList,Image} from 'react-native';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import styles from '../styles'




const List_cast=({id,overview})=>{
    const [datacast, setdatacast] = useState([]);
    let urlimage = 'https://image.tmdb.org/t/p/w500';

    const loadactor = () => {
        axios(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US`,
        )
          .then(data => {
            const resul = data.data;
            console.log('datacast', resul);
    
            setdatacast(resul);
          })
          .catch(error => console.log('errorr', error));
      };

      useEffect(() => {
        try {
          loadactor();
         
          
        } catch (error) {
          console.log('error', error);}
        }, []);

    return (
        <View  >
                
        <Text
          style={styles.txtitlee}>
          Top Billed Cast
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList

            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            data={datacast.cast}
            renderItem={itemcast => {
              return (
                <View
                  style={{
                    width: 100,
                    height: 175,
                    backgroundColor: '#222222',
                    marginHorizontal: 5,
                  }}
                  key={itemcast?.index + ''}>
                   
                  <Image
                    style={{width: 95, height: 100}}

                    source={ itemcast.item.profile_path ? {
                      uri: `${urlimage}${itemcast.item.profile_path}`
                    } : require('../../../assets/image/no_Image.jpg') }
                  />
                  
                  
                  <Text style={{color: 'yellow'}}>
                    {itemcast.item.character}
                  </Text>
                  <Text style={{color: '#777777'}}>
                    {itemcast.item.original_name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={styles.txtitlee}>
            Over View{' '}
          </Text>
          <Text
            style={{
              color: '#EEEEEE',
              fontSize: 15,
              marginHorizontal: 30,
              fontStyle: 'italic',
            }}>
            {' '}
            {overview}
          </Text>
        </View>
      </View>
   
   
    )
};

export default List_cast