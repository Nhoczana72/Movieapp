import { types } from './action';
const initState = {
  allMovie: [],

};

const reducerMovie: any = (state = initState, actions: any) => {
  const { payload } = actions;
  switch (actions.type) {
    case types.GET_ALL_MOVIE: {
      return { ...state, payload };
    }
    case types.GET_ALL_MOVIE_SUCCESS: {
      return { ...state, allMovie: payload?.refesh ? payload?.data : state.allMovie.concat(payload?.data) };
    }
    case types.GET_ALL_MOVIE_FAIL: {
      return { ...state, allMovie: [] };
    }
  }
  return state;
};
export default reducerMovie;