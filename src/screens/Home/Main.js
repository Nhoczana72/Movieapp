import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {homeAction} from '../../redux/movie/action';
import DropDownPicker from 'react-native-dropdown-picker';
import {Rating} from 'react-native-ratings';
import styles from './styles';
import IconMenu from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import auth from '@react-native-firebase/auth';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
export default function Main(props) {
  let urlimage = 'https://image.tmdb.org/t/p/w500';
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState('now_playing');
  const [page, setpage] = useState(1);
  const refFlatlist = useRef(null);
  const refValue = useRef('now_playing');
  const [items, setItems] = useState([
    {
      label: 'Now playing',
      value: 'now_playing',
    },
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },
    {
      label: 'Upcoming',
      value: 'upcoming',
    },
  ]);
  const Logout=()=>{
    
auth()
.signOut()
.then(() => {props.navigation.navigate('Login')});
  }

  useEffect(() => {
    if (value !== refValue?.current) {
      setpage(1);
      refValue.current = value;
      datamovie?.length > 0 &&
        refFlatlist?.current?.scrollToIndex({animated: true, index: 0});
    }
    dispatch(homeAction.getALLMovies({page, value}));
  }, [page, value]);

  const datamovie = useSelector(state => {
    return state?.movie?.allMovie;
  });
  console.log('datamovie', datamovie);
  return (
    <View style={styles.container}>
      <View style={{alignContent: 'center'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
          <Menu>
            <MenuTrigger>
              <IconMenu name="menu" color="#FF9900" size={25} />
            </MenuTrigger>
            <MenuOptions children={
              <View style={styles.viewmenu}>
              <View  style={{backgroundColor:'black',width:widthPercentageToDP(61)}}>
                <Text style={styles.txmenutitle}>IMDb</Text>
              </View>
            <Text style={styles.txmenutitle}>
              Hi {'\n'} Anhhatca@gmail.com
            </Text>
            <TouchableOpacity
             style={{marginTop:heightPercentageToDP(2)}}
              onPress={() => props.navigation.navigate('Profile')}>
              <Text style={styles.txmenu} >Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.txmenu}>Booking information </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Logout}>
              <Text style={styles.txmenu}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity
      
      onPress={()=>props.navigation.navigate('Test')}      >
      <Text style={styles.txmenu}>Test</Text>
    </TouchableOpacity>
            </View>
            }>
              
              
            </MenuOptions>
          </Menu>

          <Text style={styles.txtitle}>IMDb</Text>
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          setValue={setValue}
        />
      </View>

      <View style={styles.viewlist}>
        <View>
          <FlatList
            ref={refFlatlist}
            style={styles.viewflatlist}
            keyExtractor={(item, index) => index.toString()}
            data={datamovie}
            ListFooterComponent={
              <View
                style={{backgroundColor: '#666666', height: 50, width: '100%'}}>
                <Text style={{textAlign: 'center'}}>Loading more...</Text>
              </View>
            }
            onEndReached={() => {
              setpage(preState => preState + 1);
            }}
            numColumns={2}
            onEndReachedThreshold={0.001}
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

                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {itemData.item.original_title}
                  </Text>
                  <Rating
                    startingValue={
                      itemData?.item.vote_average
                        ? itemData?.item.vote_average / 2
                        : 0
                    }
                    showRating={false}
                    ratingCount={5}
                    tintColor="#111111"
                    imageSize={13}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
