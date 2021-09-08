import { types } from './action';
const initState = {
  allMovie: [],
  detailmovie:[]

};

const reducerMovie: any = (state = initState, actions: any) => {
  const { payload } = actions;
  switch (actions.type) {
    case types.GET_ALL_MOVIE: {
      return { ...state, payload };
    }
    case types.GET_ALL_MOVIE_SUCCESS: {
      return { ...state, allMovie: payload?.data  };
    }
    case types.GET_ALL_MOVIE_FAIL: {
      return { ...state, allMovie: [] };
    }
    case types.GET_ALL_NEW_MOVIE: {
      return { ...state };
    }
    case types.GET_ALL_NEW_MOVIE_SUCCESS: {
      return { ...state, detailmovie:  payload  };
    }
    case types.GET_ALL_NEW_MOVIE_FAIL: {
      return { ...state};
    }
    
  }
  return state;
};
export default reducerMovie;