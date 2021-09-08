import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dimensions,View,Text,FlatList,TouchableOpacity } from 'react-native'
import {useDispatch, useSelector}from 'react-redux'
import {VideoAction} from '../../../redux/video/action'
import {ViewLandscape} from '../modules/landscape/View_Item_landscape'
import {ViewPortrait} from '../modules/portrait/View_Item_portrait'
import IconMenu from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Headerapp } from '../../../components/Header';


export const Trailer=(props:any)=>{
    const [datavideo, setdatavideo] = useState([]);
    const [orientation, setOrientation] = useState('portrait');
    const [size,setsize]=useState({
      width:200,
      height:100
    })
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
            setsize({width:newDimensions.window.width*90/100,height:newDimensions.window.height*100/100})
          } else {
            setOrientation('portrait');
          }
        });};
        const renderitem=(itemdata)=>{
          {
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
          }
        }
        return(
          <View style={{flex:1,backgroundColor:'black',alignItems:'center'}}>
             <Headerapp
        title="Trailer"
        icon='chevron-left'
        onpress={()=>props.navigation.goBack() }
      />
             
            <FlatList
              keyExtractor={(item, index) => index?.toString()}
              data={data}
              renderItem={itemdata => renderitem(itemdata)}
            />
                 </View>
        );
      
}