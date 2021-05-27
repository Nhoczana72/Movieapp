export const types = {
    GET_ALL_MOVIE: 'GET_ALL_MOVIE',
    GET_ALL_MOVIE_SUCCESS: 'GET_ALL_MOVIE_SUCCESS',
    GET_ALL_MOVIE_FAIL: 'GET_ALL_MOVIE_FAIL',
    GET_All_ACTOR: 'GET_ALL_ACTOR',
    GET_All_ACTOR_SUCCESS: 'GET_All_ACTOR_SUCEESS',
    GET_All_ACTOR_FAIL: 'GET_All_ACTOR_FAIL',
    GET_ALL_NEW_MOVIE: 'GET_ALL_NEW_MOVIE',
    GET_ALL_NEW_MOVIE_SUCCESS: ' GET_ALL_NEW_MOVIE_SUCCESS',
    GET_ALL_NEW_MOVIE_FAIL: 'GET_ALL_NEW_MOVIE_FAIL',
  };
  const action = (type: string, payload?: any) => ({type, payload});
  
  export const homeAction = {
    getALLMovies: (payLoad: any) => action(types.GET_ALL_MOVIE, payLoad),
    getALLMoviesSuccess: (payload: any) =>
      action(types.GET_ALL_MOVIE_SUCCESS, payload),
    getALLMoviesFail: (payload: any) => action(types.GET_ALL_MOVIE_FAIL, payload),
    getAllActors: (payload: any) => action(types.GET_All_ACTOR, payload),
    getAllActorsSuccess: (payload: any) =>
      action(types.GET_All_ACTOR_SUCCESS, payload),
    getAllActorsFail: (payload: any) => action(types.GET_All_ACTOR_FAIL, payload),
    getAllNewMovies: (payload: any) => action(types.GET_ALL_NEW_MOVIE, payload),
    getAllNewMoviesSuccess: (payload: any) =>
      action(types.GET_ALL_NEW_MOVIE_SUCCESS, payload),
    getAllNewMoviesFail: (payload: any) =>
      action(types.GET_ALL_NEW_MOVIE_FAIL, payload),
  };