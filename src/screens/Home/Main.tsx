import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { Rating } from 'react-native-ratings';
import styles from './styles';
import IconMenu from 'react-native-vector-icons/Entypo';
import {GroupBtn} from '../../components/groupbtnrow'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { HomeLogic } from './home.logic'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
export default function Main(props) {
  const {
    user,
    urlimage,
    value, setValue,
    page, setpage,
    refFlatlist, refValue, Logout, datamovie
  } = HomeLogic(props)


  return (
    <View style={styles.container}>
      <View style={{ width: '95%', height: 45, paddingTop: 15 }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, justifyContent: 'flex-start', width: '95%' }}>
          
          <TouchableOpacity style={{width:30,height:30}}
          onPress={()=>props.navigation.openDrawer()

          }>
            
          <IconMenu name="menu" color="#FF9900" size={25} />
          </TouchableOpacity>

          <Text style={styles.txtitle}>IMDb</Text>
        </View>
      
      </View>
   
     <GroupBtn
      initValue={value}
      setinitValue={setValue}
     />
      <View>
        <FlatList
          ref={refFlatlist}
          style={styles.viewflatlist}
          keyExtractor={(item, index) => index.toString()}
          data={datamovie}
          ListFooterComponent={
            <View
              style={{ backgroundColor: '#666666', height: 50, width: '100%' }}>
              <Text style={{ textAlign: 'center' }}>Loading more...</Text>
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
                  style={{ height: 250, width: '100%' }}
                  source={{
                    uri: `${urlimage}/${itemData.item.poster_path}`,
                  }}
                />

                <Text style={{ color: 'white', textAlign: 'center' }}>
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
  );
}
