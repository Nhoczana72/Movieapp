import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from 'react-native-ratings';
import styles from './styles';
import { GroupBtn } from '../../components/groupbtnrow'
import { Headerapp } from '../../components/Header'
import { HomeLogic } from './home.logic'
import { SliderBox } from "react-native-image-slider-box";
import { SLIDER } from '../../assets'
export default function Main(props) {
  const img = [
    SLIDER,
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?tree", // Network image
    // Local image
  ]
  const {
    urlimage,
    value,
    setValue,
    datamovie,
    refreshing,
    onRefresh
  } = HomeLogic(props)
  const renderitem = (itemData) => {
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
            itemData?.item?.vote_average
              ? itemData.item.vote_average / 2
              : 0
          }
          showRating={false}
          ratingCount={5}
          tintColor="#111111"
          imageSize={13}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Headerapp
        title="Booking Movie"
        icon='menu'
        onpress={() => props.navigation.openDrawer()}
      />

      <View style={{ height: 100 }}>
        <SliderBox images={img}
          // style={{width:'95%',height:100,marginTop:5}} 
          sliderBoxHeight={100}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
          resizeMode="stretch"
        />
      </View>
      {/* <Image style={{resizeMode='stretch'}}/> */}
      <GroupBtn
        initValue={value}
        setinitValue={setValue}
      />

      <View  style={styles.viewflatlist}>
        <FlatList
           refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} ></RefreshControl>}
          style={styles.viewflatlist}
          keyExtractor={(item, index) => index.toString()}
          data={datamovie}
          numColumns={2}
          renderItem={itemData => renderitem(itemData)}
        />
      </View>
    </View>
  );
}
