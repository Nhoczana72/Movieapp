import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dimensions,View,Text,FlatList,TouchableOpacity } from 'react-native'
import {useDispatch, useSelector}from 'react-redux'
import {VideoAction} from '../../../redux/video/action'
import {ViewLandscape} from '../modules/landscape/View_Item_landscape'
import {ViewPortrait} from '../modules/portrait/View_Item_portrait'
import IconMenu from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP } from 'react-native-responsive-screen';


export const Trailer=(props:any)=>{
    const [datavideo, setdatavideo] = useState([]);
    const [orientation, setOrientation] = useState('portrait');
   const dispatch=useDispatch()
   const id=props.route.params.id
    const loadvideo=()=>{
        const action=VideoAction.getAllVideo(id)
        return dispatch(action)
    }
    const data=useSelector((state:any)=>{return state.video.allVideo})
      useEffect(() => {
        try {
          loadvideo();
          CheckOrrientation();
        } catch (error) {
          console.log('error', error);
        }
      }, [orientation]);

      const CheckOrrientation = () => {
        Dimensions.addEventListener('change', newDimensions => {
          if (newDimensions.window.width > newDimensions.window.height) {
            setOrientation('landscape');
          } else {
            setOrientation('portrait');
          }
        });};
        return(
          <View style={{flex:1,backgroundColor:'black',alignItems:'center'}}>
             <View
          style={{ flexDirection: 'row', alignItems: 'center',   width: '100%',backgroundColor:'black',paddingTop: 15 ,borderBottomWidth:1,borderColor:'#FF9900',marginBottom:5}}>
          <TouchableOpacity style={{width:30,height:30}}
          onPress={()=>props.navigation.goBack()}>
          <IconMenu name="chevron-left" color="#FF9900" size={25} />
          </TouchableOpacity>
          <Text style={{ color: '#FF9900',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginLeft:widthPercentageToDP(38),
    position:'absolute'}}>Trailer</Text>
        </View>
            <FlatList
              keyExtractor={(item, index) => index?.toString()}
              data={data}
              renderItem={itemdata => {
                return orientation == 'portrait' ? (
                  <View key={itemdata?.index + ''}>
                    <ViewPortrait
                      name={itemdata?.item.name}
                      source={itemdata?.item.source}
                    />
                  </View>
                ) : (
                  <View>
                    <ViewLandscape
                      name={itemdata?.item.name}
                      source={itemdata?.item.source}
                    />
                  </View>
                );
              }}
            />
                 </View>
        )
      
}