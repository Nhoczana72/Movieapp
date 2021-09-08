import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { homeAction } from '../../redux/movie/action';
const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export const HomeLogic = (props) => {
  let urlimage = 'https://image.tmdb.org/t/p/w500';
  const dispatch = useDispatch();
  const [value, setValue] = useState('now_playing');
  const [setpage] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {

    dispatch(homeAction.getALLMovies({ value }));
    onRefresh()
  }, [value]);

  const datamovie = useSelector((state: any) => {
    return state?.movie?.allMovie;
  });
  return {
    urlimage,
    value, 
    setValue,
    setpage,
    datamovie,
    refreshing,
    onRefresh
  }
}