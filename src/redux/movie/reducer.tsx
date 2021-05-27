import {types} from './action';
const initState = {
  allMovie: [],
  
};

 const reducerMovie: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_MOVIE: {
      return {...state, allMovie: []};
    }
    case types.GET_ALL_MOVIE_SUCCESS: {
        console.log('state.allMovie',payload);
      return {...state, allMovie: payload};
    }
    case types.GET_ALL_MOVIE_FAIL: {
      return {...state};
    }
  }
  return state;
};
export default reducerMovie;