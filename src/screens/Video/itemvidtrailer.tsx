import React, {useEffect} from 'react';
import { View  } from 'react-native';

import {trailerAction} from '../../redux/trailer/action';
import {useDispatch, useSelector} from 'react-redux';
function ItemVid({id}) {
  const dispatch = useDispatch();

  const dispatchActionMovie = () => {
    const actions = trailerAction.getAllTrailer(id);
    dispatch(actions);
  };
  // const data = useSelector(state => {
  //   return state?.trailer?.allTrailer;
  // });

  useEffect(() => {
    try {
      // loadvideo();
      dispatchActionMovie();
    } catch (error) {
      console.log('error', error);
    }
    
  }, []);

  return (
   <View></View>
  );
}

export default ItemVid;
