import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { homeAction } from '../../redux/movie/action';

export const HomeLogic = (props) => {
  let urlimage = 'https://image.tmdb.org/t/p/w500';
  const dispatch = useDispatch();
  const [value, setValue] = useState('now_playing');
  const [page, setpage] = useState(1);
  const refFlatlist = useRef(null);
  const refValue = useRef('now_playing');

  const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser] = <any>useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (inittializing) setInitiallizing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [user]);
  const Logout = () => {

    auth()
      .signOut()
      .then(() => { props.navigation.navigate('Login') });
  }

  useEffect(() => {
    if (value !== refValue?.current) {
      setpage(1);
      refValue.current = value;
      datamovie?.length > 0 &&
        refFlatlist?.current?.scrollToIndex({ animated: true, index: 0 });
    }
    dispatch(homeAction.getALLMovies({ page, value }));
  }, [page, value]);

  const datamovie = useSelector((state: any) => {
    return state?.movie?.allMovie;
  });
  return {
    urlimage,
    value, setValue,
    page, setpage,
    refFlatlist, refValue, Logout, datamovie, user
  }
}