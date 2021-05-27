import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {homeAction} from '../../redux/movie/action';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
export default function Main(props) {
  let urlimage = 'https://image.tmdb.org/t/p/w500';
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(
    '/4/list/1?api_key=c55cb28a013ddccfc78f28d3e9f29101',
  );
  const [items, setItems] = useState([
    {
      label: 'Now playing',
      value:
        '/3/movie/now_playing?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1',
    },
    {
      label: 'Popular',
      value:
        '/3/movie/popular?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1',
    },
    {
      label: 'Top Rated',
      value:
        '/3/movie/top_rated?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1',
    },
    {
      label: 'Upcoming',
      value:
        '/3/movie/upcoming?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1',
    },
  ]);
  const dispatchActionMovie = () => {
    const action = homeAction.getALLMovies(value);
    dispatch(action);
  };
  const datamovie = useSelector(state => {
    return state?.movie?.allMovie;
  });


  useEffect(() => {
    try {
      
      dispatchActionMovie();
    } catch (error) {
      console.log('error', error);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={{alignContent: 'center'}}>
        <Text style={styles.txtitle}>IMDb</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      <View style={styles.viewlist}>
        <View>
          <FlatList
            style={styles.viewflatlist}
            keyExtractor={(item, index) => index.toString()}
            data={datamovie}
            numColumns={2}
            renderItem={itemData => {
              return (
                <TouchableOpacity
                  style={styles.viewitem}
                  onPress={() =>
                    props.navigation.navigate('Detail_Item', {
                      id: itemData.item.id,
                    })
                  }>
                  <Image
                    style={{height: 250, width: '100%'}}
                    source={{
                      uri: `${urlimage}/${itemData.item.poster_path}`,
                    }}
                  />
                  <Text style={{color: 'white'}}>
                    {itemData.item.original_title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
